export type GenreType = {
    id: number,
    genre: string
}

export type CountryType = {
    id: number,
    country: string
}

export type CategoriesType = {
    genres: GenreType [],
    countries: CountryType []
}

export type OrderType = 'RATING' | 'NUM_VOTE' | 'YEAR'
export type StyleFilmType = 'FILM' | 'TV_SHOW' | 'TV_SERIES' | 'MINI_SERIES' | 'ALL'

export type SearchTypeOLD = {
    order?: OrderType,
    type?: StyleFilmType,
    ratingFrom?: number,
    ratingTo?: number,
    yearFrom?: number,
    yearTo?: number,
    keyword?: string,
    currentPage?: number,
    currentGenreId?: number,
    currentCountryId?: number,
}

export type SearchType = {
    countries?: number,
    genres?: number,
    order?: OrderType,
    type?: StyleFilmType,
    ratingFrom?: number,
    ratingTo?: number,
    yearFrom?: number,
    yearTo?: number,
    keyword?: string,
    page?: number,
}