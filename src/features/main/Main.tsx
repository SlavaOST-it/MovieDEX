import React, { FC } from 'react';
import {Route, Routes} from 'react-router-dom';

import styled from "styled-components";
import {PATH} from "../../utils/routes/routes";

import {Films} from "../films/Films";
import {Categories} from "../categories/Categories";
import {TopFilmsPage} from "../topFilms/TopFilmsPage";
import {PremieresPage} from "../premieres/PremieresPage";
import {SettingsPage} from "../settings/SettingsPage";
import {ThemeType} from "../../common/types/commonTypes";

type HeaderType = {
    theme: ThemeType,
    setTheme: (theme: ThemeType) => void
}

export const Main: FC<HeaderType> = ({theme, setTheme}) => {
    return (
        <MainWrapper>
            <Routes>
                <Route path={PATH.premieres} element={<PremieresPage/>}/>
                <Route path={PATH.topFilms} element={<TopFilmsPage/>}/>
                <Route path={PATH.films} element={<Films/>}/>
                <Route path={PATH.categories} element={<Categories/>}/>
                <Route path={PATH.settings} element={<SettingsPage theme={theme} setTheme={setTheme}/>}/>
            </Routes>
        </MainWrapper>
    );
};


export const MainWrapper = styled.div`
    margin: 0 50px 0 100px;
`