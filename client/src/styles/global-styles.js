import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        --min-tap-target-height: ${(props) => props.theme.TAPHEIGHT.mobile};

        --font-size-small: 16px;
        --font-size-medium: 22px;

        @media (min-width: ${(props) => props.theme.BREAKPOINTS.large}) {

            --min-tap-target-height: ${(props) =>
                props.theme.TAPHEIGHT.desktop};

            --font-size-small: 21px;
            --font-size-medium: 24px;
        }
    }

    body{
        font-family: "Source Sans Pro", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }

    h1, h2, h3, p{
        color:${(props) => props.theme.COLORS.foreground};
    }

`
