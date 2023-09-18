import {setCurrentPage, setTopFilms} from "./topFilmsReducer";


// ===== Action Types ==== //



type SetTopFilmsAT = ReturnType<typeof setTopFilms>
type SetCurrentPageAT = ReturnType<typeof setCurrentPage>


export type TopFilmsActionTypes = SetTopFilmsAT | SetCurrentPageAT