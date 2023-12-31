import {setAppErrorAC, setAppStatusAC, setInitializedAC} from "./appReducer";

// ===== Action Types ==== //
export type SetAppErrorAT = ReturnType<typeof setAppErrorAC>
export type SetAppStatusAT = ReturnType<typeof setAppStatusAC>
export type SetInitializedAT = ReturnType<typeof setInitializedAC>

export type AppReducerActionTypes = SetAppErrorAT | SetAppStatusAT | SetInitializedAT