import React, {useEffect, useState} from 'react';

import {useGetFilmsQuery} from "../../api/filmsApi";

import {Loader} from "../../common/components/loader/Loader";
import {FilmsBlock, TitlePage, Wrapper} from "../../common/styles/СommonStyles.styled";
import {CardMovie} from "../../common/components/cardMovie/CardMovie";
import {Pagination} from "../../common/components/pagination/Pagination";
import {FiltersSort} from "../../common/components/filtersSort/FiltersSort";

import {useAppSelector} from "../../utils/hooks/hooks";


export const FilmsPage = () => {
    const [page, setPage] = useState(1)

    const order = useAppSelector(state => state.filtersSort.order)
    const idCountry = useAppSelector(state => state.filtersSort.idCountry)
    const idGenre = useAppSelector(state => state.filtersSort.idGenre)
    const rating = useAppSelector(state => state.filtersSort.rating)
    const year = useAppSelector(state => state.filtersSort.year)

    const {data, isLoading} = useGetFilmsQuery({page,
        order,
        type: 'FILM',
        countries: idCountry === 0 ? undefined : idCountry,
        genres: idGenre === 0 ? undefined : idGenre,
        ratingFrom: rating === 0 ? undefined : rating,
        yearFrom: year === 0 ? undefined : year,
        yearTo: year === 0 ? undefined : year,
    })

    const sortedFilms = data?.items && [...data.items]
        .sort((a, b) => b.ratingKinopoisk - a.ratingKinopoisk);

    // ============ PAGINATION =====================//
    const totalPageCount = data?.totalPages ? data.totalPages : 0

    const handlePageChange = (pageNumber: number) => {
        setPage(pageNumber);
    };

    useEffect(() => {
        handlePageChange(1)
    }, [order, idCountry, idGenre, year, rating]);

    // ============ Loading =====================//

    if(isLoading){
        return <Loader/>
    }

    return (
        <Wrapper>
            <TitlePage> Каталог <span>фильмов</span> </TitlePage>

            <FiltersSort typeFilm={'FILM'}/>

            <FilmsBlock>
                {sortedFilms?.map((el, index) => (
                    <CardMovie
                        key={index}
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
