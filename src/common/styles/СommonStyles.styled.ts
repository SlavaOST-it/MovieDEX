import styled from "styled-components";
import {ThemeType} from "../types/commonTypes";

export const TitlePage = styled.h2<{ theme: ThemeType }>`
    font-style: normal;
    font-weight: 400;
    font-size: 30px;

    width: 100%;
    line-height: 100%;

    padding: 4px 0 100px 0;

    span {
        color: ${props => props.theme.colors.accent};
    }
`


export const FilmsBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    gap: 30px;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`