import {setCategories, setCurrentCountry, setCurrentGenre} from "./CategoriesReducer";


// ===== Action Types ==== //


type SetCategoriesAT = ReturnType<typeof setCategories>
type SetCurrentGenreAT = ReturnType<typeof setCurrentGenre>
type SetCurrentCountryAT = ReturnType<typeof setCurrentCountry>


export type CategoriesActionTypes = SetCurrentGenreAT | SetCategoriesAT | SetCurrentCountryAT