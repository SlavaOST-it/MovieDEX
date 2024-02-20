import {OrderType, StyleFilmType} from "../../../api/types/CategoriesTypes";

export const sortOrdersFilm: Array<{ optionName: string, value: OrderType }> = [
    {
        optionName: 'Рейтинг',
        value: 'RATING'
    },
    {
        optionName: 'Количество голосов',
        value: 'NUM_VOTE'
    },
    {
        optionName: 'Год',
        value: 'YEAR'
    }]


export const sortTypesSerial: Array<{ optionName: string, value: StyleFilmType }> = [
    {
        optionName: 'Сериал',
        value: 'TV_SERIES'
    },
    {
        optionName: 'Мини-сериал',
        value: 'MINI_SERIES'
    },
    {
        optionName: 'ТВ-шоу',
        value: 'TV_SHOW'
    },
]

export const sortTypesFilm: Array<{ optionName: string, value: StyleFilmType }> = [
    {
        optionName: 'Фильм',
        value: 'FILM'
    },
]

export const sortRatingFilm: Array<{ optionName: string, value: number }> = [
    {
        optionName: 'Любой рейтинг',
        value: 0
    },
    {
        optionName: 'Больше 9',
        value: 9
    },
    {
        optionName: 'Больше 8',
        value: 8
    },
    {
        optionName: 'Больше 7',
        value: 7
    },
    {
        optionName: 'Больше 6',
        value: 6
    },
]