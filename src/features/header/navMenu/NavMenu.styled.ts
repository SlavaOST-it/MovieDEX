import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const NavStyle = styled.nav<{ theme: string }>`
  
`
export const WrapperMenu = styled.ul`
  display: flex;

  gap: 20px;
`
export const NavLinkStyle = styled(NavLink)<{ theme: string }>`

`

export const ListItem = styled.li`
`

export const NameLink = styled.span`
`