import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {sortOrdersFilm, sortTypesFilm, sortRatingFilm} from "../../../common/components/filtersSort/dataFiltersSort";
import {OrderType, StyleFilmType} from "../../../api/types/CategoriesTypes";


const initialState = {
    order: sortOrdersFilm[0].value as OrderType,
    type: sortTypesFilm[0].value,
    idCountry: 0,
    idGenre: 0,
    rating: sortRatingFilm[0].value,
    year: 0,
}

const slice = createSlice({
    name: 'filtersSort',
    initialState,
    reducers: {
        setOrder(state, action: PayloadAction< {order: OrderType}>) {
            state.order = action.payload.order
        },

        setType(state, action: PayloadAction<{type: StyleFilmType}>){
            state.type = action.payload.type
        },

        setIdCountry(state, action: PayloadAction<{idCountry: number}>){
            state.idCountry = action.payload.idCountry
        },

        setIdGenre(state, action: PayloadAction<{idGenre: number}>){
            state.idCountry = action.payload.idGenre
        },

        setRating(state, action: PayloadAction<{rating: number}>){
            state.rating = action.payload.rating
        },

        setYear(state, action: PayloadAction<{year: number}>){
            state.year = action.payload.year
        },
    }
})


export const filtersSortReducer = slice.reducer
export const {setOrder, setType, setIdCountry, setIdGenre, setRating, setYear} = slice.actions