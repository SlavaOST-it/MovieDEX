import axios, {AxiosError} from "axios";
import {Dispatch} from "redux";

import {AppStatus} from "../../common/types/commonTypes";

import {setAppErrorAC, setAppStatusAC} from "../../bll/reducers/appReducer/appReducer";
import {SetAppErrorAT, SetAppStatusAT} from "../../bll/reducers/appReducer/appReducer-types";


export const baseErrorHandler = (e: Error | AxiosError, dispatch: Dispatch<SetAppErrorAT | SetAppStatusAT>) => {
    const err = e as Error | AxiosError
    if (axios.isAxiosError(err)) {
        const error = err.response?.data
            ? (err.response.data as ({ error: string })).error
            : err.message
        dispatch(setAppStatusAC({status: AppStatus.FAILED}))
        dispatch(setAppErrorAC({error: error}))
    }
}