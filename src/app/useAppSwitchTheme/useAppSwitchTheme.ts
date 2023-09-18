import {useEffect, useState} from "react";


export const useAppSwitchTheme = ()=>{
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const storedThemeValue = localStorage.getItem('currentThemeApp');

        if (storedThemeValue) {
            setTheme(storedThemeValue);
        }
    }, []);

    const switchTheme = (themeValue: "light" | "dark") => {
        const newTheme = themeValue === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem('currentThemeApp', newTheme);
    };

    return{
        theme,
        switchTheme
    }
}