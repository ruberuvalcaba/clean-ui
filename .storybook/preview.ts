import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { THEMES } from '../src/components'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;

export const decorators = [
  withThemeFromJSXProvider({
  themes: {
    main: THEMES.MAIN,
  },
  defaultTheme: 'main',
  Provider: ThemeProvider,
  GlobalStyles,
})];
