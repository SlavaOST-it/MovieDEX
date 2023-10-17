import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../utils/hooks/hooks";
// import {fetchCategories} from "../../bll/reducers/categoriesReducer/CategoriesReducer";
import {categoriesSelectors} from "./index";


export const Categories = () => {
    const dispatch = useAppDispatch()
    const genres = useAppSelector(categoriesSelectors.selectGenre)
    const countries = useAppSelector(categoriesSelectors.selectCountry)

    useEffect(() => {
        // dispatch(fetchCategories())
    }, [dispatch])

    return (
        <div>
            {genres.map(el => (
                <div key={el.id}>{el.genre}</div>
            ))}

            {countries.map(el => (
                <div key={el.id}>{el.country}</div>
            ))}
        </div>
    );
};
