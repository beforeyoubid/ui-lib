import { muiTheme } from '../../mui-theme';
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

const styledComponentTheme = {
  ...muiTheme,
  breakpoints,
  generateBreakpoint,
  media: Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (args: TemplateStringsArray) =>
      generateBreakpoint(breakpoints[label as keyof typeof breakpoints], ...args);

    return acc;
  }, {} as Record<string, (args: TemplateStringsArray) => string>),
  spacing: (factor: number) => factor / 8,
} as unknown as DefaultTheme;

export default styledComponentTheme;
