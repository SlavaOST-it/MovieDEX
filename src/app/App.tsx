import React, {useEffect, useState} from 'react';
import {StartPage} from "../features/startPage/StartPage";
import {useAppSwitchTheme} from "./useAppSwitchTheme/useAppSwitchTheme";
import {darkTheme, lightTheme} from "../common/styles/Theme.styled";
import styled, {ThemeProvider} from "styled-components";
import {GlobalStyled} from '../common/styles/GlobalStyles.styled';
import {Header} from "../features/header/Header";
import {Main} from "../features/main/Main";
import {NavBar} from "../features/navBar/NavBar";
import {useAppSelector} from "../utils/hooks/hooks";
import {appSelectors} from "./index";
import {AppStatus} from "../common/types/commonTypes";


export function App() {
    const {theme, setSwitchTheme} = useAppSwitchTheme();

    const appStatus = useAppSelector(appSelectors.appStatus);

    const [moveX, setMoveX] = useState(0);
    const [moveY, setMoveY] = useState(0);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMoveX((event.clientX - window.innerWidth / 2) * -0.005);
            setMoveY((event.clientY - window.innerHeight / 2) * -0.01);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
            <GlobalStyled theme={theme === "dark" ? darkTheme : lightTheme}/>
            <>
                {appStatus === AppStatus.START
                    ? <StartPage moveX={moveX} moveY={moveY}/>
                    : <WrapperApp>
                        <Header/>
                        <ContainerApp>
                            <NavBar/>
                            <Main theme={theme} setTheme={setSwitchTheme}/>
                        </ContainerApp>
                    </WrapperApp>
                }
            </>
        </ThemeProvider>
    );
}

export const WrapperApp = styled.div`
  max-width: 1700px;
  margin: 0 auto;
`

export const ContainerApp = styled.div`
  display: flex;
`