import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/theme';
import CssBaseline from '@mui/material/CssBaseline';

interface props {
  children: React.ReactNode;
}

const UiProviders: React.FC<props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export { UiProviders };
