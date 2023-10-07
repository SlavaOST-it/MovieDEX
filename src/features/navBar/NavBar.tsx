import React from 'react';
import {PATH} from "../../utils/routes/routes";
import {Navigate, NavLink} from "react-router-dom";
import {useAppDispatch} from "../../utils/hooks/hooks";
import {setAppStatusAC} from "../../bll/reducers/appReducer/appReducer";
import {AppStatus} from "../../common/types/commonTypes";


const navLinks = [
    // {id: 1, path: PATH.startPage, nameLink: "Home page", logoLink: ""},
    {id: 2, path: PATH.premieres, nameLink: "Premieres", logoLink: ""},
    {id: 3, path: PATH.topFilms, nameLink: "Top films", logoLink: ""},
]

export const NavBar = () => {
    const dispatch = useAppDispatch()


    const selectStartPage = () => {
        dispatch(setAppStatusAC({status: AppStatus.START}))
    }

    return (
        <nav>
            <ul>
                <li key={1}>
                    <NavLink
                        id={PATH.startPage}
                        to={PATH.startPage}
                        onClick={selectStartPage}
                        className={({isActive}) => isActive ? "" : "s.link"}
                    >
                        <img src={""} alt={'nav logo'} className={""}/>
                        <span>Start page</span>
                    </NavLink>
                </li>

                {navLinks.map(el => (
                    <li key={el.id}>
                        <NavLink id={el.path}
                                 to={el.path}
                                 className={({isActive}) => isActive ? "" : ""}
                        >
                            <img src={el.logoLink} alt={'nav logo'}/>
                            <span>{el.nameLink}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
