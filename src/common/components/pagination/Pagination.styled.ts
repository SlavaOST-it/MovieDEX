import styled, {css} from "styled-components";
import {ThemeType} from "../../types/commonTypes";

export const NumberPage = styled.button<{ theme: ThemeType }>`
    cursor: pointer;
    border-radius: 6px;
    font-size: 16px;
    font-family: 'Jura', sans-serif;
    color: ${props => props.theme.colors.primary};

    border: 1px solid rgba(255, 255, 255, 0);
    background-color: ${props => props.theme.colors.background.color_2};
    padding: 8px 12px;
    margin: 0 6px;

    transition: ${props => props.theme.transition};

    &:hover {
        border: 1px solid rgb(255, 255, 255);
        color: ${props => props.theme.colors.accent};
        transition: ${props => props.theme.transition};
    }
`

export const CurrentPage = styled(NumberPage)<{ $selected_page: boolean, theme: ThemeType }>`
    ${props => props.$selected_page && css`
        font-weight: 700;
        color: ${props => props.theme.colors.accent};
        border: 1px solid rgb(255, 255, 255);
    `
}
`

export const NextPrevPage = styled(NumberPage)`
`

export const PaginationWrapper = styled.div`
    margin: 40px 0;
`