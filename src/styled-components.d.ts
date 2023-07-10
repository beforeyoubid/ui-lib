import { breakpoints } from './mui-theme';
import { Palette } from '@mui/material/styles';
import variables from './variables';
// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: typeof breakpoints;
    button: {
      primary: string;
      secondary: string;
      danger: string;
      hold: string;
      link: string;
      white: string;
      warning: string;
    };
    checkbox: {
      primary: string;
    };
    generateBreakpoint: (width: number, ...cssMarkup: string[]) => string;
    media: Record<string, (args: TemplateStringsArray) => string>;

    palette: Palette;
    toolbarHeight: (typeof variables)['toolbarHeight'];
    sizes: (typeof variables)['sizes'];
    fonts: (typeof variables)['fonts'];
    // fontSize: (typeof variables)['fontSize'];
  }
}
