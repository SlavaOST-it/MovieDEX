import React, {useState} from 'react';

import {HeaderStyled} from "./Header.styled";
import {Logo} from "./logo/Logo";
import styled from "styled-components";
import {ButtonSearch} from "../../common/components/searchButton/ButtonSearch";
import {InputSearchFilm} from '../../common/components/search/InputSearchFilm';


export const Header = () => {
    const [isOpenSearch, setIsOpenSearch] = useState(false)

    const handleToggleSearch = () => {
        setIsOpenSearch(!isOpenSearch);
    };



    return (
        <HeaderStyled>
            <Logo/>
            {/*<SectionName> {titlePage} </SectionName>*/}

            <SearchBlock>
                <AnimatedSearch $is_open={isOpenSearch}>
                    {isOpenSearch && <InputSearchFilm onClick={handleToggleSearch}/>}
                </AnimatedSearch>

                <AnimatedButton $is_open={isOpenSearch}>
                    {!isOpenSearch && <ButtonSearch onClick={handleToggleSearch}/>}
                </AnimatedButton>
            </SearchBlock>
        </HeaderStyled>
    );
};

export const SectionName = styled.h2`
    
`;

export const SearchBlock = styled.div`
    display: flex;
    align-items: center;
`;


const AnimatedSearch = styled.div<{ $is_open: boolean }>`
    opacity: ${(props) => (props.$is_open ? "1" : "0")};
    transition: opacity .3s ease-in-out;
`;

const AnimatedButton = styled.div<{ $is_open: boolean }>`
    opacity: ${(props) => (props.$is_open ? "0" : "1")};
    transition: opacity .3s ease-in-out;
`;