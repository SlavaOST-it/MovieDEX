import React from 'react';
import {StartPage} from "../features/startPage/StartPage";
import {TopFilmsPage} from "../features/topFilms/TopFilmsPage";
import {useAppSwitchTheme} from "./useAppSwitchTheme/useAppSwitchTheme";
import {darkTheme, lightTheme} from "../common/styles/Theme.styled";
import {ThemeProvider} from "styled-components";
import { GlobalStyled } from '../common/styles/GlobalStyles.styled';
import {PremieresPage} from "../features/premieres/PremieresPage";
import {Header} from "../features/header/Header";

export function App() {
    const {theme, switchTheme} = useAppSwitchTheme()

    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyled theme={lightTheme}/>

            <>
                <Header/>
                <StartPage/>
                <PremieresPage/>
                <TopFilmsPage/>
            </>

        </ThemeProvider>
    );
}

