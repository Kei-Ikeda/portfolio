import { useSelector, useDispatch } from 'react-redux';
import { storeDrawerState } from 'src/redux/ui/selectors';
import MuiDrawer from '@mui/material/Drawer';
import { useTheme } from '@mui/material/styles';

import { hideDrawer } from '@/redux/ui/actions';
import { Content } from '@/components/global/layout/drawer/content';

const Drawer: React.FC = () => {
  const theme = useTheme();
  const { isOpen } = useSelector(storeDrawerState);
  const dispatch = useDispatch();

  const onDrawerCloseHandler = () => {
    dispatch(hideDrawer());
  };
  return (
    <MuiDrawer
      anchor='right'
      open={isOpen}
      onClose={onDrawerCloseHandler}
      sx={{ top: theme.spacing(8), zIndex: theme.zIndex.appBar - 1 }}
      ModalProps={{
        BackdropProps: {
          sx: { top: theme.spacing(8), background: 'transparent' },
        },
      }}
      PaperProps={{ sx: { top: theme.spacing(8), width: 300 } }}
    >
      <Content />
    </MuiDrawer>
  );
};

export { Drawer };
