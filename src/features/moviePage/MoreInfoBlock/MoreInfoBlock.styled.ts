import styled from "styled-components"
import {ThemeType} from "../../../common/types/commonTypes";


export const ListItem = styled.li<{ $active_link: boolean, theme: ThemeType }>`
    border-bottom: 3px solid rgba(128, 128, 128, 0);
    ${props => props.$active_link ? 'border-bottom: 3px solid ' + props.theme.colors.accent + ';' : ''}
    color: ${props => props.$active_link ? props.theme.colors.primary : props.theme.colors.secondary};
    transition: ${props => props.theme.transition};

    &:hover {
        color: ${props => props.theme.colors.primary};
        border-bottom: 3px solid ${props => props.theme.colors.accent};
        transition: ${props => props.theme.transition};
    }

    cursor: pointer;
`

export const UnorderedList = styled.ul`
    display: flex;    
    min-width: 100%;
    
    margin: 30px 0;
    gap: 20px;
`