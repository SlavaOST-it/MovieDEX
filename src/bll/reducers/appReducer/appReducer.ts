import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppStatus} from "../../../common/types/commonTypes";


const initialState = {
    status: AppStatus.IDLE,
    error: null as string | null,
    isInitialized: false
};

const slice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        setAppStatusAC(state, action: PayloadAction<{ status: AppStatus }>) {
            state.status = action.payload.status
        },

        setAppErrorAC(state, action: PayloadAction<{ error: string | null }>) {
            state.error = action.payload.error
        },

        setInitializedAC(state, action: PayloadAction<{ value: boolean }>) {
            state.isInitialized = action.payload.value
        }
    }
})

export const appReducer = slice.reducer
export const {setAppStatusAC, setAppErrorAC, setInitializedAC} = slice.actions
