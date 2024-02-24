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