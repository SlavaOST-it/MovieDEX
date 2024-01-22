import styled from "styled-components";
import {ThemeType} from "../../common/types/commonTypes";

export const HeaderStyled = styled.header<{theme: ThemeType}>`
    display: flex;
    justify-content: space-between;
    align-items: center;

    min-height: 100px;
    padding: 0 40px;
`