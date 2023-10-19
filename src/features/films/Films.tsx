import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../utils/hooks/hooks";
import {selectFilms} from "./selectors";
import {fetchFilms, setCategories} from "../../bll/reducers/films/filmsReducer";
import {FilmItemType} from "../../api/types/FilmsTypes";
import {CardMovie} from "../../common/components/cardMovie/CardMovie";
import styled from "styled-components";
import {selectGenre} from "../categories/selectors";


export const Films = () => {
    const dispatch = useAppDispatch()
    const films: FilmItemType[] = useAppSelector(selectFilms)
    const genres = useAppSelector(state => state.films.genres)

    const selectGenre = (genreId: number) => {
        dispatch(fetchFilms(genreId))
    }

    useEffect(() => {
        dispatch(fetchFilms())
    }, [dispatch])

    return (
        <FilmsWrapper>
            <h2>Каталог <span>фильмов</span></h2>

            <div>
                <input placeholder={'Название фильма'}/>
                <button>
                    Найти
                </button>
            </div>

            <div>
                <div>{genres.map(el => (
                    <div onClick={()=>selectGenre(el.id)}>{el.genre}</div>
                ))}</div>

                <div>Год выхода</div>
                <div>Страна</div>
            </div>

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