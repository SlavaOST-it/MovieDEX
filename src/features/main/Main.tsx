import React from 'react';
import {Route, Routes} from 'react-router-dom';

import styled from "styled-components";
import {PATH} from "../../utils/routes/routes";

import {Films} from "../films/Films";
import {Categories} from "../categories/Categories";
import {TopFilmsPage} from "../topFilms/TopFilmsPage";
import {PremieresPage} from "../premieres/PremieresPage";


export const Main = () => {
    return (
        <MainWrapper>
            <Routes>
                <Route path={PATH.premieres} element={<PremieresPage/>}/>
                <Route path={PATH.topFilms} element={<TopFilmsPage/>}/>
                <Route path={PATH.films} element={<Films/>}/>
                <Route path={PATH.categories} element={<Categories/>}/>
            </Routes>
        </MainWrapper>
    );
};


export const MainWrapper = styled.div`
`