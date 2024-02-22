import React from 'react';

import {useGetPremieresFilmsQuery} from '../../api/filmsApi';

import {useCurrentMonthAndYear} from "../../utils/hooks/currentDate";
import {useLocalPagination} from "../../utils/hooks/LocalPagination";

import {Loader} from "../../common/components/loader/Loader";
import {CardMovie} from "../../common/components/cardMovie/CardMovie";
import {Pagination} from "../../common/components/pagination/Pagination";

import {FilmsBlock, TitlePage, Wrapper} from "../../common/styles/СommonStyles.styled";


export const PremieresPage = () => {
    const {currentYear, currentMonth} = useCurrentMonthAndYear()

    const {data, isLoading} = useGetPremieresFilmsQuery({year: currentYear, month: currentMonth});

    const {
        currentItems,
        totalItemsCount,
        currentPage,
        handlePageChange
    } = useLocalPagination(data)

    if (isLoading) {
        return <Loader/>
    }

    return (
        <Wrapper>
            <TitlePage>Премьеры <span>фильмов</span></TitlePage>
            <FilmsBlock>
                {currentItems && currentItems.map((el, index) => (

                    <CardMovie key={index}
                               item={el}
                    />
                ))}

            </FilmsBlock>

            <Pagination
                currentPage={currentPage}
                onPageChanges={handlePageChange}
                totalItemsCount={totalItemsCount}
            />
        </Wrapper>
    );
};
