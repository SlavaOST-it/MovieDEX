import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../utils/hooks/hooks";
import {selectFilms} from "./selectors";
import {fetchFilms} from "../../bll/reducers/films/filmsReducer";
import {FilmItemType} from "../../api/types/FilmsTypes";
import {CardMovie} from "../../common/components/cardMovie/CardMovie";
import styled from "styled-components";


export const Films = () => {
    const dispatch = useAppDispatch()
    const films: FilmItemType[] = useAppSelector(selectFilms)

    useEffect(() => {
        dispatch(fetchFilms())
    }, [dispatch])

    return (
        <FilmsWrapper>
            <h2>Каталог <span>фильмов</span></h2>

            <FilmsBlock>
                {films.map((el, index) => (
                    <CardMovie key={index} item={el}/>
                ))}
            </FilmsBlock>
        </FilmsWrapper>
    );
};

export const FilmsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  gap: 30px;
`

export const FilmsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100%;
`