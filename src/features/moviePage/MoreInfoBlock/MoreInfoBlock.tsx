import React, {useState} from 'react';
import styled from "styled-components";
import {ThemeType} from "../../../common/types/commonTypes";


type ActiveBlockType =
    'seasons'
    | 'facts'
    | 'distributions'
    | 'box_office'
    | 'awards'
    | 'videos'
    | 'similars'
    | 'images'
    | 'reviews'
    | 'external_sources'


const linkBlockInfo: Array<{ title: string, value: ActiveBlockType }> = [
    {
        title: 'Трейлеры',
        value: 'videos'
    },
    {
        title: 'Сезоны',
        value: 'seasons'
    },
    {
        title: 'Награды',
        value: 'awards'
    },
    {
        title: 'Факты',
        value: 'facts'
    },
    {
        title: 'Прокат',
        value: 'distributions'
    },
    {
        title: 'Бюджет и сборы',
        value: 'box_office'
    },
    {
        title: 'Кадры из фильма',
        value: 'images'
    },
    {
        title: 'Рецензии',
        value: 'reviews'
    },
    {
        title: 'Похожие фильмы',
        value: 'similars'
    },
    {
        title: 'Где посмотреть',
        value: 'external_sources'
    },

]
export const MoreInfoBlock = () => {
    const [activeBlock, setActiveBlock] = useState<ActiveBlockType>('videos')

    const changeActiveBlock = (value: ActiveBlockType) => {
        setActiveBlock(value)
    }

    return (
        <div>
            <div>
                <UnorderedList>
                    {linkBlockInfo.map(el => (
                        <ListItem activeLink={el.value === activeBlock} onClick={() => changeActiveBlock(el.value)}>{el.title}</ListItem>
                    ))}
                </UnorderedList>
            </div>


            <div>
                {activeBlock.toUpperCase()}
            </div>
        </div>
    );
};


export const ListItem = styled.li<{ activeLink: boolean, theme: ThemeType }>`
    
    ${props => props.activeLink ? 'border-bottom: 3px solid ' + props.theme.colors.accent + ';' : ''}
    color: ${props => props.activeLink ? props.theme.colors.accent : props.theme.colors.primary};
   
    
    &:hover {
        color: ${props => props.theme.colors.accent};
        border-bottom: 3px solid ${props=>props.theme.colors.accent};
    }
    
    cursor: pointer;
`

export const UnorderedList = styled.ul`
    display: flex;
    justify-content: space-between;

    gap: 16px;
`