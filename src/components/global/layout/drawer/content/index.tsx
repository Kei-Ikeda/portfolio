import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import InfoIcon from '@mui/icons-material/Info';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

const Content = () => {
  const [openState, setOpenState] = React.useState<{
    user: boolean;
    organization: boolean;
  }>({ user: false, organization: false });

  const handleUserClick = () => {
    setOpenState({ ...openState, user: !openState.user });
  };

  const handleOrganizationClick = () => {
    setOpenState({ ...openState, organization: !openState.organization });
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label='user settings'>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleUserClick}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary='User Settings' />
              {openState.user ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
        </List>
        <Collapse in={openState.user} timeout='auto' unmountOnExit>
          <List sx={{ py: 0 }}>
            <ListItem disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <EditIcon />
                </ListItemIcon>
                <ListItemText primary='Edit Profile' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary='Log out' />
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>
      </nav>
      <Divider />
      <nav aria-label='Organization settings'>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleOrganizationClick}>
              <ListItemIcon>
                <ApartmentIcon />
              </ListItemIcon>
              <ListItemText primary='Organization settings' />
              {openState.organization ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
        </List>
        <Collapse in={openState.organization} timeout='auto' unmountOnExit>
          <List sx={{ py: 0 }}>
            <ListItem disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <SupervisedUserCircleIcon />
                </ListItemIcon>
                <ListItemText primary='Account Manage' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <PriceChangeIcon />
                </ListItemIcon>
                <ListItemText primary='Change Plan' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <HighlightOffIcon />
                </ListItemIcon>
                <ListItemText primary='Service Leave' />
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>
      </nav>
      <Divider />
      <nav aria-label='secondary mailbox folders'>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HistoryEduIcon />
              </ListItemIcon>
              <ListItemText primary='Contact Support' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simple-list'>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary='Application Version' />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export { Content };
