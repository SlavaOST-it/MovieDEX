import {setupListeners} from "@reduxjs/toolkit/query";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'

import {filmsAPI} from "../../api/filmsApi";
import {appReducer} from "../reducers/appReducer/appReducer";
import {AppReducerActionTypes} from "../reducers/appReducer/appReducer-types";
import {filtersSortReducer} from "../reducers/filtersSort/filtersSortReducer";
import {FiltersSortActionTypes} from "../reducers/filtersSort/FiltersSortActionTypes";
import {movieReducer} from "../reducers/movie/movieReducer";
import {MovieActionTypes} from "../reducers/movie/MovieTypes";
import {movieApi} from "../../api/movieApi";


const rootReducer = combineReducers({
    app: appReducer,
    filtersSort: filtersSortReducer,
    movie: movieReducer,

    // RTK Query
    [filmsAPI.reducerPath]: filmsAPI.reducer,
    [movieApi.reducerPath]: movieApi.reducer
})

type ReduxActionType =
    AppReducerActionTypes
    | FiltersSortActionTypes
    | MovieActionTypes


export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
        .prepend(thunkMiddleware)
        .concat(filmsAPI.middleware)
        .concat(movieApi.middleware)
});

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatchType = ThunkDispatch<RootState, unknown, ReduxActionType>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ReduxActionType>