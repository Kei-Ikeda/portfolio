import { createTheme } from '@mui/material/';
import { blue } from '@mui/material/colors';

// 型定義を上書き
declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#2F3337',
    },
  },
  typography: {
    h1: {
      fontSize: 24,
    },
    h2: {
      fontSize: 20,
    },
    h3: {
      fontSize: 18,
    },
    subtitle1: {
      fontSize: 16,
    },
    subtitle2: {
      fontSize: 14,
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 13,
    },
    button: {
      fontSize: 16,
    },
    caption: {
      fontSize: 12,
    },
  },
  status: {
    danger: blue[500],
  },
});

export { theme };
