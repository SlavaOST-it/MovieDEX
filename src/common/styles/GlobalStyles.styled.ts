import {createGlobalStyle} from "styled-components";


export const GlobalStyled = createGlobalStyle<{ theme: any }>`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *::-webkit-scrollbar {
        width: 10px;
        background-color: #565656;
    }

    *::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.accent};
        border-radius: 6px;
    }

    a, a:visited, a:hover {
        text-decoration: none;
        color: ${props => props.theme.colors.primary};
    }

    ul li {
        list-style: none;
    }

    p {
        color: ${props => props.theme.colors.secondary};
    }

    button {
            display: inline-block;
            border: none;
            margin: 0;
            padding: 0;
            background-color: transparent;
            color: inherit;
            text-align: center;
            cursor: pointer;
            text-decoration: none;
    }

    body {
        font-family: 'Jura', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.7;
        letter-spacing: 0.2px;
            color: ${props => props.theme.colors.primary};

        //background: ${props => props.theme.colors.background.color_1};
        background: linear-gradient(90deg,
        ${props => props.theme.colors.background.color_1} 45%,
        ${props => props.theme.colors.background.color_2} 100%);

        color: ${props => props.theme.colors.primary};
    }
`