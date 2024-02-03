import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {AppThunkType} from "../../store/store";
import {setAppStatusAC} from "../appReducer/appReducer";
import {AppStatus} from "../../../common/types/commonTypes";
import {baseErrorHandler} from "../../../utils/error-utils/error-utils";
import {filmsAPIold} from "../../../api/filmsAPIold";
import {
    CategoriesType,
    CountryType,
    GenreType,
    OrderType,
    SearchTypeOLD,
    StyleFilmType
} from "../../../api/types/CategoriesTypes";

const initialState: CategoriesType & SearchTypeOLD = {

    genres: [] as GenreType[],
    countries: [] as CountryType[],

    currentGenreId: 1,
    currentCountryId: 1,

    order: 'RATING' as OrderType,
    type: 'ALL' as StyleFilmType,
    ratingFrom: 1,
    ratingTo: 10,
    yearFrom: 0,
    yearTo: 2023,
    keyword: '',
    currentPage: 1,
}

const slice = createSlice({
    name: 'categories',
    initialState: initialState,
    reducers: {
        setCategories(state, action: PayloadAction<CategoriesType>) {
            state.genres = action.payload.genres
            state.countries = action.payload.countries
        },

        setCurrentGenre(state, action: PayloadAction<{currentGenreId: number}>){
            state.currentGenreId = action.payload.currentGenreId
        },

        setCurrentCountry(state, action: PayloadAction<{currentCountryId: number}>){
            state.currentCountryId = action.payload.currentCountryId
        }
    }
})

export const categoriesReducer = slice.reducer
export const {setCategories, setCurrentGenre,setCurrentCountry} = slice.actions

// ===== ThunkCreators ===== //
export const fetchCategories = (): AppThunkType => async (dispatch) => {
    dispatch(setAppStatusAC({status: AppStatus.LOADING}))

    try {
        const res = await filmsAPIold.getCategories()
        dispatch(setCategories({genres: res.data.genres, countries: res.data.countries}))
        dispatch(setAppStatusAC({status: AppStatus.SUCCEEDED}))
    } catch (e) {
        baseErrorHandler(e as Error | AxiosError, dispatch)
        dispatch(setAppStatusAC({status: AppStatus.FAILED}))
    }
}