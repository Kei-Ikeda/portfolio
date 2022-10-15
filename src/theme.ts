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
  status: {
    danger: blue[500],
  },
});

export { theme };
