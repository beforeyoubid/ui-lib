import { Colors, theme } from '../../mui-theme';
const getButtonStyles = (
  primaryVariant: 'primary' | 'secondary' | 'tertiary',
  secondaryVariant: 'mint' | 'destructive' | 'navy' | 'disabled'
): {
  bgColor: string;
  borderColor: string;
  hoverColor: string;
  textColor: keyof Colors;
  isDisabled: boolean;
  tertiaryVariant: 'contained' | 'outlined';
} => {
  let bgColor = '';
  let borderColor = '';
  let hoverColor = '';
  let textColor: keyof Colors = 'lightWhite';
  let isDisabled = false;
  let tertiaryVariant: 'contained' | 'outlined' = 'contained';

  switch (primaryVariant) {
    case 'primary':
      switch (secondaryVariant) {
        case 'mint':
          bgColor = theme.palette.colors.mint75;
          textColor = 'lightWhite';
          hoverColor = theme.palette.colors.mint90;
          borderColor = theme.palette.colors.mintL1;
          tertiaryVariant = 'contained';
          break;
        case 'destructive':
          bgColor = theme.palette.colors.error75;
          textColor = 'error75';
          hoverColor = theme.palette.colors.error90;
          borderColor = theme.palette.colors.error15;
          tertiaryVariant = 'contained';
          break;
        case 'disabled':
          isDisabled = true;
          bgColor = theme.palette.colors.dark30;
          tertiaryVariant = 'contained';
          break;
        default:
          break;
      }
      break;
    case 'secondary':
      switch (secondaryVariant) {
        case 'mint':
          bgColor = theme.palette.colors.lightWhite;
          textColor = 'mint75';
          hoverColor = theme.palette.colors.mintL3;
          borderColor = theme.palette.colors.mint45;
          tertiaryVariant = 'outlined';
          break;
        case 'destructive':
          bgColor = '';
          textColor = 'error75';
          hoverColor = theme.palette.colors.error15;
          borderColor = theme.palette.colors.error45;
          tertiaryVariant = 'outlined';
          break;
        case 'navy':
          bgColor = theme.palette.colors.dark15;
          textColor = 'dark75';
          tertiaryVariant = 'outlined';
          break;
        case 'disabled':
          isDisabled = true;
          bgColor = theme.palette.colors.dark30;
          tertiaryVariant = 'contained';
          break;
        default:
          break;
      }
      break;
    case 'tertiary':
      {
        bgColor = theme.palette.colors.lightWhite;
        textColor = 'dark75';
        hoverColor = theme.palette.colors.dark15;
        borderColor = theme.palette.colors.dark45;
        tertiaryVariant = 'outlined';
      }
      break;
    default:
      break;
  }

  return { bgColor, borderColor, hoverColor, textColor, isDisabled, tertiaryVariant };
};

export default getButtonStyles;
