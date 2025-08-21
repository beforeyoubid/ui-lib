import { createTheme, type ThemeOptions } from '@mui/material/styles';
import { type Palette } from '@mui/material/styles/createPalette';

import {
  type Colors,
  type TypographyFontSize,
  type TypographyFontClass,
  type TypographyValues,
  type Breakpoint,
} from './theme.types';

export type { TypographyFontSize, TypographyFontClass, Colors };
export type Color = keyof Colors;

export type Typography = {
  size: Record<
    TypographyFontSize,
    {
      fontSize: `${number}rem`;
      lineHeight: `${number}%`;
    }
  >;
  fontWeight: Record<TypographyFontClass, number>;
  fonts: Record<TypographyFontClass, string>;
};

const sizes: Record<Breakpoint, number> = {
  desktop: 1440,
  laptop: 1024,
  tablet: 768,
  phone: 425,
};

const fonts = {
  regular: `Avenir-Roman, Avenir-Medium, system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol'`,
  medium: `Avenir-Medium, Avenir-Roman, system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol'`,
  heavy: `Avenir-Heavy, Avenir-Medium, system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol'`,
  semibold: `Avenir-Heavy, Avenir-Medium, system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol'`,
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
    lg: {
      fontSize: '1.125rem',
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
    semibold: 600,
    heavy: 800,
  },
  fonts: {
    roman: fonts.regular,
    medium: fonts.medium,
    bold: fonts.heavy,
    semibold: fonts.semibold,
    heavy: fonts.heavy,
  },
};

export const themeVariables = {
  toolbarHeight: 64,
  typography,
  fonts,
  sizes,
};

export const colorPalette: Colors = {
  mint90: '#005246',
  mint75: '#007A69',
  mint60: '#009E87',
  mint45: '#00AE95',
  mint30: '#4FC3AE',
  mint15: '#6BCCBB',
  mintL1: '#ABE2D8',
  mintL2: '#D2EFEA',
  mintL3: '#E1F5F1',
  mintL4: '#F4FBFA',

  navy: '#090034',

  dark100: '#16181D',
  dark90: '#444A5A',
  dark75: '#656E85',
  dark60: '#858EA3',
  dark45: '#A5ABBB',
  dark30: '#C2C6D1',
  dark15: '#DFE1E7',

  lightWhite: '#FFFFFE',
  lightL1: '#F9FAFB',
  lightL2: '#F2F4F7',
  lightL3: '#EAECF0',

  success90: '#0D492E',
  success75: '#15754A',
  success60: '#1C9B62',
  success45: '#22B976',
  success30: '#34DA90',
  success15: '#9CEDC9',
  successL1: '#E9FBF3',

  error90: '#7C1A12',
  error75: '#BF271C',
  error60: '#E5584D',
  error45: '#ED8A83',
  error30: '#F3AFAB',
  error15: '#F8D5D3',
  errorL1: '#FDF2F2',

  warning45: '#D49702',
  warning30: '#FDB402',
  warning15: '#FED776',
  warningL1: '#FEEDC1',
  warningL2: '#FEF5DC',
  warningL3: '#FFF9EB',

  transparentOverlay95: 'rgba(22, 24, 29, 0.95)',
  transparentOverlay50: 'rgba(22, 24, 29, 0.5)',
  transparentButtonA: '#C2C6D1',
  transparentButtonB: '#F2F4F7',
};

export const muiTheme: ThemeOptions = {
  palette: {
    colors: colorPalette,
  },
  typography: {
    fontFamily: themeVariables.fonts.regular,
    ...typography,
  },

  sizes,
};

export const theme = createTheme(muiTheme);

declare module '@mui/material/styles/createPalette' {
  export interface PaletteOptions {
    colors?: Colors;
  }
  export interface Palette {
    colors: Colors;
  }
}

declare module '@mui/material/styles/createTypography' {
  export interface Typography extends FontStyle, TypographyUtils, TypographyValues {}
}

declare module '@mui/material/styles/createTheme' {
  export interface BaseTheme {
    palette: Palette;
    typography: Typography;
  }
  export interface Theme {
    sizes: Record<Breakpoint, number>;
  }
  export interface ThemeOptions {
    sizes: Record<Breakpoint, number>;
  }
}
