import React, {ChangeEvent} from 'react';
import {useAppDispatch, useAppSelector} from "../../../utils/hooks/hooks";
import {useCurrentMonthAndYear} from "../../../utils/hooks/currentDate";
import {CustomSelectValue} from "../sortValue/CustomSelectValue";
import {
    FiltersBlock,
    ResetButton,
    SortItem,
    sortOrdersFilm,
    sortRatingFilm,
    sortTypesFilm
} from "../../../features/serials/SerialsPage";
import {
    setIdCountry,
    setIdGenre,
    setOrder,
    setRating,
    setType,
    setYear
} from '../../../bll/reducers/filtersSort/filtersSortReducer';
import {useGetCategoriesQuery} from "../../../api/filmsApi";


export const FiltersSort= () => {
    const dispatch = useAppDispatch()

    const order = useAppSelector(state => state.filtersSort.order)
    const type = useAppSelector(state => state.filtersSort.type)
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

    const changeTypeFilm = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        const selectedType = sortTypesFilm.find(type => type.value === selectedValue);
        dispatch(setType({type: selectedType ? selectedType.value : 'TV_SERIES'}))
    };

    const changeCountryFilm = (event: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setIdCountry({idCountry:Number(event.target.value)}))
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
                    value={type}
                    onChange={changeTypeFilm}
                    options={sortTypesFilm}
                />
            </SortItem>


            <SortItem>
                Страна:
                <CustomSelectValue
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
