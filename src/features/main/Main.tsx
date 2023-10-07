import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {PATH} from "../../utils/routes/routes";
import {StartPage} from "../startPage/StartPage";
import {PremieresPage} from "../premieres/PremieresPage";
import {TopFilmsPage} from "../topFilms/TopFilmsPage";

export const Main = () => {
    return (
        <div>
            <Routes>
                {/*<Route path={'/'} element={<Navigate to={PATH.startPage}/>}/>*/}
                {/*<Route path={PATH.startPage} element={<StartPage/>}/>*/}
                <Route path={PATH.premieres} element={<PremieresPage/>}/>
                <Route path={PATH.topFilms} element={<TopFilmsPage/>}/>
            </Routes>
        </div>
    );
};
