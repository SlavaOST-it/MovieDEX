import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../utils/hooks/hooks";
import {premieresSelectors} from "./index";
import {fetchPremieresFilms} from "../../bll/reducers/premieresFilmsReducer/premieresFilmsReducer";
import {useCurrentMonthAndYear} from "../../utils/hooks/currentDate";
import {CardMovie} from "../../common/components/cardMovie/CardMovie";


export const PremieresPage = () => {
    const dispatch = useAppDispatch()

    const premieresFilms = useAppSelector(premieresSelectors.selectPremieresFilms)
    const currentYear = useCurrentMonthAndYear().currentYear
    const currentMonth = useCurrentMonthAndYear().currentMonth

    useEffect(() => {
        dispatch(fetchPremieresFilms(currentYear, currentMonth))
    }, [dispatch])
    return (
        <div>
            <h2>Премьеры:</h2>
            <div>
                {premieresFilms.map(el => (
                    <CardMovie key={el.kinopoiskId}
                               name={el.nameRu}
                               image={el.posterUrlPreview}
                               description={""}/>
                ))}
            </div>
        </div>
    );
};
