import { useTheme } from '@mui/material';

import { type Colors, type TypographyFontSize } from '../../mui-theme';
import { ButtonDimension } from '../../my-constants';

const useButtonStyles = (
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
  const theme = useTheme();
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
          textColor = 'lightWhite';
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
      if (secondaryVariant === 'disabled') {
        isDisabled = true;
        bgColor = theme.palette.colors.dark30;
        tertiaryVariant = 'contained';
      } else {
        bgColor = theme.palette.colors.lightWhite;
        textColor = 'dark75';
        hoverColor = theme.palette.colors.dark15;
        borderColor = theme.palette.colors.dark45;
        tertiaryVariant = 'outlined';
      }
    default:
      break;
  }

  return { bgColor, borderColor, hoverColor, textColor, isDisabled, tertiaryVariant };
};

type ButtonSize = 'lg' | 'md' | 'sm';
type ButtonWrap = 'narrow' | 'wide';

const useButtonFontStyle = (
  size: ButtonSize = 'md',
  wrap: ButtonWrap = 'narrow'
): { padding: string; fontSize: TypographyFontSize; height: string; width: string } => {
  const theme = useTheme();
  // Use Medium button's heighht and width by default
  let height = '53px';
  let width = '117px';
  let padding: string;
  let fontSize: TypographyFontSize;

  switch (size) {
    case 'lg':
      padding = wrap === 'narrow' ? theme.spacing(1.5, 2) : theme.spacing(2, 2.5);
      height = wrap === 'narrow' ? ButtonDimension.LG.Narrow.Height : ButtonDimension.LG.Wide.Height;
      width = wrap === 'narrow' ? ButtonDimension.LG.Narrow.Width : ButtonDimension.LG.Wide.Width;
      fontSize = 'xl';
      break;
    case 'md':
      padding = wrap === 'narrow' ? theme.spacing(1, 1.5) : theme.spacing(2, 2.5);
      height = wrap === 'narrow' ? ButtonDimension.MD.Narrow.Height : ButtonDimension.MD.Wide.Height;
      width = wrap === 'narrow' ? ButtonDimension.MD.Narrow.Width : ButtonDimension.MD.Wide.Width;
      fontSize = 'xl';
      fontSize = 'sm';
      break;
    case 'sm':
      padding = wrap === 'narrow' ? theme.spacing(1, 2) : theme.spacing(1.5, 2.5);
      height = wrap === 'narrow' ? ButtonDimension.SM.Narrow.Height : ButtonDimension.SM.Wide.Height;
      width = wrap === 'narrow' ? ButtonDimension.SM.Narrow.Width : ButtonDimension.SM.Wide.Width;
      fontSize = 'base';
      break;
    default:
      padding = wrap === 'narrow' ? theme.spacing(1.5, 1) : theme.spacing(1, 1.5);
      height = wrap === 'narrow' ? ButtonDimension.MD.Narrow.Height : ButtonDimension.MD.Wide.Height;
      width = wrap === 'narrow' ? ButtonDimension.MD.Narrow.Width : ButtonDimension.MD.Wide.Width;
      fontSize = 'base';
      break;
  }

  return {
    padding,
    fontSize,
    height,
    width,
  };
};

export { useButtonStyles, useButtonFontStyle };
