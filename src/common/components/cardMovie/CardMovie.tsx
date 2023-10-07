import React, {FC} from 'react';
import styled from "styled-components";


type CardMovieType = {
    name: string
    image: string,
    description: string
}

export const CardMovie: FC<CardMovieType> = ({
                                                 name, image, description
                                             }) => {

    return (
        <CardStyle>
            <div>{name}</div>
            <ImageCard src={image} alt={''}/>
            <div>{description}</div>
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