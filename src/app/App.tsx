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

// window.addEventListener('scroll', e => {
//
//     document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
// })

export function App() {
    const { theme, setSwitchTheme } = useAppSwitchTheme();

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

            <WrapperApp>
                <Header theme={theme} setTheme={setSwitchTheme}/>

                {appStatus === AppStatus.START
                    ? <StartPage moveX={moveX} moveY={moveY}/>
                    : <ContainerApp>
                        <NavBar/>
                        {/*<StartPage moveX={moveX} moveY={moveY}/>*/}
                        <Main/>
                    </ContainerApp>
                }
            </WrapperApp>
        </ThemeProvider>
    );
}

export const WrapperApp = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  //display: flex;
`

export const ContainerApp = styled.div`
  display: flex;
`