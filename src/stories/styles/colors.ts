import Color from 'color';

// @see https://material-ui.com/style/color/
//
// >> DO NOT ADD MORE COLORS <<
//
// most of the colors (if not here) are variation of the existing ones, ie.:
//
// import { Color } from 'styles/colors'
// Color(props.theme.colors.darkPurple).fade(0.9).string()
//
// I've used mycolor.space to get some new colors
// https://mycolor.space/?hex=%2306315C&sub=1
const colors = {
  /** Background */
  alabaster: '#F8F8F8',
  get alphaWhite() {
    return Color(this.white).alpha(0.9).rgb().toString();
  },
  fogWhite: 'rgba(255, 255, 255, 0.2)',
  /** main color */
  persian: '#00AE95',

  /** Badge pool */
  turquoise: '#56BECA',
  /** Badge strata */
  lightPurple: '#7A89C2',
  /** Badge grey / secondary btn */
  regentGrey: '#7F8FA4',

  /** Badge BPI */
  betaGrey: '#5C6A81',
  /** button / badge */
  error: '#FF0000',
  muiError: '#f44336',

  /** button / badge */
  warning: '#F5A951',

  /** section bottom-border */
  iron: '#DFE2E5',
  /** Form's label / Side nav */
  darkPurple: '#090034',
  /** sub-heading */
  darkGrey: '#525761',

  /** google address input. */
  lightBlue: '#267dc0',
  darkBlue: '#0F195B',
  /** filter text */
  darkerBlue: '#273754',
  white: '#FFFFFF',
  black: '#000000',
  /** form errors */
  thunderbird: '#D11720',
  /** hold btn */
  brown: '#9D8165',
  /** flagged */
  yellow: '#F9F871',

  /** input border */
  lightGrey: '#dee1e3',

  /** page banner background */
  lightYellow: '#FDE297',

  disabledGrey: '#c3c3c3',

  lightGrayBackground: '#F4F4F4',

  primaryText: '#ffffff',

  mossGreen: '#758E4F',
  deepTaupe: '#7E636B',
};

export const ChartColors = {
  keppel: colors.persian,
  prussianBlue: '#052F5F',
  mahogany: '#C44900',
  acidGreen: '#C6CA53',
  fieryRose: '#FC6471',
  goldenrod: '#D5A021',
};

export default colors;
export { Color };
