import {setFilms} from "./filmsReducer";


// ===== Action Types ==== //
type SetFilmsAT = ReturnType<typeof setFilms>

export type FilmsActionTypes = SetFilmsAT