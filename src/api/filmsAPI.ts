import {instance} from "./apiConfig/instance";


export const filmsAPI = {

    topFilms(currentPage = 5) {
        return instance<TopFilmsType>(`films/top?page=${currentPage}`, {});
    },

}

export type TopFilmsType = {
    "pagesCount": number,
    "films": [
        {
            "filmId": number,
            "nameRu": string | null,
            "nameEn": string | null,
            "year": string | null,
            "filmLength": string | null,
            "countries": [
                {
                    "country": string | null,
                },
                {
                    "country": string | null,
                },
                {
                    "country": string | null,
                }
            ],
            "genres": [
                {
                    "genre": string | null,
                },
                {
                    "genre": string | null,
                },
                {
                    "genre": string | null,
                }
            ],
            "rating": string | null,
            "ratingVoteCount": number | null,
            "posterUrl": string | null,
            "posterUrlPreview": string | null,
            "ratingChange": string | null,
            "isRatingUp": string | null,
            "isAfisha": number
        }
    ]
}