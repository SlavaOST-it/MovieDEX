import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {
    AwardsMovieType,
    FactsMovieType,
    GenericMovieType,
    MovieI,
    MovieInfoType,
    SeasonsMovieType, VideoMovieType
} from "./types/MovieType";
import {ActiveBlockType} from "../features/moviePage/MoreInfoBlock/MoreInfoBlock";


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

        getSeasonsSerial: build.query<MovieInfoType<SeasonsMovieType>, number>({
            query(id) {
                return {
                    url: `films/${id}/seasons`,
                }
            },
        }),

        getAwards: build.query<MovieInfoType<AwardsMovieType>, number>({
            query(id) {
                return {
                    url: `films/${id}/awards`,
                }
            },
        }),

        getFacts: build.query<MovieInfoType<FactsMovieType>, number>({
            query(id) {
                return {
                    url: `films/${id}/facts`,
                }
            },
        }),

        getVideos: build.query<MovieInfoType<VideoMovieType>, number>({
            query(id) {
                return {
                    url: `films/${id}/videos`,
                }
            },
        }),

        getDistributions: build.query<any, number>({
            query(id) {
                return {
                    url: `films/${id}/distributions`,
                }
            },
        }),

    })

})


export const {
    useGetInfoMovieQuery,
    useGetSeasonsSerialQuery,
    useGetAwardsQuery,
    useGetFactsQuery,
    useGetVideosQuery,

} = movieApi