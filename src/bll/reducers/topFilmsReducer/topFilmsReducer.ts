import {createSlice, PayloadAction} from "@reduxjs/toolkit";



const initialState: any = {
    pagesCount: 0,
    currentPage: 1,
    films: []
}

const slice = createSlice({
    name: 'topFilms',
    initialState: initialState,
    reducers: {
        setTopFilms(state, action: PayloadAction<{ pagesCount: number, films: [] }>) {
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
//         dispatch(setTopFilms({pagesCount: res.data.pagesCount, catalog: res.data.catalog}))
//     } catch (e) {
//         baseErrorHandler(e as Error | AxiosError, dispatch)
//         dispatch(setAppStatusAC({status: AppStatus.FAILED}))
//     }
// }