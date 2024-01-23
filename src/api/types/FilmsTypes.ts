import {StyleFilmType} from "./CategoriesTypes"

export type FilmsTypes = {
    total: number,
    totalPages: number,
    items: FilmItemType []
}

export type FilmItemType = {
    kinopoiskId: number,
    imdbId: string,
    nameRu: string,
    nameEn: string,
    nameOriginal: string,
    countries: [
        {
            country: string
        }
    ],
    genres: [
        {
            genre: string
        }
    ],
    ratingKinopoisk: number,
    ratingImdb: number,
    year: number,
    type: StyleFilmType,
    posterUrl: string,
    posterUrlPreview: string
}

