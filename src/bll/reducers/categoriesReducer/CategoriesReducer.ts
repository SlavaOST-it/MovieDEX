import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {AppThunkType} from "../../store/store";
import {setAppStatusAC} from "../appReducer/appReducer";
import {AppStatus} from "../../../common/types/commonTypes";
import {baseErrorHandler} from "../../../utils/error-utils/error-utils";
import {filmsAPI} from "../../../api/filmsAPI";
import {CategoriesType, SearchType, StyleFilmType} from "../../../api/types/CategoriesTypes";

const initialState: CategoriesType & SearchType = {
    genres: [],
    countries: [],

    order: 'RATING',
    type: 'ALL' as StyleFilmType,
    ratingFrom: 1,
    ratingTo: 10,
    yearFrom: 100,
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
        }
    }
})

export const categoriesReducer = slice.reducer
export const {setCategories} = slice.actions

// ===== ThunkCreators ===== //
// export const fetchCategories = (): AppThunkType => async (dispatch, getState) => {
//     dispatch(setAppStatusAC({status: AppStatus.LOADING}))
//
//     try {
//         const res = await filmsAPI.getCategories()
//         dispatch(setCategories({genres: res.data.genres, countries: res.data.countries}))
//         dispatch(setAppStatusAC({status: AppStatus.SUCCEEDED}))
//     } catch (e) {
//         baseErrorHandler(e as Error | AxiosError, dispatch)
//         dispatch(setAppStatusAC({status: AppStatus.FAILED}))
//     }
// }