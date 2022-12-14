import { ThemeOptions } from '@material-ui/core';
import colors from './colors';
import { variables } from '../../mui-theme';

export const breakpoints = {
  tablet: 960,
  phone: 768,
  xxl: 2320,
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

export const palette = {
  primary: {
    main: colors.persian,
  },
  secondary: {
    main: colors.regentGrey,
  },
  warning: {
    main: colors.yellow,
  },
  danger: {
    main: colors.error,
  },
};

const muiTheme: ThemeOptions = {
  typography: {
    fontFamily: variables.fonts.regular,
  },
  breakpoints: {
    values: breakpoints,
  },
  palette,
  fonts: {
    fontFamilyHeavy: variables.fonts.heavy,
  },
  colors,
  overrides: {
    MuiAppBar: {
      root: {
        boxShadow: 'none',
        position: 'absolute',
      },
    },
    MuiToolbar: {
      root: {
        '&$regular': {
          minHeight: `${variables.toolbarHeight}px`,
        },
      },
    },
    MuiTableCell: {
      root: {
        padding: '15px 10px',
        borderBottom: 'none',
      },
      head: {
        padding: '15px 10px',
        color: colors.regentGrey,
        letterSpacing: '1.26px',
      },
      body: {
        color: colors.darkBlue,
      },
    },
    MuiTableSortLabel: {
      root: {
        '&$active': {
          color: colors.regentGrey,
        },
      },
    },
    MuiSelect: {
      root: {
        fontSize: '14px',
        height: '30px',
      },
    },
    MuiMenuItem: {
      root: {
        color: '#fff',
        fontSize: '14px',
        height: '30px',
        '&$selected': {
          fontWeight: '900',
          color: colors.persian,
          cursor: 'default',
        },
        '&:hover': {
          fontWeight: '900',
          color: colors.white,
        },
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: '3px',
      },
    },
    MuiTableRow: {
      footer: {
        backgroundColor: colors.white,
        '&:nth-child(odd)': {
          backgroundColor: colors.white,
        },
      },
    },
    MuiTablePagination: {
      root: {
        width: '100%',
        padding: '40px 0 40px 0  !important',
      },
      toolbar: {
        paddingLeft: 0,
      },
      spacer: {
        display: 'none',
      },
    },
  },
};

export default muiTheme;
