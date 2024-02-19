import {setIdCountry, setIdGenre, setOrder, setRating, setType, setYear} from "./filtersSortReducer";

type SetOrderAT = ReturnType<typeof setOrder>
type SetTypeAT = ReturnType<typeof setType>
type SetIdCountryAT = ReturnType<typeof setIdCountry>
type SetIdGenreAT = ReturnType<typeof setIdGenre>
type SetRatingAT = ReturnType<typeof setRating>
type SetYearAT = ReturnType<typeof setYear>

export type FiltersSortActionTypes = SetOrderAT
    | SetTypeAT
    | SetIdCountryAT
    | SetIdGenreAT
    | SetRatingAT
    | SetYearAT