import React, {ChangeEvent, useState} from 'react';
import {useGetCategoriesQuery, useGetSerialsQuery} from "../../api/filmsApi";
import {Loader} from "../../common/components/loader/Loader";
import {FilmsBlock, TitlePage, Wrapper} from "../../common/styles/СommonStyles.styled";
import {CardMovie} from "../../common/components/cardMovie/CardMovie";
import {Pagination} from "../../common/components/pagination/Pagination";
import styled from "styled-components";
import {OrderType, StyleFilmType} from "../../api/types/CategoriesTypes";
import {CustomSelectValue} from "../../common/components/sortValue/CustomSelectValue";

export type OrdersType = {
    name: string,
    value: OrderType
}

export const ordersFilm: OrdersType[] =
    [
        {
            name: 'Рейтинг',
            value: 'RATING'
        },
        {
            name: 'Количество голосов',
            value: 'NUM_VOTE'
        },
        {
            name: 'Год',
            value: 'YEAR'
        }]


export type TypesFilmType = {
    name: string,
    value: StyleFilmType
}
export const typesFilm: TypesFilmType[] = [
    {
        name: 'Сериал',
        value: 'TV_SERIES'
    },
    {
        name: 'Мини-сериал',
        value: 'MINI_SERIES'
    },
    {
        name: 'ТВ-шоу',
        value: 'TV_SHOW'
    },
]

export const SerialsPage = () => {
    const [page, setPage] = useState(1)

    const [order, setOrder] = useState<OrderType>(ordersFilm[0].value)
    const [type, setType] = useState<StyleFilmType>(typesFilm[0].value)
    const [idCountry, setIdCountry] = useState<number | undefined>(undefined)
    const [idGenre, setIdGenre] = useState<number | undefined>(undefined)

    const {data, isLoading} = useGetSerialsQuery(
        {
            page,
            order,
            type,
            countries: idCountry,
            genres: idGenre,

        })

    const {data: dataCategories, isLoading: isLoadingCategories} = useGetCategoriesQuery({})


    const sortedFilms = data?.items && [...data.items]
        .sort((a, b) => b.ratingKinopoisk - a.ratingKinopoisk);

    const totalPageCount = data?.totalPages ? data.totalPages : 0

    const handlePageChange = (pageNumber: number) => {
        setPage(pageNumber);
    };


// ============ FILTERS =====================//

    const changeOrderFilm = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        const selectedOrder = ordersFilm.find(order => order.value === selectedValue);
        setOrder(selectedOrder ? selectedOrder.value : 'RATING');
    };

    const changeTypeFilm = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        const selectedType = typesFilm.find(type => type.value === selectedValue);
        setType(selectedType ? selectedType.value : 'TV_SERIES')
    };

    const changeCountryFilm = (event: ChangeEvent<HTMLSelectElement>) => {
        setIdCountry(Number(event.target.value))
    }

    const changeGenreFilm = (event: ChangeEvent<HTMLSelectElement>) => {
        setIdGenre(Number(event.target.value))
    }


    // ============ Loading =====================//

    if (isLoading || isLoadingCategories) {
        return <Loader/>
    }

    return (
        <Wrapper>
            <TitlePage> Сериалы </TitlePage>

            <SortBlock>
                <CustomSelectValue
                    value={order}
                    onChange={changeOrderFilm}
                    options={ordersFilm}
                />

                <CustomSelectValue
                    value={type}
                    onChange={changeTypeFilm}
                    options={typesFilm}
                />

                <CustomSelectValue
                    onChange={changeCountryFilm}
                    options={dataCategories?.countries
                        ? [{value: '', name: 'Любая страна'}, ...dataCategories.countries.map(el => ({
                            value: el.id,
                            name: el.country
                        }))]
                        : []}/>

                <CustomSelectValue
                    onChange={changeGenreFilm}
                    options={dataCategories?.genres
                        ? [{value: '', name: 'Любой жанр'}, ...dataCategories.genres.map(el => ({
                            value: el.id,
                            name: el.genre
                        }))]
                        : []}/>


                <div>Рейтинг от /до</div>
                <div>Год выхода от / до</div>
            </SortBlock>

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

export const SortBlock = styled.div`

`