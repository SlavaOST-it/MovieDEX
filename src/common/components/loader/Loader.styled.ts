import styled from "styled-components";
import {ThemeType} from "../../types/commonTypes";


export const LoaderSpan = styled.span<{theme: ThemeType}>`
    width: 58px;
    height: 58px;
    border: 5px solid #FFF;
    border-bottom-color: ${props => props.theme.colors.accent};;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`