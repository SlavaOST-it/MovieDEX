import React, {FC} from 'react';
import styled from "styled-components";

import sprite from './../../../assets/icons/sprite.svg'
import {ThemeType} from "../../types/commonTypes";


type SearchButtonType = {
    onClick: () => void
}

export const ButtonSearch: FC<SearchButtonType> = ({onClick}) => {
    
   return (
        <div>
            <Button onClick={onClick}>
                <LogoSearch>
                    <use xlinkHref={`${sprite}#search`}/>
                </LogoSearch>
            </Button>
        </div>
    );
};


export const LogoSearch = styled.svg<{ theme: ThemeType }>`
    width: 22px;
    height: 22px;

    fill: ${props => props.theme.colors.primary};
    transition: ${props => props.theme.transition};
`
export const Button = styled.button<{ theme: ThemeType }>`
    width: 50px;
    height: 50px;
    border-top: 2px solid rgba(158, 183, 160, 0.39);
    border-left: 2px solid rgba(206, 206, 206, 0.34);
    border-right: none;
    border-bottom: none;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.accent};
    cursor: pointer;
    box-shadow: 3px 6px 8px 4px rgba(0, 0, 0, 0.2);

    transition: ${props => props.theme.transition};

    &:hover {
        border-top: 3px solid rgba(121, 183, 139, 0.44);
        border-left: 2px solid rgba(123, 196, 145, 0.44);


        box-shadow: 2px 3px 6px 8px rgba(0, 0, 0, 0.2);
        transition: ${props => props.theme.transition};
    }
;

    &:active {
        border-top: 5px solid rgba(40, 61, 41, 0.22);
        border-left: 4px solid rgba(40, 61, 41, 0.22);

        transition: ${props => props.theme.transition};
    }

    &:active ${LogoSearch} {
        width: 21px;
        height: 21px;
    }
`