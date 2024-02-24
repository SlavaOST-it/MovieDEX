import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import {FilmItemType} from "../../../api/types/FilmsTypes";
import {PremiereItemType} from "../../../api/types/PremieresFilmsType";

import {PATH} from "../../../utils/routes/routes";
import {setIdMovie} from "../../../bll/reducers/movie/movieReducer";

import {useAppDispatch} from "../../../utils/hooks/hooks";

import {CardStyle, Description, ImageCard, Rating, TitleCard} from "./CardMovie.styled";


type CardMovieType = {
    item: PremiereItemType | FilmItemType
}

export const CardMovie: FC<CardMovieType> = ({item}) => {
    const dispatch = useAppDispatch()

    const genre = item.genres.map((el, index) => <span key={index}>{el.genre + " "}</span>)

    let rating = 'ratingKinopoisk' in item ? item.ratingKinopoisk : null

    const setIdMovieHandler = (id: number) => {
        dispatch(setIdMovie({id}))
    }

    return (
        <CardStyle>
            <NavLink
                to={PATH.movie}
                onClick={() => setIdMovieHandler(item.kinopoiskId)}
            >
                <ImageCard src={item.posterUrlPreview} alt={''}/>
                {rating && <Rating>{rating}</Rating>}
                <TitleCard>{item.nameRu}</TitleCard>
                <Description>{genre}</Description>
                <Description>{item.year}</Description>
            </NavLink>
        </CardStyle>
    );
};
