import React, {FC} from 'react';
import {ThemeType} from "../../../common/types/commonTypes";
import sprite from "../../../assets/icons/sprite.svg"
import {Icon, NameTheme, SelectThemeBtn, ToggleBtnWrapper} from "./ToggleThemeBtn.styled";


type ToggleThemeType = {
    themeValue: ThemeType,
    setTheme: (theme: ThemeType) => void
}
export const ToggleThemeBtn: FC<ToggleThemeType> = ({themeValue, setTheme}) => {
    return (
        <ToggleBtnWrapper>
            <SelectThemeBtn onClick={() => setTheme("dark")}>
                <NameTheme>
                    Light
                </NameTheme>

                <Icon $themeValue={themeValue === "light"}>
                    <use xlinkHref={`${sprite}#sun`}/>
                </Icon>

            </SelectThemeBtn>

            <SelectThemeBtn onClick={() => setTheme("light")}>
                <NameTheme>
                    Dark
                </NameTheme>

                <Icon $themeValue={themeValue === "dark"}>
                    <use xlinkHref={`${sprite}#moon`}/>
                </Icon>
            </SelectThemeBtn>
        </ToggleBtnWrapper>
    );
};
