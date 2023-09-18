import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../utils/hooks/hooks";
import {topFilmsSelectors} from "./index";
import {selectCurrentPage} from "./selectors";
import {fetchTopFilms, setCurrentPage} from "../../bll/reducers/topFilmsReducer/topFilmsReducer";


export const TopFilmsPage = () => {
    const dispatch = useAppDispatch()

    const topFilms = useAppSelector(topFilmsSelectors.selectTopFilms)
    const totalPageCount = useAppSelector(topFilmsSelectors.selectTotalPage)
    const currentPage = useAppSelector(topFilmsSelectors.selectCurrentPage)


    useEffect(() => {
        dispatch(fetchTopFilms())
    }, [dispatch, currentPage])


    const nextPage = () => {

        dispatch(setCurrentPage({currentPage: currentPage+1}))
    }
    return (
        <div>
            <h2>TOP FILMS:</h2>
            <div>
                {topFilms.map(el => (
                    <div key={el.filmId}>
                        <div>{el.nameEn}</div>
                        <div>{el.rating}</div>
                    </div>
                ))}
            </div>
            <div>{totalPageCount}</div>

            <button onClick={nextPage}> {currentPage}</button>
        </div>
    );
};
