import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@/redux/';

export interface DrawerViewStatusData {
  isOpen: boolean;
  // body: ReactElement | undefined;
}

type State = { data: DrawerViewStatusData };
const initialState: State = {
  data: {
    isOpen: false,
    // body: undefined,
  },
};

const { reducer, actions } = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    showDrawer(state: State) {
      state.data = { isOpen: true };
    },
    hideDrawer(state: State) {
      state.data = initialState.data;
    },
  },
});

export const storeDrawerState = (state: RootState) => state.ui.drawer.data;

export const { showDrawer, hideDrawer } = actions;

export { reducer };
