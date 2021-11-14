import { addDecorator } from "@storybook/react"
import { withThemesProvider } from "storybook-addon-styled-component-theme"
import { ThemeProvider } from "styled-components"
import { COLORS, BREAKPOINTS, TAPHEIGHT } from "../src/styles/theme"

const theme = {
    COLORS: COLORS,
    BREAKPOINTS: BREAKPOINTS,
    TAPHEIGHT: TAPHEIGHT,
}

const themes = [theme]
addDecorator(withThemesProvider(themes), ThemeProvider)

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}
