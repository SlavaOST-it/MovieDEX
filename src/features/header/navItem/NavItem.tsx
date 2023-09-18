import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

type NavItemType = {
    link: string,
    titleLink?: string,
    className?: string,
    activeClassName?: string
}

export const NavItem: FC<NavItemType> = ({
                                             link,
                                             titleLink,
                                             className,
                                             activeClassName,
                                         }) => {
    return (
        <NavLink
            to={link}
            className={({isActive}) => isActive ? activeClassName : className}
        >
            {titleLink}
        </NavLink>
    );
};
