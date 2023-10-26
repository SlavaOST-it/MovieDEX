import React, {useEffect, useRef} from 'react';
import {useAppDispatch, useAppSelector} from "../../utils/hooks/hooks";
import {selectFilms} from "./selectors";
import {fetchFilms} from "../../bll/reducers/films/filmsReducer";
import {FilmItemType} from "../../api/types/FilmsTypes";
import {CardMovie} from "../../common/components/cardMovie/CardMovie";
import styled from "styled-components";
import {SortValue} from "../../common/components/sortValue/SortValue";
import {CountriesType, GenresType} from "../../api/types/CategoriesTypes";
import {setCurrentCountry, setCurrentGenre} from "../../bll/reducers/categoriesReducer/CategoriesReducer";
import {useSearchParams} from 'react-router-dom';


export const Films = () => {
    const dispatch = useAppDispatch()
    const films: FilmItemType[] = useAppSelector(selectFilms)
    const genres: GenresType[] = useAppSelector(state => state.categories.genres)
    const currentGenre = useAppSelector(state => state.categories.currentGenreId)

    const countries: CountriesType[] = useAppSelector(state => state.categories.countries)
    const currentCountry = useAppSelector(state => state.categories.currentCountryId)

    const [searchParams, setSearchParams] = useSearchParams();

    const selectGenre = (genreId: number) => {
        dispatch(setCurrentGenre({currentGenreId: genreId}))
    }

    const selectCountry = (countryId: number) => {
        dispatch(setCurrentCountry({currentCountryId: countryId}))
    }

    useEffect(() => {
        const fromUrlGenre = searchParams.get('genres')
        const fromUrlCountry = searchParams.get('countries')


        if (fromUrlGenre !== null) {
            dispatch(setCurrentGenre({currentGenreId: Number(fromUrlGenre)}))
        }
        if (fromUrlCountry !== null) {
            dispatch(setCurrentCountry({currentCountryId: Number(fromUrlCountry)}))
        }
    }, []);


    useEffect(() => {
        setSearchParams({
            genres: `${currentGenre}`,
            countries: `${currentCountry}`
        })

        dispatch(fetchFilms())
    }, [dispatch, currentGenre, currentCountry])

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
                Жанр:
                <SortValue
                    typeValue={'genre'}
                    items={genres}
                    currentItemId={currentGenre}
                    callback={selectGenre}
                />

                Страна:
                <SortValue
                    typeValue={'country'}
                    items={countries}
                    currentItemId={currentCountry}
                    callback={selectCountry}
                />

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