import React from 'react';
import {Logo} from "./logo/Logo";
import { NavMenu } from './navMenu/NavMenu';

export const Header = () => {
    return (
        <div>
            <Logo/>
            <NavMenu/>
        </div>
    );
};
