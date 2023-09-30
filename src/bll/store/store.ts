import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'

import {topFilmsReducer} from "../reducers/topFilmsReducer/topFilmsReducer";
import {appReducer} from "../reducers/appReducer/appReducer";
import {AppReducerActionTypes} from "../reducers/appReducer/appReducer-types";
import {TopFilmsActionTypes} from "../reducers/topFilmsReducer/TopFilmsActionType";
import {PremieresFilmsActionTypes} from "../reducers/premieresFilmsReducer/PremieresFilmsActionType";
import {premieresFilmsReducer} from "../reducers/premieresFilmsReducer/premieresFilmsReducer";


const rootReducer = combineReducers({
    app: appReducer,
    topFilms: topFilmsReducer,
    premieresFilms: premieresFilmsReducer
})

type ReduxActionType = AppReducerActionTypes | TopFilmsActionTypes | PremieresFilmsActionTypes


export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatchType = ThunkDispatch<RootState, unknown, ReduxActionType>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ReduxActionType>