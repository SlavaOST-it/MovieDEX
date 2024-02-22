import React, {FC, useEffect, useState} from 'react';
import {CurrentPage, NextPrevPage, PaginationWrapper} from "./Pagination.styled";


type PaginationType = {
    totalItemsCount: number,
    pageSize?: number,
    onPageChanges: (pageNumber: number) => void,
    currentPage: number,
    portionSize?: number
}

export const Pagination: FC<PaginationType> = ({
                                                   totalItemsCount,
                                                   pageSize = 1,
                                                   onPageChanges,
                                                   currentPage,
                                                   portionSize = 5
                                               }) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize);

    const [portionNumber, setPortionNumber] = useState(1);

    useEffect(() => {
        setPortionNumber(1)
    }, [totalItemsCount])

    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = (portionNumber * portionSize);


    const setLastPortionHandler = () => {
        setPortionNumber(portionCount)
        onPageChanges(pagesCount)
    }

    return (
        <PaginationWrapper>
            {portionNumber > 1 &&
                <NextPrevPage
                    onClick={() => {
                        setPortionNumber(portionNumber - 1)
                    }}
                >
                    {'<<'}
                </NextPrevPage>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <CurrentPage $selected_page={currentPage === p} key={p}
                                        onClick={() => {
                                            onPageChanges(p)
                                        }}
                    >
                        {p}
                    </CurrentPage>
                })}

            {(pagesCount > 0) && (Math.ceil(pagesCount / portionSize) !== portionNumber) &&
                <>
                    <span>...</span>
                    <CurrentPage $selected_page={false}
                                 onClick={setLastPortionHandler}>
                        {totalItemsCount}
                    </CurrentPage>
                </>
            }

            {portionCount > portionNumber &&
                <NextPrevPage
                    onClick={() => {
                        setPortionNumber(portionNumber + 1)
                    }}
                >
                    {'>>'}
                </NextPrevPage>}
        </PaginationWrapper>
    );
}
