import React, {FC} from 'react';
import styled from "styled-components";
import {ThemeType} from "../../types/commonTypes";

type InputSearchFilmType = {
    onClick: () => void
}


export const InputSearchFilm: FC<InputSearchFilmType> = ({onClick}) => {
    return (
        <ContainerInputSearch>
            <Input
                placeholder={'Поиск...'}
            />
            <ButtonClose onClick={onClick}>X</ButtonClose>
        </ContainerInputSearch>

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
    margin-right: 2px;

    transition: ${props => props.theme.transition};

    &:focus {
        outline: none;
        box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.5);
        transition: ${props => props.theme.transition};
    }
`

export const ButtonClose = styled.button`
    padding: 8px;

    color: #a2a2a2;
    font-size: 20px;
    //border-radius: 12px;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    transition: ${props => props.theme.transition};

    &:hover {
        color: ${props => props.theme.colors.primary};
        text-shadow: 6px 3px 4px rgba(0, 0, 0, 0.8);
        transition: ${props => props.theme.transition};
    }
`

export const ContainerInputSearch = styled.div`
    display: flex;
    align-items: center;
`