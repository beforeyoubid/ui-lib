import { createTheme, ThemeOptions } from '@material-ui/core';

export type TypographyFontSize = '4xl' | '3xl' | '2xl' | 'xl' | 'base' | 'sm' | 'xs' | '2xs';
export type TypographyFontClass = 'roman' | 'medium' | 'bold';

export type Typography = {
  size: Record<
    TypographyFontSize,
    {
      fontSize: `${number}rem`;
      lineHeight: `${number}%`;
    }
  >;
  fontWeight: Record<TypographyFontClass, number>;
};

const typography: Typography = {
  size: {
    '4xl': {
      fontSize: '2.438rem',
      lineHeight: '130%',
    },
    '3xl': {
      fontSize: '1.938rem',
      lineHeight: '130%',
    },
    '2xl': {
      fontSize: '1.562rem',
      lineHeight: '130%',
    },
    xl: {
      fontSize: '1.250rem',
      lineHeight: '130%',
    },
    base: {
      fontSize: '1.000rem',
      lineHeight: '130%',
    },
    sm: {
      fontSize: '0.812rem',
      lineHeight: '120%',
    },
    xs: {
      fontSize: '0.625rem',
      lineHeight: '120%',
    },
    '2xs': {
      fontSize: '0.500rem',
      lineHeight: '120%',
    },
  },
  fontWeight: {
    roman: 400,
    medium: 500,
    bold: 700,
  },
};

export const themeVariables = {
  toolbarHeight: 64,
  fontSize: {
    minimal: '10px',
    tiny: '14px',
    small: '16px',
    normal: '18px',
    formTitle: '20px',
    big: '24px',
    componentTitle: '28px',
    sectionTitle: '32px',
    veryBig: '42px',
    extremeBig: '46px',
    almostHuge: '52px',
    huge: '56px',
    title: '',
  },
  typography,
  fonts: {
    regular: `Avenir-Roman, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol'`,
    medium: `Avenir-Medium, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol'`,
    heavy: `Avenir-Heavy, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol'`,
  },
  sizes: {
    desktop: 1440,
    laptop: 1024,
    tablet: 768,
    phone: 425,
  },
};

export const theme = createTheme({
  typography: {
    fontFamily: variables.fonts.regular,
  },
} as ThemeOptions);
