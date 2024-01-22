import React, {FC} from 'react';
import styled from "styled-components";
import {PremiereItemType} from "../../../api/types/PremieresFilmsType";
import {FilmItemType} from "../../../api/types/FilmsTypes";


type CardMovieType = {
    item: PremiereItemType | FilmItemType
}

export const CardMovie: FC<CardMovieType> = ({
                                                 item
                                             }) => {
    const country = item.countries.map((el, index) => <span key={index}>{el.country + " "}</span>)

    const genre = item.genres.map((el, index) => <span key={index}>{el.genre + " "}</span>)

    let rating = 'ratingKinopoisk' in item ? item.ratingKinopoisk : ''


    return (
        <CardStyle>
            <ImageCard src={item.posterUrlPreview} alt={''}/>
            <TitleCard>{item.nameRu}</TitleCard>
            <div>{rating}</div>
            <div>{genre}</div>
            <div>{item.year}</div>
            <div>{country}</div>
        </CardStyle>
    );
};


export const ImageCard = styled.img`
    min-width: 50px;
    min-height: 150px;
    max-width: 200px;
    max-height: 300px;
    //border-radius: 15px;
    //border-radius: 5px;
`

export const TitleCard = styled.h3`
 font-family: Roboto;
`

export const CardStyle = styled.div`
    max-width: 250px;
    max-height: 550px;

    border-radius: 15px;
`