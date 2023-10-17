import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {AppThunkType} from "../../store/store";
import {setAppStatusAC} from "../appReducer/appReducer";
import {AppStatus} from "../../../common/types/commonTypes";
import {baseErrorHandler} from "../../../utils/error-utils/error-utils";
import {filmsAPI} from "../../../api/filmsAPI";
import {FilmItemType, FilmsTypes} from "../../../api/types/FilmsTypes";
import {
    CategoriesType,
    CountriesType,
    GenresType,
    OrderType,
    SearchType,
    StyleFilmType
} from "../../../api/types/CategoriesTypes";

const initialState: FilmsTypes & CategoriesType & SearchType = {
    total: 0,
    totalPages: 0,
    items: [] as FilmItemType[],

    genres: [] as GenresType[],
    countries: [] as CountriesType[],

    order: 'RATING' as OrderType,
    type: 'FILM' as StyleFilmType,
    ratingFrom: 8,
    ratingTo: 10,
    yearFrom: 100,
    yearTo: 2023,
    keyword: '',
    currentPage: 1,
}

const slice = createSlice({
    name: 'films',
    initialState: initialState,
    reducers: {
        setFilms(state, action: PayloadAction<FilmsTypes>) {
            state.total = action.payload.total
            state.totalPages = action.payload.totalPages
            state.items = action.payload.items
        },

        setCategories(state, action: PayloadAction<CategoriesType>) {
            state.genres = action.payload.genres
            state.countries = action.payload.countries
        }
    }

})

export const filmsReducer = slice.reducer
export const {setFilms, setCategories} = slice.actions

// ===== ThunkCreators ===== //
export const fetchCategories = (): AppThunkType => async (dispatch, getState) => {
    dispatch(setAppStatusAC({status: AppStatus.LOADING}))

    try {
        const res = await filmsAPI.getCategories()
        dispatch(setCategories({genres: res.data.genres, countries: res.data.countries}))
        dispatch(setAppStatusAC({status: AppStatus.SUCCEEDED}))
    } catch (e) {
        baseErrorHandler(e as Error | AxiosError, dispatch)
        dispatch(setAppStatusAC({status: AppStatus.FAILED}))
    }
}


export const fetchFilms = (): AppThunkType => async (dispatch, getState) => {
    dispatch(setAppStatusAC({status: AppStatus.LOADING}))
    const {
        genres = getState().films.genres.find(el => el.id),
        countries,
        order,
        type,
        ratingFrom,
        ratingTo,
        yearFrom,
        yearTo,
        keyword,
        currentPage,
    } = getState().films

    try {
        await dispatch(fetchCategories())

        const res = await filmsAPI.getFilms({
            // genres,
            // countries: 1,
            order,
            type,
            ratingFrom,
            ratingTo,
            yearFrom,
            yearTo,
            keyword,
            currentPage,
        })
        await dispatch(setFilms({total: res.data.total, totalPages: res.data.totalPages, items: res.data.items}))
        await dispatch(setAppStatusAC({status: AppStatus.SUCCEEDED}))
    } catch (e) {
        baseErrorHandler(e as Error | AxiosError, dispatch)
        dispatch(setAppStatusAC({status: AppStatus.FAILED}))
    }
}

