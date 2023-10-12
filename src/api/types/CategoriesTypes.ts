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