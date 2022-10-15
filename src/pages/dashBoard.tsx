import type { NextPage } from 'next';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { Flow } from '@/components/share/flow';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Wrap = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
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
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Wrap>
  );
};

export default DashBoard;
