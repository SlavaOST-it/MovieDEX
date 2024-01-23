import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {PremieresFilmsType} from "./types/PremieresFilmsType";
import {FilmsTypes} from "./types/FilmsTypes";


export const filmsAPI = createApi({
    reducerPath: "filmsAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BASE_URL,
        method: 'GET',
        headers: {
            'X-API-KEY': process.env.REACT_APP_API_KEY || '',
            'Content-Type': 'application/json',
        }
    }),
    endpoints: (build) => ({
        getTopFilms: build.query<FilmsTypes, number>({
            query: (currentPage: number) => {
                return {
                    url: `films/collections?type=TOP_250_MOVIES&page=${currentPage}`,
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