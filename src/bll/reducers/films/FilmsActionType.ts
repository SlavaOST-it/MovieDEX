import {setCategories, setFilms} from "./filmsReducer";


// ===== Action Types ==== //
type SetFilmsAT = ReturnType<typeof setFilms>
type SetCategoriesAT = ReturnType<typeof setCategories>

export type FilmsActionTypes = SetFilmsAT | SetCategoriesAT