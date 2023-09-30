export type PremieresFilmsType = {
    "total": number,
    "items": PremiereItemType []
}

export type PremiereItemType = {
    "kinopoiskId": number,
    "nameRu": string,
    "nameEn": string,
    "year": number,
    "posterUrl": string,
    "posterUrlPreview": string,
    "countries": [
        {
            "country": string
        }
    ],
    "genres": [
        {
            "genre": string
        }
    ],
    "duration": number,
    "premiereRu": string
}
