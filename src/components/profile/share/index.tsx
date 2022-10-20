import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const TextItemWrap = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const TextItemTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const Text = styled(Typography)(({ theme }) => ({}));

export { TextItemWrap, TextItemTitle, Text }
