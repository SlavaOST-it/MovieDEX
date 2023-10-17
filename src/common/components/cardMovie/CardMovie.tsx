import React, {FC} from 'react';
import styled from "styled-components";
import {PremiereItemType} from "../../../api/types/PremieresFilmsType";
import {FilmItemType} from "../../../api/types/FilmsTypes";


type CardMovieType = {
    // name: string
    // image: string,
    // description: string

    item: PremiereItemType | FilmItemType
}

export const CardMovie: FC<CardMovieType> = ({
                                                 item
                                             }) => {
    const country = item.countries.map((el, index) => <span key={index}>{el.country + " "}</span>)
    const genre = item.genres.map((el, index) => <span key={index}>{el.genre + " "}</span>)

    return (
        <CardStyle>
            <ImageCard src={item.posterUrlPreview} alt={''}/>
            <div>{item.nameRu}</div>
            <div>{genre}</div>
            <div>{item.year}</div>
            <div>{country}</div>
        </CardStyle>
    );
};


export const ImageCard = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 15px;
  //border-radius: 5px;
`

export const CardStyle = styled.div`
  max-width: 250px;
  max-height: 550px;

  border-radius: 15px;
`