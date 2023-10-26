import {RootState} from "../../bll/store/store";


export const selectGenre = (state: RootState) => state.categories.genres
export const selectCountry = (state: RootState) => state.categories.countries
export const selectCurrentPage = (state: RootState) => state.topFilms.currentPage