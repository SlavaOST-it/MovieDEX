export type GenresType = {
    id: number,
    genre: string
}

export type CountriesType = {
    id: number,
    country: string
}

export type CategoriesType = {
    genres: GenresType [],
    countries: CountriesType []
}

export type OrderType = 'RATING' | 'NUM_VOTE' | 'YEAR'
export type StyleFilmType = 'FILM' | 'TV_SHOW' | 'TV_SERIES' | 'MINI_SERIES' | 'ALL'

export type SearchType = {
    order: OrderType,
    type: StyleFilmType,
    currentGenreId?: number,
    currentCountryId?: number,
    ratingFrom: number,
    ratingTo: number,
    yearFrom: number,
    yearTo: number,
    keyword: string,
    currentPage: number,
}