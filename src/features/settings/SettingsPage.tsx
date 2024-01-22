import React, { FC } from 'react';
import {ToggleThemeBtn} from "./toggleThemeBtn/ToggleThemeBtn";
import {ThemeType} from "../../common/types/commonTypes";


type HeaderType = {
    theme: ThemeType,
    setTheme: (theme: ThemeType) => void
}

export const SettingsPage: FC<HeaderType> = ({theme, setTheme}) => {
    return (
        <div>
            <ToggleThemeBtn themeValue={theme} setTheme={setTheme}/>
        </div>
    );
};
