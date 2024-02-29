import React from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

import {useGetInfoMovieQuery} from "../../api/movieApi";
import {useAppSelector} from "../../utils/hooks/hooks";
import {ThemeType} from "../../common/types/commonTypes";
import {Rating} from "../../common/components/cardMovie/CardMovie.styled";
import {MoreInfoBlock} from './MoreInfoBlock/MoreInfoBlock';
import {BackButton} from "../../common/components/backButton/BackButton.styled";


export const MoviePage = () => {
    const idMovie = useAppSelector(state => state.movie.id)

    const {data} = useGetInfoMovieQuery(idMovie)

    const navigate = useNavigate()

    return (
        <WrapperMovie>
            <BackButton onClick={() => {
                navigate(-1)
            }}> {`< Назад`}</BackButton>

            <MainInfo>
                <Poster src={data?.posterUrlPreview} alt={'poster'}/>

                <InfoWrapper>
                    <div>
                        <TitleMovie>{data?.nameRu}</TitleMovie>
                        <h2>{data?.year}</h2>
                    </div>

                    <p>
                        {data?.shortDescription
                            ? data?.shortDescription
                            : data?.description
                        }
                    </p>

                    <div>
                        <h2>О фильме</h2>
                        <ul>
                            <li><span>Год производства</span> <strong>{data?.year}</strong></li>
                            <li>
                                <span>Страна</span>
                                <strong>
                                    {data?.countries.map((el, index) => (
                                        <div key={index}>
                                            {el?.country}
                                            {index !== data?.countries.length - 1 ? ', ' : ''}
                                        </div>
                                    ))}
                                </strong>
                            </li>
                            <li>
                                <span>Жанр</span>
                                <strong>
                                    {data?.genres.map((el, index) => (
                                        <div key={index}>
                                            {el.genre}
                                            {index !== data?.genres.length - 1 ? ', ' : ''}
                                        </div>
                                    ))}
                                </strong>
                            </li>
                            <li><span>Слоган</span> <strong>{data?.slogan ? data?.slogan : '-'}</strong></li>
                            <li><span>Возраст</span> <strong>{data?.ratingAgeLimits ?  (data.ratingAgeLimits.substring(3) + '+') : '-'}</strong></li>
                            <li><span>Время</span><strong>{data?.filmLength} мин.</strong></li>
                        </ul>
                    </div>
                </InfoWrapper>

                <RatingBlock>
                    <RatingMovie>{data?.ratingKinopoisk === null ? 0 : data?.ratingKinopoisk}</RatingMovie>
                    {data?.ratingKinopoiskVoteCount} оценок
                </RatingBlock>
            </MainInfo>


            <MoreInfoBlock/>


        </WrapperMovie>
    );
};


export const RatingMovie = styled(Rating)`
    position: static;
`

export const RatingBlock = styled.div`
    min-width: 120px;
    max-width: 180px;
`

export const Poster = styled.img`
    min-height: 430px;
    max-height: 480px;
`

export const TitleMovie = styled.h2`
    font-size: 46px;
`

export const InfoWrapper = styled.div<{ theme: ThemeType }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 26px;

    p {
        font-size: 18px;
        color: ${props => props.theme.colors.primary};
    }

    li {
        display: flex;
        padding: 6px 0;

        span {
            min-width: 250px;
            color: ${props => props.theme.colors.secondary};
        }

        strong {
            color: ${props => props.theme.colors.primary};
        }
    }
`

export const MainInfo = styled.div<{ theme: ThemeType }>`
    display: flex;
    padding: 20px 0 60px;

    border-bottom: 1px solid ${props => props.theme.colors.secondary};
`
export const WrapperMovie = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 50px;
`