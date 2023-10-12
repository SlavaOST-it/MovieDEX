import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {AppThunkType} from "../../store/store";
import {setAppStatusAC} from "../appReducer/appReducer";
import {AppStatus} from "../../../common/types/commonTypes";
import {baseErrorHandler} from "../../../utils/error-utils/error-utils";
import {filmsAPI} from "../../../api/filmsAPI";
import {fetchCategories} from "../categoriesReducer/CategoriesReducer";
import {FilmItemType, FilmsTypes} from "../../../api/types/FilmsTypes";

const initialState: FilmsTypes = {
    total: 0,
    totalPages: 0,
    items: [] as FilmItemType[]
}

const slice = createSlice({
    name: 'films',
    initialState: initialState,
    reducers: {
        setFilms(state, action: PayloadAction<FilmsTypes>) {
            state.total = action.payload.total
            state.totalPages = action.payload.totalPages
            state.items = action.payload.items
        }
    }

})

export const filmsReducer = slice.reducer
export const {setFilms} = slice.actions

// ===== ThunkCreators ===== //
export const fetchFilms = (): AppThunkType => async (dispatch, getState) => {
    dispatch(setAppStatusAC({status: AppStatus.LOADING}))

    const {
        genres,
        countries,
        order,
        type,
        ratingFrom,
        ratingTo,
        yearFrom,
        yearTo,
        keyword,
        currentPage,
    } = getState().categories

    try {
        dispatch(fetchCategories())
        const res = await filmsAPI.getFilms({
            genres,
            countries,
            order,
            type,
            ratingFrom,
            ratingTo,
            yearFrom,
            yearTo,
            keyword,
            currentPage,
        })
        dispatch(setFilms({total: res.data.total, totalPages: res.data.totalPages, items: res.data.items}))
        dispatch(setAppStatusAC({status: AppStatus.SUCCEEDED}))
    } catch (e) {
        baseErrorHandler(e as Error | AxiosError, dispatch)
        dispatch(setAppStatusAC({status: AppStatus.FAILED}))
    }
}