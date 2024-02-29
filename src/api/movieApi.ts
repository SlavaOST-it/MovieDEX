import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {
    AwardsMovieType,
    BoxOfficeMovieType, ExternalSourcesMovieType,
    FactsMovieType,
    ImagesMovieType,
    MovieI,
    MovieInfoType,
    SeasonsMovieType,
    SimilarMovieType,
    VideoMovieType
} from "./types/MovieType";


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

        getBoxOffice: build.query<MovieInfoType<BoxOfficeMovieType>, number>({
            query(id) {
                return {
                    url: `films/${id}/box_office`,
                }
            },
        }),

        getSimilar: build.query<MovieInfoType<SimilarMovieType>, number>({
            query(id) {
                return {
                    url: `films/${id}/similars`,
                }
            },
        }),

        getImages: build.query<ImagesMovieType, {id: number, type?: string, page: number}>({
            query(payload) {
                return {
                    url: `films/${payload.id}/images`,
                    params: {
                        ...payload
                    }
                }
            },
        }),

        getExternalSources: build.query<MovieInfoType<ExternalSourcesMovieType>, number>({
            query(id) {
                return {
                    url: `films/${id}/external_sources`,
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

    useGetBoxOfficeQuery,
    useGetSimilarQuery,
    useGetImagesQuery,
    useGetExternalSourcesQuery,
} = movieApi