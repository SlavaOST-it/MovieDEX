import React from 'react';
import {NavLink} from "react-router-dom";

import styled from "styled-components";

import {PATH} from "../../utils/routes/routes";

import {useAppDispatch} from "../../utils/hooks/hooks";
import {setAppStatusAC} from "../../bll/reducers/appReducer/appReducer";

import {AppStatus, ThemeType} from "../../common/types/commonTypes";

import sprite from "../../assets/icons/sprite.svg"


const navLinks = [
    {id: 2, path: PATH.premieres, nameLink: "Премьеры", logoLink: `${sprite}#fireworks`},
    {id: 3, path: PATH.topFilms, nameLink: "Топ фильмов", logoLink: `${sprite}#awards`},
    {id: 4, path: PATH.films, nameLink: "Фильмы", logoLink: `${sprite}#awards`},
    {id: 5, path: PATH.categories, nameLink: "Категории", logoLink: `${sprite}#categories`},
    {id: 6, path: PATH.settings, nameLink: "Настройки", logoLink: `${sprite}#categories`},
]

export const NavBar = () => {
    const dispatch = useAppDispatch()

    const selectStartPage = () => {
        dispatch(setAppStatusAC({status: AppStatus.START}))
    }

    return (
        <NavWrapper>
            <Ul>
                <ListItem key={1}>
                    <NavigateLink
                        id={PATH.startPage}
                        to={PATH.startPage}
                        onClick={selectStartPage}
                        className={({isActive}) => isActive ? 'active' : ''}
                    >
                        <LogoLink>
                            <use xlinkHref={`${sprite}#home`}/>
                        </LogoLink>
                        <NameLink>Start page</NameLink>
                    </NavigateLink>
                </ListItem>

                {navLinks.map(el => (
                    <ListItem key={el.id}>
                        <NavigateLink id={el.path}
                                      to={el.path}
                                      className={({isActive}) => isActive ? 'active' : ''}
                        >
                            <LogoLink>
                                <use xlinkHref={el.logoLink}/>
                            </LogoLink>

                            <NameLink>{el.nameLink}</NameLink>
                        </NavigateLink>
                    </ListItem>
                ))}
            </Ul>
        </NavWrapper>
    );
};


export const NameLink = styled.span<{ theme: ThemeType }>`
    color: ${props => props.theme.colors.secondary};
    font-size: 18px;
    transition: ${props => props.theme.transition};
`

export const LogoLink = styled.svg<{ theme: ThemeType }>`
    width: 20px;
    height: 20px;
    fill: ${props => props.theme.colors.secondary};
    transition: ${props => props.theme.transition};

    margin-right: 8px;
`

export const NavigateLink = styled(NavLink)<{ theme: ThemeType }>`
    display: flex;
    align-items: center;

    padding: 12px 0 12px 40px;
    border-left: ${props => props.theme.colors.background.color_1} 4px solid;
    transition: ${props => props.theme.transition};

    &.active, &:hover {
        background-color: ${props => props.theme.colors.background.color_2};
        border-left: ${props => props.theme.colors.accent} 4px solid;
        transition: ${props => props.theme.transition};

        &.active ${NameLink},
        &:hover ${NameLink} {
            color: ${props => props.theme.colors.primary};
            transition: ${props => props.theme.transition};
        }

        &.active ${LogoLink},
        &:hover ${LogoLink} {
            fill: ${props => props.theme.colors.primary};
            transition: ${props => props.theme.transition};
        }
    }

`

export const ListItem = styled.li`
`

export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 50px 0;
    border-bottom: ${props => props.theme.colors.background.color_2} 1px solid;
`

export const NavWrapper = styled.nav<{ theme: ThemeType }>`
    min-width: 240px;
    border-top: ${props => props.theme.colors.background.color_2} 1px solid;
`