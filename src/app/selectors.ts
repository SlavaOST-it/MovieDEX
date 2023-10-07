import {RootState} from "../bll/store/store";


export const appStatus = (state: RootState) => state.app.status
export const errorApp = (state: RootState) => state.app.error