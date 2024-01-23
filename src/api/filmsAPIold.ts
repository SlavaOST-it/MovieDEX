import {instance} from "./apiConfig/instance";

import {FilmsTypes} from "./types/FilmsTypes";
import {PremieresFilmsType} from "./types/PremieresFilmsType";
import {CategoriesType, SearchType} from "./types/CategoriesTypes";


export const filmsAPIold = {
    // getTopFilms(currentPage: number) {
    //     return instance<TopFilmsType>(`films/top?page=${currentPage}`, {});
    // },

    getPremiere(year: number, month: string) {
        return instance<PremieresFilmsType>(`films/premieres?year=${year}&month=${month}`)
    },

    getCategories() {
        return instance<CategoriesType>(`films/filters`)
    },

    getFilms(payload: GetFilmsType & SearchType) {
        return instance<FilmsTypes>(`films`, {params: {...payload}})
    },
}


export type GetFilmsType = {
    genres?: number,
    countries?: number,

}