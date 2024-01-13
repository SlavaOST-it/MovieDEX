import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {baseUrl} from "./apiConfig/instance";
import {PremieresFilmsType} from "./types/PremieresFilmsType";
import {TopFilmsType} from "./types/TopFilmsTypes";


export const filmsAPI = createApi({
    reducerPath: "filmsAPI",
    baseQuery: fetchBaseQuery({
        baseUrl,
        method: 'GET',
        headers: {
            'X-API-KEY': 'c2cb13de-6ef9-400f-91ac-2bdccec3e363',
            'Content-Type': 'application/json',
        }
    }),
    endpoints: (build) => ({
        getTopFilms: build.query<TopFilmsType, number>({
            query: (currentPage: number) => {
                return {
                    url: `films/top?page=${currentPage}`,
                }
            }
        }),

        getPremieresFilms: build.query<PremieresFilmsType, { year: number, month: string }>({
            query: (args) => {
                const {year, month} = args;
                return {
                    method: 'GET',
                    url: `films/premieres`,
                    params: {
                        year,
                        month
                    }
                };
            },
        }),


    })
});

export const {
    useGetTopFilmsQuery,
    useGetPremieresFilmsQuery,
} = filmsAPI