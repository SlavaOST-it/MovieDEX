const desktop = "(max-width: 1024px)"
const tablet = "(max-width: 768px)"
const mobile = "(max-width: 576px)"


export const mediaQueries = {
    desktop: desktop,
    tablet: tablet,
    mobile: mobile
}

export const lightTheme = {
    colors: {
        background: "#ffffff",

        primary: "#000000",
        secondary: "#969696",
        accent: "#da0018",
        black_color: "#252425",
    },

    media : mediaQueries
}

export const darkTheme = {
    colors: {
        background: "#252525",

        primary: "#ffffff",
        secondary: "#969696",
        accent: "#da0018",
    },

    media : mediaQueries
}


