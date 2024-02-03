import React, {useState} from 'react';
import {useGetTopFilmsQuery} from '../../api/filmsApi';
import {Loader} from "../../common/components/loader/Loader";
import {Pagination} from "../../common/components/pagination/Pagination";
import {FilmsBlock, TitlePage, Wrapper} from "../../common/styles/СommonStyles.styled";
import {CardMovie} from "../../common/components/cardMovie/CardMovie";


export const TopFilmsPage = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const {data, isLoading} = useGetTopFilmsQuery(currentPage)

    const sortedFilms = data?.items && [...data.items]
        .sort((a, b) => b.ratingKinopoisk - a.ratingKinopoisk);

    const totalPageCount = data?.totalPages ? data.totalPages : 0

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    if (isLoading) {
        return <Loader/>
    }

    return (
        <Wrapper>
            <TitlePage>Топ <span> фильмов </span></TitlePage>
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
