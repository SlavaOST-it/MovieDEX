import React, {FC} from 'react';
import styled from "styled-components";
import {ThemeType} from "../../types/commonTypes";

type InputSearchFilmType = {
    onClick: () => void
}


export const InputSearchFilm: FC<InputSearchFilmType> = ({onClick}) => {
    return (
        <div>
            <Input
                placeholder={'Поиск...'}
            />
            <ButtonClose onClick={onClick}>X</ButtonClose>
        </div>

    );
};

export const Input = styled.input <{ theme: ThemeType }>`
    height: 40px;
    width: 200px;

    color: ${props => props.theme.colors.primary};
    
    border: ${props => props.theme.colors.accent} 6px solid;
    border-radius: 12px;

    background-color: ${props => props.theme.colors.background.color_2};;

    padding-left: 6px;
    margin-right: 12px;

    transition: ${props => props.theme.transition};

    &:focus {
        outline: none;
        box-shadow: -6px 3px 8px 4px rgba(0, 0, 0, 0.5);
        transition: ${props => props.theme.transition};
    }
`

export const ButtonClose = styled.button`
    //width: 40px;
    //height: 40px;

    color: ${props => props.theme.colors.primary};
    
    //border-radius: 12px;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    transition: ${props => props.theme.transition};

    &:hover {
        box-shadow: 2px 3px 6px 8px rgba(0, 0, 0, 0.2);
        transition: ${props => props.theme.transition};
    }
`