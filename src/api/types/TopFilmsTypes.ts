export type TopFilmsType = {
    pagesCount: number,
    currentPage: number,
    films: FilmType[]
}

export type FilmType = {
    filmId: number,
    nameRu: string | null,
    nameEn: string | null,
    year: string | null,
    filmLength: string | null,
    countries: [
        {
            country: string | null,
        }
    ],
    genres: [
        {
            genre: string | null,
        }
    ],
    rating: string | null,
    ratingVoteCount: number | null,
    posterUrl: string | null,
    posterUrlPreview: string | null,
    ratingChange: string | null,
    isRatingUp: string | null,
    isAfisha: number
}