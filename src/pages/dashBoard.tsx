import type { NextPage } from 'next';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { Flow } from '@/components/flow';
import { Profile } from '@/components/profile';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Wrap = styled(Box)(({ theme }) => ({
  height: `calc(100vh - ${theme.spacing(8)})`,
  padding: theme.spacing(2),
  backgroundColor: '#e9e9ef',
  overflow: 'scroll'
}));

const DashBoard: NextPage = () => {
  return (
    <Wrap>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <Flow />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item><Profile /></Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>Contact</Item>
        </Grid>
      </Grid>
    </Wrap>
  );
};

export default DashBoard;
