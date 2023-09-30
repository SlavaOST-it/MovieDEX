import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {PremiereItemType, PremieresFilmsType} from "../../../api/types/PremieresFilmsType";
import {AppThunkType} from "../../store/store";
import {setAppStatusAC} from "../appReducer/appReducer";
import {AppStatus} from "../../../common/types/commonTypes";
import {baseErrorHandler} from "../../../utils/error-utils/error-utils";
import {filmsAPI} from "../../../api/filmsAPI";

const initialState: PremieresFilmsType = {
    total: 0,
    items: [] as PremiereItemType []
}

const slice = createSlice({
    name: 'premieresFilms',
    initialState: initialState,
    reducers: {
        setPremieresFilms(state, action: PayloadAction<{total: number, items: PremiereItemType[]}>){
            state.total = action.payload.total
            state.items = action.payload.items
        },
    }

})

export const premieresFilmsReducer = slice.reducer
export const {setPremieresFilms} = slice.actions

// ===== ThunkCreators ===== //
export const fetchPremieresFilms = (year: number, month: string): AppThunkType => async (dispatch, getState) => {
    dispatch(setAppStatusAC({status: AppStatus.LOADING}))

    try {
        const res = await filmsAPI.getPremiere(year, month)
        dispatch(setPremieresFilms({total: res.data.total, items: res.data.items}))

    } catch (e) {
        baseErrorHandler(e as Error | AxiosError, dispatch)
        dispatch(setAppStatusAC({status: AppStatus.FAILED}))
    }
}