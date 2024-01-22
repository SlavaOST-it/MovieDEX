import React from 'react';
import styled from "styled-components";
import {ThemeType} from "../../../common/types/commonTypes";

export const Logo = () => {
    return (
        <div>
            <Word1> Movie </Word1>
            <Word2> DEX </Word2>
        </div>
    );
};


export const Word1 = styled.span`
    font-family: 'Broadway', sans-serif;
    font-size: 34px;
`

export const Word2 = styled.span<{ theme: ThemeType }>`
    font-family: 'Broadway', sans-serif;
    font-size: 40px;

    color: ${props => props.theme.colors.accent};
`

// box-shadow: 3px 6px 8px 4px rgba(0, 0, 0, 0.2);