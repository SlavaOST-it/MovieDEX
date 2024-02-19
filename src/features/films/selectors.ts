import {RootState} from "../../bll/store/store";


export const selectFilms = (state: RootState) => state.films.items
export const selectTotalPage = (state: RootState) => state.films.totalPages
// export const selectCurrentPage = (state: RootState) => state.films.currentPage