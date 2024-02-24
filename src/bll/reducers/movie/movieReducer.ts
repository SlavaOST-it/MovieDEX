import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    id: 0
}

const slice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setIdMovie(state, action: PayloadAction<{ id: number }>) {
            state.id = action.payload.id
        }
    }
})

export const movieReducer = slice.reducer
export const {setIdMovie} = slice.actions