import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {PremieresFilmsType} from "./types/PremieresFilmsType";
import {FilmsTypes} from "./types/FilmsTypes";

import {CategoriesType, SearchType} from "./types/CategoriesTypes";


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
    tagTypes: ['filter'],
    endpoints: (build) => ({
        getPremieresFilms: build.query<PremieresFilmsType, { year: number, month: string }>({
            query: ({year, month}) => {
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

        getTopFilms: build.query<FilmsTypes, number>({
            query: (currentPage: number) => {
                return {
                    url: `films/collections?type=TOP_250_MOVIES&page=${currentPage}`,
                }
            }
        }),

        getSerials: build.query<FilmsTypes, SearchType>({
            query: (payload) => {
                return {
                    method: 'GET',
                    url: `films`,
                    params: {
                        ...payload
                    }
                }
            },
            providesTags: ['filter']
        }),

        getCategories: build.query<CategoriesType, {}>({
            query() {
                return {
                    method: 'GET',
                    url: `films/filters`,
                }
            }
        }),

        getFilms: build.query<FilmsTypes, SearchType>({
            query(payload) {
                return {
                    method: 'GET',
                    url: `films`,
                    params: {
                        ...payload
                    }
                }
            }
        }),


    }),

});

export const {
    useGetTopFilmsQuery,
    useGetPremieresFilmsQuery,
    useGetSerialsQuery,
    useGetCategoriesQuery,
    useGetFilmsQuery
} = filmsAPI