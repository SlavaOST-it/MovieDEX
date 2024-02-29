import styled from "styled-components";
import {ThemeType} from "../../../types/commonTypes";


export const SimilarWrapper = styled.div<{theme: ThemeType}>`
    margin-bottom: 40px;
    border-bottom: 4px solid ${props => props.theme.colors.accent};
    h2{
        color: ${props => props.theme.colors.accent};
    }
    
    img{
        max-width: 200px;
    }
`