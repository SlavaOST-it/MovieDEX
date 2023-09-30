import {instance} from "./apiConfig/instance";
import {PremieresFilmsType} from "./types/PremieresFilmsType";
import {TopFilmsType} from "./types/TopFilmsTypes";


export const filmsAPI = {

    getTopFilms(currentPage: number) {
        return instance<TopFilmsType>(`films/top?page=${currentPage}`, {});
    },

    getPremiere(year: number, month: string) {
        return instance<PremieresFilmsType>(`films/premieres?year=${year}&month=${month}`)
    }

}

