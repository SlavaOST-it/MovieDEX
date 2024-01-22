import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../utils/hooks/hooks";
import {topFilmsSelectors} from "./index";
import {setCurrentPage} from "../../bll/reducers/topFilmsReducer/topFilmsReducer";
import {useGetTopFilmsQuery} from '../../api/filmsApi';
import {Loader} from "../../common/components/loader/Loader";


export const TopFilmsPage = () => {
    const dispatch = useAppDispatch()

    const [currentPage, setCurrentPage] = useState(1)
    // const totalPageCount = useAppSelector(topFilmsSelectors.selectTotalPage)
    // const currentPage = useAppSelector(topFilmsSelectors.selectCurrentPage)
    //
    const {data, isLoading} = useGetTopFilmsQuery(currentPage)


    const nextPage = () => {
        setCurrentPage(currentPage + 1)
        // dispatch(setCurrentPage({currentPage: currentPage + 1}))
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    if(isLoading){
        return <Loader/>
    }

    return (
        <div>
            <h2>TOP FILMS:</h2>
            <div>
                {data?.films.map(el => (
                    <div key={el.filmId}>
                        <div>{el.nameEn}</div>
                        <div>{el.rating}</div>
                        <img style={{'width': '30px'}} src={el.posterUrlPreview ?? ''} alt={'poster film'}/>
                    </div>
                ))}
            </div>

            <button onClick={prevPage}>{'<<'} </button>

            <span>{currentPage}</span>

            <button onClick={nextPage}>{'>>'} </button>
        </div>
    );
};
