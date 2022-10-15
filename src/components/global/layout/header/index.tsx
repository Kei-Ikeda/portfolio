import { useMemo } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';

import { showDrawer, hideDrawer } from '@/redux/ui/actions';
import { storeDrawerState } from 'src/redux/ui/selectors';

export const Header = () => {
  const theme = useTheme();
  const { isOpen } = useSelector(storeDrawerState);
  const dispatch = useDispatch();

  const clickHandler = () => {
    if (isOpen) {
      dispatch(hideDrawer());
      return;
    }
    dispatch(showDrawer());
  };

  // Styles --------------------------------------------------------------------
  const iconButtonStyle = useMemo(
    () => ({
      color: theme.palette.common.white,
    }),
    [theme]
  );

  const wrapStyle = useMemo(
    () => ({
      flexGrow: 1,
    }),
    []
  );

  const titleStyle = useMemo(
    () => ({
      flexGrow: 1,
    }),
    []
  );
  // ---------------------------------------------------------------------------

  return (
    <Box sx={wrapStyle}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={titleStyle}>
            Demo App
          </Typography>
          <IconButton
            size='large'
            aria-label='menu'
            sx={iconButtonStyle}
            onClick={clickHandler}
          >
            {!isOpen ? <SettingsIcon /> : <CloseIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
