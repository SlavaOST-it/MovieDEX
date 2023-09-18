import React from 'react';
import {NavItem} from "../navItem/NavItem";
import {PATH} from "../../../utils/routes/routes";

export const NavMenu = () => {
    const item = [
        {link: PATH.startPage, title: 'HOME'},
        {link: PATH.premieres, title: 'PREMIERES'},
        {link: PATH.topFilms, title: 'TOP FILMS'},
    ]
    return (
        <nav>
            {item.map((el, index) =>
                <NavItem
                    key={index}
                    link={el.link}
                    titleLink={el.title}
                    className={"###"}
                    activeClassName={"###"}
                />
            )}

        </nav>
    );
};
