import React, {FC} from 'react';
import styled from "styled-components";
import {PremiereItemType} from "../../../api/types/PremieresFilmsType";
import {FilmItemType} from "../../../api/types/FilmsTypes";
import {ThemeType} from "../../types/commonTypes";


type CardMovieType = {
    item: PremiereItemType | FilmItemType
}

export const CardMovie: FC<CardMovieType> = ({
                                                 item
                                             }) => {
    const genre = item.genres.map((el, index) => <span key={index}>{el.genre + " "}</span>)

    let rating = 'ratingKinopoisk' in item ? item.ratingKinopoisk : null


    return (
        <CardStyle>
            <ImageCard src={item.posterUrlPreview} alt={''}/>
            {rating && <Rating>{rating}</Rating>}
            <TitleCard>{item.nameRu}</TitleCard>
            <Description>{genre}</Description>
            <Description>{item.year}</Description>
        </CardStyle>
    );
};


export const Description = styled.div<{ theme: ThemeType }>`
    color: ${props => props.theme.colors.secondary};
`
export const Rating = styled.div<{ theme: ThemeType }>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 46px;
    height: 46px;
    border-radius: 50%;
    background-color: #ec8802;

    font-size: 18px;
    font-weight: 700;

    position: absolute;
    top: 230px;
    right: -20px;

    box-shadow: ${props => props.theme.box_shadow};
`

export const ImageCard = styled.img <{ theme: ThemeType }>`
    min-width: 50px;
    min-height: 150px;
    max-width: 200px;
    max-height: 300px;

    box-shadow: ${props => props.theme.box_shadow};
`

export const TitleCard = styled.h3`
    font-family: Roboto;
`

export const CardStyle = styled.div`
    max-width: 200px;
    max-height: 550px;

    border-radius: 15px;

    position: relative
`