import {useEffect, useState} from "react";
import {ThemeType} from "../../common/types/commonTypes";


export const useAppSwitchTheme = ()=>{
    const [theme, setTheme] = useState<ThemeType>("dark");

    useEffect(() => {
        const storedThemeValue = localStorage.getItem('currentThemeApp');

        if (storedThemeValue) {
            setTheme(storedThemeValue as ThemeType);
        }
    }, []);

    const setSwitchTheme = (themeValue: ThemeType) => {
        const newTheme = themeValue === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem('currentThemeApp', newTheme);
    };

    return{
        theme,
        setSwitchTheme
    }
}