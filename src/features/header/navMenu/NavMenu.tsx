import React from 'react';
import {PATH} from "../../../utils/routes/routes";
import {ListItem, NameLink, NavLinkStyle, NavStyle, WrapperMenu} from "./NavMenu.styled";


export const NavMenu = () => {
    const linksMenu = [
        {link: PATH.startPage, title: 'HOME'},
        {link: PATH.premieres, title: 'PREMIERES'},
        {link: PATH.topFilms, title: 'TOP FILMS'},
    ]

    return (
        <NavStyle>
            <WrapperMenu>
                {linksMenu.map((el, index) =>
                    <ListItem key={index}>
                        <NavLinkStyle
                            to={el.link}

                        >
                            <NameLink>
                                {el.title}
                            </NameLink>
                        </NavLinkStyle>
                    </ListItem>
                )}
            </WrapperMenu>
        </NavStyle>
    );
};
