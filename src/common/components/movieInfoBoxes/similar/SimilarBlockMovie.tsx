import React from 'react';

import {SimilarWrapper} from './SimilarBlockMovie.styled';
import {useGetSimilarQuery} from "../../../../api/movieApi";
import {useAppSelector} from "../../../../utils/hooks/hooks";


export const SimilarBlockMovie = () => {
    const idMovie = useAppSelector(state => state.movie.id)

    const {data} = useGetSimilarQuery(idMovie)
    return (
        <div>
            {data?.items.map((film, index) =>(
                <SimilarWrapper key={index}>
                    <h2>{film?.nameRu ? film.nameRu : film.nameEn}</h2>
                    <img src={film.posterUrlPreview} alt={film.nameRu}/>
                </SimilarWrapper>
            ))}
        </div>
    );
};
