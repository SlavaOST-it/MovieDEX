import {setupListeners} from "@reduxjs/toolkit/query";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'

import {filmsAPI} from "../../api/filmsApi";
import {filmsReducer} from "../reducers/films/filmsReducer";
import {appReducer} from "../reducers/appReducer/appReducer";
import {categoriesReducer} from "../reducers/categoriesReducer/CategoriesReducer";

import {FilmsActionTypes} from "../reducers/films/FilmsActionType";
import {AppReducerActionTypes} from "../reducers/appReducer/appReducer-types";
import {CategoriesActionTypes} from "../reducers/categoriesReducer/CategoriesActionType";


const rootReducer = combineReducers({
    app: appReducer,
    films: filmsReducer,
    categories: categoriesReducer,

    // RTK Query
    [filmsAPI.reducerPath]: filmsAPI.reducer,
})

type ReduxActionType =
    AppReducerActionTypes
    | FilmsActionTypes
    | CategoriesActionTypes


export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
        .prepend(thunkMiddleware)
        .concat(filmsAPI.middleware)
});

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatchType = ThunkDispatch<RootState, unknown, ReduxActionType>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ReduxActionType>