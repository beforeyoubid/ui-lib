import { useTheme } from '@mui/material';
import { type Colors, type TypographyFontClass, type TypographyFontSize } from '../../mui-theme';

const getLinkButtonStyle = (
  type: 'mint' | 'white' | 'grey' | 'red'
): { BgColor: keyof Colors; hoverBgColor: keyof Colors } => {
  let BgColor: keyof Colors = 'mint75';
  let hoverBgColor: keyof Colors = 'mint90';

  switch (type) {
    case 'mint':
      BgColor = 'mint75';
      hoverBgColor = 'mint90';
      break;

    case 'white':
      BgColor = 'lightWhite';
      hoverBgColor = 'lightL3';
      break;

    case 'grey':
      BgColor = 'dark75';
      hoverBgColor = 'dark90';
      break;

    case 'red':
      BgColor = 'error75';
      hoverBgColor = 'error90';
      break;

    default:
  }
  return { BgColor, hoverBgColor };
};

const useLinkButtonFontStyle = (
  size: 'lg' | 'md' | 'sm'
): { paddingTop: string; paddingBottom: string; fontClass: TypographyFontClass; fontSize: TypographyFontSize } => {
  const theme = useTheme();
  let paddingTop = theme.spacing(1);
  let paddingBottom = theme.spacing(1);
  let fontClass: TypographyFontClass = 'bold';
  let fontSize: TypographyFontSize = 'base';

  switch (size) {
    case 'lg':
      paddingTop = theme.spacing(1.5);
      paddingBottom = theme.spacing(1.5);
      fontClass = 'bold';
      fontSize = 'xl';
      break;
    case 'md':
      paddingTop = theme.spacing(1);
      paddingBottom = theme.spacing(1);
      fontClass = 'bold';
      fontSize = 'base';
      break;
    case 'sm':
      paddingTop = theme.spacing(1);
      paddingBottom = theme.spacing(1);
      fontClass = 'bold';
      fontSize = 'sm';
      break;
    default:
      paddingTop = theme.spacing(1);
      paddingBottom = theme.spacing(1);
      fontClass = 'bold';
      fontSize = 'base';
      break;
  }

  return {
    paddingTop,
    paddingBottom,
    fontClass,
    fontSize,
  };
};
export { getLinkButtonStyle, useLinkButtonFontStyle };
