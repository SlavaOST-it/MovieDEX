import React from 'react';

import {FactWrapper} from "./FactsBlockMovie.styled";

import {useGetFactsQuery} from "../../../../api/movieApi";
import {useAppSelector} from "../../../../utils/hooks/hooks";

export const FactsBlockMovie = () => {
    const idMovie = useAppSelector(state => state.movie.id)

    const {data} = useGetFactsQuery(idMovie)

    return (
        <div>
            {data?.items.map((fact, index) => (
                <FactWrapper key={index}>
                    <h3>{fact.type === 'FACT' ? 'Факт о фильме' : 'Ошибка в фильме'}</h3>
                    <p>{fact.text.replace(/<a\b[^>]*>(.*?)<\/a>/g, '$1')}</p>
                </FactWrapper>
            ))}
        </div>
    );
};
