import {instance} from "./apiConfig/instance";

import {FilmsTypes} from "./types/FilmsTypes";
import {PremieresFilmsType} from "./types/PremieresFilmsType";
import {CategoriesType, SearchTypeOLD} from "./types/CategoriesTypes";


export const filmsAPIold = {
    // getTopFilms(currentPage: number) {
    //     return instance<TopFilmsType>(`catalog/top?page=${currentPage}`, {});
    // },

    getPremiere(year: number, month: string) {
        return instance<PremieresFilmsType>(`films/premieres?year=${year}&month=${month}`)
    },

    getCategories() {
        return instance<CategoriesType>(`films/filters`)
    },

    getFilms(payload: GetFilmsType & SearchTypeOLD) {
        return instance<FilmsTypes>(`films`, {params: {...payload}})
    },
}


export type GetFilmsType = {
    genres?: number,
    countries?: number,

}