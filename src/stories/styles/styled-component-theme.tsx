import { muiTheme } from '../../mui-theme';
import colors from './colors';
import { DefaultTheme } from 'styled-components';

const generateBreakpoint = (width: number, ...cssMarkup: string[]) => `
  @media screen and (max-width: ${width}px) {
    ${cssMarkup};
  }
`;

const breakpoints = {
  tablet: 960,
  phone: 768,
  xxl: 2320,
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

const styledComponentTheme: DefaultTheme = {
  ...muiTheme,
  breakpoints,
  colors,
  badge: {
    primary: colors.persian,
    secondary: colors.regentGrey,
    warning: colors.warning,
    danger: colors.error,
    purple: colors.lightPurple,
    info: colors.turquoise,
    grey: colors.betaGrey,
    dark: colors.darkPurple,
    light: [colors.alabaster, colors.regentGrey],
    blue: colors.darkBlue,
    white: colors.white,
    hold: colors.brown,
  },
  button: {
    primary: colors.persian,
    secondary: colors.regentGrey,
    danger: colors.error,
    hold: colors.brown,
    link: colors.persian,
    white: colors.white,
    warning: colors.warning,
  },
  checkbox: {
    primary: colors.persian,
  },
  generateBreakpoint,
  media: Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (args: TemplateStringsArray) =>
      generateBreakpoint(breakpoints[label as keyof typeof breakpoints], ...args);

    return acc;
  }, {} as Record<string, (args: TemplateStringsArray) => string>),
  spacing: (factor: number) => factor / 8,
};

export default styledComponentTheme;
