import styled from "styled-components";
import {ThemeType} from "../../../types/commonTypes";

export const Link = styled.a<{ theme: ThemeType }>`
    font-size: 18px;
    width: 220px;
    text-align: center;

    border: 1px solid ${props => props.theme.colors.secondary};
    border-left: 6px solid ${props => props.theme.colors.secondary};
    border-radius: 5px;
    transition: ${props => props.theme.transition};

    &:hover {
        color: ${props => props.theme.colors.accent};
        border-color: ${props => props.theme.colors.primary};
        border-left: 6px solid ${props => props.theme.colors.accent};
        transition: ${props => props.theme.transition};
    }
`

export const LinksBlock = styled.div<{ theme: ThemeType }>`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 26px;
`

export const ExternalSourcesWrapper = styled.div`
    display: flex;
    flex-direction: column;

    h3 {
        margin-bottom: 40px;
    }
`