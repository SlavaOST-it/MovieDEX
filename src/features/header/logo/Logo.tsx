import React from 'react';
import logo from "../../../assets/icons/logo_full.png"
import styled from "styled-components";

export const Logo = () => {
    return (
        <div>
            MOVIE DEX
            {/*<LogoImage src={logo} alt={'logo'}/>*/}
        </div>
    );
};

export const LogoImage = styled.img`
  max-width: 80px;
  max-height: 80px;
`