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


export const NameLink = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.background};
`

export const LogoLink = styled.svg<{ theme: ThemeType }>`
  width: 20px;
  height: 20px;
  fill: ${props => props.theme.colors.background};
  transition: .3s;

  margin-right: 8px;
`

export const NavigateLink = styled(NavLink)<{ theme: ThemeType }>`
  display: flex;
  padding: 12px 0 12px 12px;

  &.active, &:hover {
    background-color: ${props => props.theme.colors.background};
    border-radius: 30px 0 0 30px;

    &.active ${NameLink},
    &:hover ${NameLink} {
      color: ${props => props.theme.colors.primary};
    }

    &.active ${LogoLink},
    &:hover ${LogoLink}{
      fill: ${props => props.theme.colors.primary};;
    }
  }

`

export const ListItem = styled.li`
  min-width: 100%;
`

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;

  padding: 20px 0 20px 20px;
  gap: 6px;
`

export const NavWrapper = styled.nav<{ theme: ThemeType }>`
  min-width: 200px;
  min-height: 100vh;

  background-color: ${props => props.theme.colors.black_color};
  margin-right: 30px;
`