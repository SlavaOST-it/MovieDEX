import styled from "styled-components";
import { ThemeType } from "../../../types/commonTypes";

export const FactWrapper = styled.div<{theme: ThemeType}>`
    margin-bottom: 40px;

    h3 {
        color: ${props => props.theme.colors.accent}
    }
    
    p{
        color: ${props => props.theme.colors.primary}
    }
`