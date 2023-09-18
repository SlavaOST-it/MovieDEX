import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {filmsAPI, FilmType, TopFilmsType} from "../../../api/filmsAPI";
import {AppThunkType} from "../../store/store";
import {setAppStatusAC} from "../appReducer/appReducer";
import {AppStatus} from "../../../common/types/commonTypes";
import {AxiosError} from "axios";
import {baseErrorHandler} from "../../../utils/error-utils/error-utils";


// export const fetchTopFilms = createAsyncThunk(
//     'topFilms/fetchTopFilms',
//     async (_, thunkAPI) => {
//         thunkAPI.dispatch(setAppStatusAC({status: AppStatus.LOADING}))
//
//         try {
//             const {
//                 currentPage,
//             } = thunkAPI.getState()
//
//             const res = await filmsAPI.getTopFilms(currentPage)
//             thunkAPI.dispatch(setTopFilms({pagesCount: res.data.pagesCount, films: res.data.films}))
//             thunkAPI.dispatch(setAppStatusAC({status: AppStatus.SUCCEEDED}))
//         } catch (e) {
//             baseErrorHandler(e as Error | AxiosError, thunkAPI.dispatch)
//             thunkAPI.dispatch(setAppStatusAC({status: AppStatus.FAILED}))
//         } finally {
//             thunkAPI.dispatch(setAppStatusAC({status: AppStatus.IDLE}))
//         }
//
//     })

const initialState: TopFilmsType = {
    pagesCount: 0,
    currentPage: 1,
    films: [] as FilmType[]
}

const slice = createSlice({
    name: 'topFilms',
    initialState: initialState,
    reducers: {
        setTopFilms(state, action: PayloadAction<{ pagesCount: number, films: FilmType[] }>) {
            state.pagesCount = action.payload.pagesCount;
            state.films = action.payload.films
        },
        setCurrentPage(state, action: PayloadAction<{ currentPage: number }>) {
            state.currentPage = action.payload.currentPage
        }

    }

})

export const topFilmsReducer = slice.reducer
export const {setTopFilms, setCurrentPage} = slice.actions


// ===== ThunkCreators ===== //
export const fetchTopFilms = (): AppThunkType => async (dispatch, getState) => {
    dispatch(setAppStatusAC({status: AppStatus.LOADING}))

    const {
        currentPage
    } = getState().topFilms

    try {
        const res = await filmsAPI.getTopFilms(currentPage)
        dispatch(setTopFilms({pagesCount: res.data.pagesCount, films: res.data.films}))
    } catch (e) {
        baseErrorHandler(e as Error | AxiosError, dispatch)
        dispatch(setAppStatusAC({status: AppStatus.FAILED}))
    }
}