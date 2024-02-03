import React, { FC } from 'react';
import {Route, Routes} from 'react-router-dom';

import styled from "styled-components";
import {PATH} from "../../utils/routes/routes";

import {Catalog} from "../catalog/Catalog";
import {TopFilmsPage} from "../topFilms/TopFilmsPage";
import {PremieresPage} from "../premieres/PremieresPage";
import {SettingsPage} from "../settings/SettingsPage";
import {ThemeType} from "../../common/types/commonTypes";
import {SerialsPage} from "../serials/SerialsPage";

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
                <Route path={PATH.catalog} element={<Catalog/>}/>
                <Route path={PATH.serials} element={<SerialsPage/>}/>
                <Route path={PATH.settings} element={<SettingsPage theme={theme} setTheme={setTheme}/>}/>
            </Routes>
        </MainWrapper>
    );
};


export const MainWrapper = styled.div`
    margin: 0 50px 0 100px;
    min-width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
`