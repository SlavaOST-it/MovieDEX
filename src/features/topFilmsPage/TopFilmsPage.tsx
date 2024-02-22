import React, {ChangeEvent, useEffect, useState} from 'react';
import {useGetTopFilmsQuery} from '../../api/filmsApi';
import {Loader} from "../../common/components/loader/Loader";
import {Pagination} from "../../common/components/pagination/Pagination";
import {FilmsBlock, TitlePage, Wrapper} from "../../common/styles/СommonStyles.styled";
import {CardMovie} from "../../common/components/cardMovie/CardMovie";
import {CustomSelectValue} from "../../common/components/sortValue/CustomSelectValue";
import {sortTopFilms} from "../../common/components/filtersSort/dataFiltersSort";
import {FiltersBlock, SortItem} from '../../common/components/filtersSort/FiltersSort.styled';



export const TopFilmsPage = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [typeFilm, setTypeFilm] = useState(sortTopFilms[0].value)

    const {data, isLoading} = useGetTopFilmsQuery({page: currentPage, type: typeFilm})

    const sortedFilms = data?.items && [...data.items]
        .sort((a, b) => b.ratingKinopoisk - a.ratingKinopoisk);

    const totalPageCount = data?.totalPages ? data.totalPages : 0


    const changeTypeFilmHandler = (event: ChangeEvent<HTMLSelectElement>)=>{
        const selectedValue = event.target.value;
        const selectedType = sortTopFilms.find(type => type.value === selectedValue);
        setTypeFilm(selectedType ? selectedType.value : 'TOP_POPULAR_ALL')
    }

    // ============ PAGINATION =====================//
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        handlePageChange(1)
    }, [typeFilm]);

    // ============ Loading =====================//

    if (isLoading) {
        return <Loader/>
    }

    return (
        <Wrapper>
            <TitlePage>Топ <span> фильмов </span></TitlePage>

            <FiltersBlock>
                <SortItem>
                    Сортировать по:
                    <CustomSelectValue
                        value={typeFilm}
                        onChange={changeTypeFilmHandler}
                        options={sortTopFilms}
                    />
                </SortItem>
            </FiltersBlock>

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
                currentPage={currentPage}
            />
        </Wrapper>
    );
};
