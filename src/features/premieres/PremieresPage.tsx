import React, {useState} from 'react';
import {useCurrentMonthAndYear} from "../../utils/hooks/currentDate";
import {CardMovie} from "../../common/components/cardMovie/CardMovie";
import styled from "styled-components";
import {ThemeType} from "../../common/types/commonTypes";
import {useGetPremieresFilmsQuery} from '../../api/filmsApi';
import {Loader} from "../../common/components/loader/Loader";
import {Pagination} from "../../common/components/pagination/Pagination";
import {TitlePage} from "../../common/styles/TitlePage.styled";


export const PremieresPage = () => {
    const {currentYear, currentMonth} = useCurrentMonthAndYear()

    const {data, isLoading} = useGetPremieresFilmsQuery({year: currentYear, month: currentMonth});

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data?.items.slice(startIndex, endIndex);

    const totalItemsCount = data?.total ? (data.total / itemsPerPage) : 0

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    console.log(data?.total)
    if (isLoading) {
        return <Loader/>
    }

    return (
        <PremieresWrapper>
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
        </PremieresWrapper>
    );
};

export const FilmsBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    gap: 30px;
`

export const PremieresWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 100%;
`