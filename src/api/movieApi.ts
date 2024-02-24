import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {MovieI} from "./types/MovieType";


export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BASE_URL,
        method: 'GET',
        headers: {
            'X-API-KEY': process.env.REACT_APP_API_KEY || '',
            'Content-Type': 'application/json',
        }
    }),

    endpoints: (build) => ({
        getInfoMovie: build.query<MovieI, number>({
            query(id) {
                return {
                    url: `films/${id}`,
                }
            },
        }),

        getSeasonsSerial: build.query<any, number>({
            query(id) {
                return {
                    url: `films/${id}/season`,
                }
            },
        })
    })

})


export const {useGetInfoMovieQuery} = movieApi