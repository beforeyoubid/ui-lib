import { createTheme } from '@mui/material';

export const variables = {
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
});
