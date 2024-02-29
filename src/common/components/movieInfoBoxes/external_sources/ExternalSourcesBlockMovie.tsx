import React from 'react';

import {useAppSelector} from "../../../../utils/hooks/hooks";
import {useGetExternalSourcesQuery} from "../../../../api/movieApi";

import {ExternalSourcesWrapper, Link, LinksBlock} from "./ExternalSourcesBlock.styled";


export const ExternalSourcesBlockMovie = () => {
    const idMovie = useAppSelector(state => state.movie.id)

    const {data} = useGetExternalSourcesQuery(idMovie)

    return (
        <ExternalSourcesWrapper>
            {data?.items && <h3>Смотреть онлайн на платформе:</h3>}
            <LinksBlock>
                {data?.items.map((el, index) => (
                    <Link key={index} href={el.url} target={'_blank'} rel={'noreferrer'}>{el.platform}</Link>
                ))}
            </LinksBlock>
        </ExternalSourcesWrapper>
    );
};
