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


export type TopFilmType = 'TOP_POPULAR_ALL'
    | 'TOP_POPULAR_MOVIES'
    | 'TOP_250_TV_SHOWS'
    | 'TOP_250_MOVIES'
    | 'VAMPIRE_THEME'
    | 'COMICS_THEME'
    | 'CLOSES_RELEASES'
    | 'FAMILY'
    | 'LOVE_THEME'
    | 'ZOMBIE_THEME'
    | 'CATASTROPHE_THEME'
    | 'KIDS_ANIMATION_THEME'


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