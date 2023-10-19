import {setCategories, setCurrentGenre, setFilms} from "./filmsReducer";


// ===== Action Types ==== //
type SetFilmsAT = ReturnType<typeof setFilms>
type SetCategoriesAT = ReturnType<typeof setCategories>
type SetCurrentGenreAT = ReturnType<typeof setCurrentGenre>

export type FilmsActionTypes = SetFilmsAT | SetCategoriesAT | SetCurrentGenreAT