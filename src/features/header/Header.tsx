import React, {FC} from 'react';

import {HeaderStyled} from "./Header.styled";
import {ThemeType} from "../../common/types/commonTypes";
import {Logo} from "./logo/Logo";
import { ToggleThemeBtn } from './toggleThemeBtn/ToggleThemeBtn';



type HeaderType = {
    theme: ThemeType,
    setTheme: (theme: ThemeType) => void
}

export const Header: FC<HeaderType> = ({theme, setTheme}) => {
    return (
        <HeaderStyled>
            <Logo/>
            <ToggleThemeBtn themeValue={theme} setTheme={setTheme}/>
        </HeaderStyled>
    );
};
