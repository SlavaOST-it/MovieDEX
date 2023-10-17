import {instance} from "./apiConfig/instance";

import {TopFilmsType} from "./types/TopFilmsTypes";
import {CategoriesType, CountriesType, SearchType} from "./types/CategoriesTypes";
import {PremieresFilmsType} from "./types/PremieresFilmsType";
import {FilmsTypes} from "./types/FilmsTypes";


export const filmsAPI = {
    getTopFilms(currentPage: number) {
        return instance<TopFilmsType>(`films/top?page=${currentPage}`, {});
    },

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