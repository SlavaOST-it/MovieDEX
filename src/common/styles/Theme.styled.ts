const desktop = "(max-width: 1024px)"
const tablet = "(max-width: 768px)"
const mobile = "(max-width: 576px)"


export const mediaQueries = {
    desktop: desktop ,
    tablet: tablet,
    mobile: mobile
}

export const lightTheme = {
    colors: {
        background: {
            color_1: "#8e9eab",
            color_2: "#eef2f3",
        },

        primary: "#000000",
        secondary: "#969696",
        accent: "#da0018",
        black_color: "#252425",
    },

    media : mediaQueries,
    transition: ".2s ease-in-out"
}

export const darkTheme = {
    colors: {
        background: {
            color_1: "#1E2931FF",
            color_2: "#394E5AFF",
        },
        primary: "#ffffff",
        secondary: "#666d73",
        accent: "#1f9276",
    },

    media : mediaQueries,
    transition: ".2s ease-in-out",

    box_shadow: "1px 14px 20px 6px rgba(0, 0, 0, 0.4)",
}


