import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {AppThunkType} from "../../store/store";

import {filmsAPIold} from "../../../api/filmsAPIold";
import {setAppStatusAC} from "../appReducer/appReducer";
import {AppStatus} from "../../../common/types/commonTypes";
import {FilmType, TopFilmsType} from "../../../api/types/TopFilmsTypes";
import {baseErrorHandler} from "../../../utils/error-utils/error-utils";


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
// export const fetchTopFilms = (): AppThunkType => async (dispatch, getState) => {
//     dispatch(setAppStatusAC({status: AppStatus.LOADING}))
//
//     const {
//         currentPage
//     } = getState().topFilms
//
//     try {
//         const res = await filmsAPIold.getTopFilms(currentPage)
//         dispatch(setTopFilms({pagesCount: res.data.pagesCount, films: res.data.films}))
//     } catch (e) {
//         baseErrorHandler(e as Error | AxiosError, dispatch)
//         dispatch(setAppStatusAC({status: AppStatus.FAILED}))
//     }
// }