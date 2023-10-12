import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../utils/hooks/hooks";
import {selectFilms} from "./selectors";
import {fetchFilms} from "../../bll/reducers/films/filmsReducer";


export const Films = () => {
    const dispatch = useAppDispatch()
    const films = useAppSelector(selectFilms)

    useEffect(() => {
        dispatch(fetchFilms())
    }, [dispatch])

    return (
        <div>
            <h2>Каталог <span>фильмов</span></h2>
            {films.map(el => (
                <>
                    <div>{el.nameRu}</div>
                    <img src={el.posterUrlPreview} alt={''}/>

                </>
            ))}
        </div>
    );
};
