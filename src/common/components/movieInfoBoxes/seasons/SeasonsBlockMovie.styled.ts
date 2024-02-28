import styled from "styled-components"
import {ThemeType} from "../../../types/commonTypes";


export const Season = styled.div<{ theme: ThemeType }>`
    margin-bottom: 40px;
    border-bottom: 4px solid ${props => props.theme.colors.accent};

    h3, h5 {
        font-size: 22px;
        color: ${props => props.theme.colors.accent};
    }
    h5{
        font-size: 18px;
    }
`

export const Episode = styled.div`
    margin-bottom: 20px;
`

export const Paragraph = styled.p<{ theme: ThemeType }>`
    color: ${props => props.theme.colors.primary};
`