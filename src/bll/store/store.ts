import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'

import {appReducer} from "../reducers/appReducer/appReducer";
import {topFilmsReducer} from "../reducers/topFilmsReducer/topFilmsReducer";
import {categoriesReducer} from "../reducers/categoriesReducer/CategoriesReducer";
import {premieresFilmsReducer} from "../reducers/premieresFilmsReducer/premieresFilmsReducer";

import {AppReducerActionTypes} from "../reducers/appReducer/appReducer-types";
import {TopFilmsActionTypes} from "../reducers/topFilmsReducer/TopFilmsActionType";
import {CategoriesActionTypes} from "../reducers/categoriesReducer/CategoriesActionType";
import {PremieresFilmsActionTypes} from "../reducers/premieresFilmsReducer/PremieresFilmsActionType";


const rootReducer = combineReducers({
    app: appReducer,
    topFilms: topFilmsReducer,
    categories: categoriesReducer,
    premieresFilms: premieresFilmsReducer,
})

type ReduxActionType = AppReducerActionTypes | TopFilmsActionTypes | PremieresFilmsActionTypes | CategoriesActionTypes


export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatchType = ThunkDispatch<RootState, unknown, ReduxActionType>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ReduxActionType>