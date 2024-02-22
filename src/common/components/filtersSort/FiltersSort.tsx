import React, {ChangeEvent, FC, useEffect} from 'react';
import {useGetCategoriesQuery} from "../../../api/filmsApi";

import {useCurrentMonthAndYear} from "../../../utils/hooks/currentDate";
import {useAppDispatch, useAppSelector} from "../../../utils/hooks/hooks";

import {CustomSelectValue} from "../sortValue/CustomSelectValue";
import {FiltersBlock, ResetButton, SortItem,} from "./FiltersSort.styled";

import {StyleFilmType} from "../../../api/types/CategoriesTypes";
import {sortOrdersFilm, sortRatingFilm, sortTypesFilm, sortTypesSerial} from './dataFiltersSort';
import {
    setIdCountry,
    setIdGenre,
    setOrder,
    setRating,
    setType,
    setYear
} from '../../../bll/reducers/filtersSort/filtersSortReducer';


type FiltersSortType = {
    typeFilm: StyleFilmType
}

export const FiltersSort: FC<FiltersSortType> = ({typeFilm}) => {
    const dispatch = useAppDispatch()

    const order = useAppSelector(state => state.filtersSort.order)
    const typeSerial = useAppSelector(state => state.filtersSort.type)
    const idCountry = useAppSelector(state => state.filtersSort.idCountry)
    const idGenre = useAppSelector(state => state.filtersSort.idGenre)
    const rating = useAppSelector(state => state.filtersSort.rating)
    const year = useAppSelector(state => state.filtersSort.year)

    const {data: dataCategories} = useGetCategoriesQuery({})

    const {currentYear} = useCurrentMonthAndYear()
    const sortYearsFilm = Array.from({length: currentYear - 1919}, (_, index) => currentYear - index);


    const changeOrderFilm = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        const selectedOrder = sortOrdersFilm.find(order => order.value === selectedValue);
        dispatch(setOrder({order: selectedOrder ? selectedOrder.value : 'RATING'}));
    };

    const changeTypesSerial = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        const selectedType = sortTypesSerial.find(type => type.value === selectedValue);
        dispatch(setType({type: selectedType ? selectedType.value : 'TV_SERIES'}))
    };

    const changeTypeFilm = () => {
        dispatch(setType({type: 'FILM'}))
    };

    const changeCountryFilm = (event: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setIdCountry({idCountry: Number(event.target.value)}))
    }

    const changeGenreFilm = (event: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setIdGenre({idGenre: Number(event.target.value)}))
    }

    const changeRatingFilmHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setRating({rating: Number(event.target.value)}))
    }

    const changeYearFilmHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setYear({year: Number(event.target.value)}))
    };

    const resetFiltersHandler = () => {
        dispatch(setOrder({order: 'RATING'}))
        dispatch(setType({type: 'TV_SERIES'}))
        dispatch(setIdCountry({idCountry: 0}))
        dispatch(setIdGenre({idGenre: 0}))
        dispatch(setRating({rating: 0}))
        dispatch(setYear({year: 0}))
    }

    useEffect(() => {
       return  resetFiltersHandler()
    }, []);

    return (
        <FiltersBlock>
            <SortItem>
                Сортировать по:
                <CustomSelectValue
                    value={order}
                    onChange={changeOrderFilm}
                    options={sortOrdersFilm}
                />
            </SortItem>

            <SortItem>
                Категория:
                <CustomSelectValue
                    value={typeFilm === 'FILM' ? 'FILM' : typeSerial}
                    onChange={typeFilm === 'FILM' ?  changeTypeFilm : changeTypesSerial}
                    options={typeFilm === 'FILM' ? sortTypesFilm : sortTypesSerial}
                />
            </SortItem>

            <SortItem>
                Страна:
                <CustomSelectValue
                    value={idCountry}
                    onChange={changeCountryFilm}
                    options={dataCategories?.countries
                        ? [{optionName: 'Любая страна', value: 0}, ...dataCategories.countries.map(el => ({
                            optionName: el.country,
                            value: el.id
                        }))]
                        : []}/>
            </SortItem>

            <SortItem>
                Жанр:
                <CustomSelectValue
                    value={idGenre}
                    onChange={changeGenreFilm}
                    options={dataCategories?.genres
                        ? [{optionName: 'Любой жанр', value: 0}, ...dataCategories.genres.map(el => ({
                            optionName: el.genre,
                            value: el.id
                        }))]
                        : []}/>
            </SortItem>

            <SortItem>
                Рейтинг:
                <CustomSelectValue
                    value={rating}
                    onChange={changeRatingFilmHandler}
                    options={sortRatingFilm}
                />
            </SortItem>

            <SortItem>
                Год:
                <CustomSelectValue
                    value={year}
                    onChange={changeYearFilmHandler}
                    options={[{optionName: 'Любой год', value: 0}, ...sortYearsFilm.map(year => ({
                        optionName: year.toString(),
                        value: year,
                    }))]}
                />
            </SortItem>

            <SortItem>
                Сбросить фильтры
                <ResetButton as={'button'} onClick={resetFiltersHandler}>
                    X
                </ResetButton>
            </SortItem>
        </FiltersBlock>
    );
};
