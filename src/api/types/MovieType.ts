export interface MovieI {
    kinopoiskId: number;                            // V
    kinopoiskHDId: number | null;
    imdbId: number | null;
    nameRu: string;                                  // V
    nameEn: string | null;
    nameOriginal: string;
    posterUrl: string;
    posterUrlPreview: string;                        // V
    coverUrl: string | null;
    logoUrl: string | null;
    reviewsCount: number;
    ratingGoodReview: number | null;
    ratingGoodReviewVoteCount: number;
    ratingKinopoisk: number;
    ratingKinopoiskVoteCount: number;
    ratingImdb: number;
    ratingImdbVoteCount: number;
    ratingFilmCritics: number | null;
    ratingFilmCriticsVoteCount: number;
    ratingAwait: number;
    ratingAwaitCount: number;
    ratingRfCritics: number | null;
    ratingRfCriticsVoteCount: number;
    webUrl: string;
    year: number;
    filmLength: number;
    slogan: string | null;
    description: string;
    shortDescription: string | null;
    editorAnnotation: string | null;
    isTicketsAvailable: boolean;
    productionStatus: string | null;
    type: string;
    ratingMpaa: string;
    ratingAgeLimits: string;
    countries: { country: string }[];
    genres: { genre: string }[];
    startYear: number | null;
    endYear: number | null;
    serial: boolean;
    shortFilm: boolean;
    completed: boolean;
    hasImax: boolean;
    has3D: boolean;
    lastSync: string;
}


export type MovieInfoType<T> = {
    total: number,
    items: T[]
}

export type GenericMovieType =
    SeasonsMovieType
| FactsMovieType
| DistributionsMovieType
| BoxOfficeMovieType
| AwardsMovieType
| VideoMovieType


export type SeasonsMovieType = {
    "number": number,
    "episodes": [
        {
            "seasonNumber": number,
            "episodeNumber": number,
            "nameRu": string | null,
            "nameEn": string | null,
            "synopsis": string | null,
            "releaseDate": string
        }
    ]
}


export type FactsMovieType = {
    "text": string,
    "type": "BLOOPER" | 'FACT',
    "spoiler": boolean
}


export type DistributionsMovieType = {
    "type": string,                              // узнать точный тип
    "subType": string,
    "date": string,
    "reRelease": boolean,
    "country": {
        "country": string
    },
    "companies": [
        {
            "name": string
        }
    ]
}

export type BoxOfficeMovieType = {
    "type": string,                           // узнать точный тип
    "amount": number,
    "currencyCode": string,
    "name": string,
    "symbol": string
}

export type AwardsMovieType = {
    "name": string,
    "win": boolean,
    "imageUrl": string,
    "nominationName": string,
    "year": number,
    "persons": [
        {
            "kinopoiskId": number,
            "webUrl": string,
            "nameRu": string,
            "nameEn": string,
            "sex": string,
            "posterUrl": string,
            "growth": number,
            "birthday": string,
            "death": string,
            "age": number,
            "birthplace": string,
            "deathplace": string,
            "profession": string

        }
    ]
}

export type VideoMovieType = {
    "url": string,
    "name": string,
    "site": string
}

export type SimilarMovieType = {
    "filmId": number,
    "nameRu": string,
    "nameEn": string,
    "nameOriginal": string,
    "posterUrl": string,
    "posterUrlPreview": string,
    "relationType": string              // проверить тип
}

export type ImagesMovieType = {
    total: number,
    totalPages: number,
    items: [
        {
            imageUrl: string,
            previewUrl: string
        }
    ]
}

export type LinksImagesMovieType =
    'STILL'
    | 'SHOOTING'
    | 'POSTER'
    | 'FAN_ART'
    | 'PROMO'
    | 'CONCEPT'
    | 'WALLPAPER'
    | 'COVER'
    | 'SCREENSHOT'

export type ExternalSourcesMovieType = {
    "url": string,
    "platform": string,
    "logoUrl": string,
    "positiveRating": number,
    "negativeRating": number,
    "author": string,
    "title": string,
    "description": string
}