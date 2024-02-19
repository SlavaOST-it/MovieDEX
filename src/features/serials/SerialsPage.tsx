import React, {ChangeEvent, useState} from 'react';
import {useGetCategoriesQuery, useGetSerialsQuery} from "../../api/filmsApi";
import {Loader} from "../../common/components/loader/Loader";
import {FilmsBlock, TitlePage, Wrapper} from "../../common/styles/СommonStyles.styled";
import {CardMovie} from "../../common/components/cardMovie/CardMovie";
import {Pagination} from "../../common/components/pagination/Pagination";
import styled from "styled-components";
import {OrderType, StyleFilmType} from "../../api/types/CategoriesTypes";
import {CustomSelectValue, SelectValue} from "../../common/components/sortValue/CustomSelectValue";
import {useCurrentMonthAndYear} from "../../utils/hooks/currentDate";
import {FiltersSort} from "../../common/components/filtersSort/FiltersSort";
import {useAppDispatch, useAppSelector} from "../../utils/hooks/hooks";
import {setOrder} from "../../bll/reducers/filtersSort/filtersSortReducer";


export const sortOrdersFilm: Array<{ optionName: string, value: OrderType }> = [
    {
        optionName: 'Рейтинг',
        value: 'RATING'
    },
    {
        optionName: 'Количество голосов',
        value: 'NUM_VOTE'
    },
    {
        optionName: 'Год',
        value: 'YEAR'
    }]


export const sortTypesFilm: Array<{ optionName: string, value: StyleFilmType }> = [
    {
        optionName: 'Сериал',
        value: 'TV_SERIES'
    },
    {
        optionName: 'Мини-сериал',
        value: 'MINI_SERIES'
    },
    {
        optionName: 'ТВ-шоу',
        value: 'TV_SHOW'
    },
]


export const sortRatingFilm: Array<{ optionName: string, value: number }> = [
    {
        optionName: 'Любой рейтинг',
        value: 0
    },
    {
        optionName: 'Больше 9',
        value: 9
    },
    {
        optionName: 'Больше 8',
        value: 8
    },
    {
        optionName: 'Больше 7',
        value: 7
    },
    {
        optionName: 'Больше 6',
        value: 6
    },
]


export const SerialsPage = () => {
    const dispatch = useAppDispatch()

    const [page, setPage] = useState(1)

    const order = useAppSelector(state => state.filtersSort.order)
    const type = useAppSelector(state => state.filtersSort.type)
    const idCountry = useAppSelector(state => state.filtersSort.idCountry)
    const idGenre = useAppSelector(state => state.filtersSort.idGenre)
    const rating = useAppSelector(state => state.filtersSort.rating)
    const year = useAppSelector(state => state.filtersSort.year)
    // const [order, setOrder] = useState<OrderType>(sortOrdersFilm[0].value)
    // const order = useAppSelector(state => state.filtersSort.order)
    // const [type, setType] = useState<StyleFilmType>(sortTypesFilm[0].value)
    // const [idCountry, setIdCountry] = useState<number>(0)
    // const [idGenre, setIdGenre] = useState<number>(0)
    // const [rating, setRating] = useState<number>(sortRatingFilm[0].value)
    // const [year, setYear] = useState<number>(0)

    const {data, isLoading} = useGetSerialsQuery(
        {
            page,
            order,
            type,
            countries: idCountry === 0 ? undefined : idCountry,
            genres: idGenre === 0 ? undefined : idGenre,
            ratingFrom: rating === 0 ? undefined : rating,
            yearFrom: year === 0 ? undefined : year,
            yearTo: year === 0 ? undefined : year,
        })

    // const {data: dataCategories, isLoading: isLoadingCategories} = useGetCategoriesQuery({})


    const {currentYear} = useCurrentMonthAndYear()
    const sortYearsFilm = Array.from({length: currentYear - 1919}, (_, index) => currentYear - index);


    // ============ PAGINATION =====================//
    const sortedFilms = data?.items && [...data.items]
        .sort((a, b) => b.ratingKinopoisk - a.ratingKinopoisk);

    const totalPageCount = data?.totalPages ? data.totalPages : 0

    const handlePageChange = (pageNumber: number) => {
        setPage(pageNumber);
    };


// ============ FILTER SORTING =====================//
//     const changeOrderFilm = (event: ChangeEvent<HTMLSelectElement>) => {
//         const selectedValue = event.target.value;
//         const selectedOrder = sortOrdersFilm.find(order => order.value === selectedValue);
//         dispatch(setOrder({order: selectedOrder ? selectedOrder.value : 'RATING'}));
//     };

    // const changeTypeFilm = (event: ChangeEvent<HTMLSelectElement>) => {
    //     const selectedValue = event.target.value;
    //     const selectedType = sortTypesFilm.find(type => type.value === selectedValue);
    //     setType(selectedType ? selectedType.value : 'TV_SERIES')
    // };
    //
    // const changeCountryFilm = (event: ChangeEvent<HTMLSelectElement>) => {
    //     setIdCountry(Number(event.target.value))
    // }
    //
    // const changeGenreFilm = (event: ChangeEvent<HTMLSelectElement>) => {
    //     setIdGenre(Number(event.target.value))
    // }
    //
    // const changeRatingFilmHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    //     setRating(Number(event.target.value))
    // }
    //
    // const changeYearFilmHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    //     setYear(Number(event.target.value));
    // };
    //
    // const resetFiltersHandler = () => {
    //     // setOrder('RATING')
    //     setType('TV_SERIES')
    //     setIdCountry(0)
    //     setIdGenre(0)
    //     setRating(0)
    //     setYear(0)
    // }

    // ============ Loading =====================//
    if (isLoading) {
        return <Loader/>
    }

    return (
        <Wrapper>
            <TitlePage> Сериалы </TitlePage>



                <FiltersSort/>

                {/*<SortItem>*/}
                {/*    Сортировать по:*/}
                {/*    <CustomSelectValue*/}
                {/*        value={order}*/}
                {/*        onChange={changeOrderFilm}*/}
                {/*        options={sortOrdersFilm}*/}
                {/*    />*/}
                {/*</SortItem>*/}


                {/*<SortItem>*/}
                {/*    Категория:*/}
                {/*    <CustomSelectValue*/}
                {/*        value={type}*/}
                {/*        onChange={changeTypeFilm}*/}
                {/*        options={sortTypesFilm}*/}
                {/*    />*/}
                {/*</SortItem>*/}


                {/*<SortItem>*/}
                {/*    Страна:*/}
                {/*    <CustomSelectValue*/}
                {/*        onChange={changeCountryFilm}*/}
                {/*        options={dataCategories?.countries*/}
                {/*            ? [{optionName: 'Любая страна', value: 0}, ...dataCategories.countries.map(el => ({*/}
                {/*                optionName: el.country,*/}
                {/*                value: el.id*/}
                {/*            }))]*/}
                {/*            : []}/>*/}
                {/*</SortItem>*/}


                {/*<SortItem>*/}
                {/*    Жанр:*/}
                {/*    <CustomSelectValue*/}
                {/*        onChange={changeGenreFilm}*/}
                {/*        options={dataCategories?.genres*/}
                {/*            ? [{optionName: 'Любой жанр', value: 0}, ...dataCategories.genres.map(el => ({*/}
                {/*                optionName: el.genre,*/}
                {/*                value: el.id*/}
                {/*            }))]*/}
                {/*            : []}/>*/}
                {/*</SortItem>*/}


                {/*<SortItem>*/}
                {/*    Рейтинг:*/}
                {/*    <CustomSelectValue*/}
                {/*        value={rating}*/}
                {/*        onChange={changeRatingFilmHandler}*/}
                {/*        options={sortRatingFilm}*/}
                {/*    />*/}
                {/*</SortItem>*/}


                {/*<SortItem>*/}
                {/*    Год:*/}
                {/*    <CustomSelectValue*/}
                {/*        value={year}*/}
                {/*        onChange={changeYearFilmHandler}*/}
                {/*        options={[{optionName: 'Любой год', value: 0}, ...sortYearsFilm.map(year => ({*/}
                {/*            optionName: year.toString(),*/}
                {/*            value: year,*/}
                {/*        }))]}*/}
                {/*    />*/}
                {/*</SortItem>*/}


                {/*<SortItem>*/}
                {/*    Сбросить фильтры*/}
                {/*    <ResetButton as={'button'} onClick={resetFiltersHandler}>*/}
                {/*        X*/}
                {/*    </ResetButton>*/}
                {/*</SortItem>*/}


            <FilmsBlock>
                {sortedFilms?.map((el, index) => (
                    <CardMovie key={index}
                               item={el}
                    />
                ))}
            </FilmsBlock>

            <Pagination
                totalItemsCount={totalPageCount}
                onPageChanges={handlePageChange}
                currentPage={page}
            />
        </Wrapper>
    );
};

export const ResetButton = styled(SelectValue)`
`

export const SortItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const FiltersBlock = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid rgb(57, 78, 90);
    gap: 20px;
`