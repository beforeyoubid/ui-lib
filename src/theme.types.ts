export type Colors = {
  mint90: string;
  mint75: string;
  mint60: string;
  mint45: string;
  mint30: string;
  mint15: string;
  mintL1: string;
  mintL2: string;
  mintL3: string;
  mintL4: string;

  dark100: string;
  dark90: string;
  dark75: string;
  dark60: string;
  dark45: string;
  dark30: string;
  dark15: string;

  lightWhite: string;
  lightL1: string;
  lightL2: string;
  lightL3: string;

  success90: string;
  success75: string;
  success60: string;
  success45: string;
  success30: string;
  success15: string;
  successL1: string;

  error90: string;
  error75: string;
  error60: string;
  error45: string;
  error30: string;
  error15: string;
  errorL1: string;

  warning45: string;
  warning30: string;
  warning15: string;
  warningL1: string;
  warningL2: string;
  warningL3: string;

  transparentOverlay95: string;
  transparentOverlay50: string;
  transparentButtonA: string;
  transparentButtonB: string;
};

export type TypographyFontSize = '4xl' | '3xl' | '2xl' | 'xl' | 'base' | 'sm' | 'xs' | '2xs';
export type TypographyFontClass = 'roman' | 'medium' | 'bold';

export type TypographyValues = {
  size: Record<
    TypographyFontSize,
    {
      fontSize: `${number}rem`;
      lineHeight: `${number}%`;
    }
  >;
  fontWeight: Record<TypographyFontClass, number>;
};
