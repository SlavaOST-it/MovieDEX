import React from 'react';
import {useAppSelector} from "../../../../utils/hooks/hooks";
import {useGetBoxOfficeQuery} from "../../../../api/movieApi";
import styled from "styled-components";
import {ThemeType} from "../../../types/commonTypes";

export const BoxOfficeBlockMovie = () => {
    const idMovie = useAppSelector(state => state.movie.id)

    const {data} = useGetBoxOfficeQuery(idMovie)

    return (
        <div>
            {data?.items.map((el, index)=>(
                <BoxOfficeWrapper key={index}>
                   <h4>{el.type}:</h4>
                    <p>{el.amount} <span>{el.symbol}</span></p>
                </BoxOfficeWrapper>
            ))}
        </div>
    );
};

export const BoxOfficeWrapper = styled.div<{theme: ThemeType}>`
    display: flex;
    justify-content: space-between;
    max-width: 300px;

    p, span{
        color: ${props => props.theme.colors.primary}
    }
`