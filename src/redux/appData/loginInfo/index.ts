import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@/redux/';

interface IFInitialStateData {
  isLogin: boolean;
}

interface State {
  data: IFInitialStateData;
}

const initialState: State = {
  data: {
    isLogin: false,
  },
};

const { reducer, actions } = createSlice({
  name: 'loginInfo',
  initialState,
  reducers: {
    // initLoginInfo(state: State) {
    //   state.data = initialState.data;
    // },
    enableLogin(state: State) {
      state.data = { isLogin: true };
    },
    disableLogin(state: State) {
      state.data = { isLogin: true };
    },
  },
});

export const storeLoginInfoState = (state: RootState) =>
  state.appData.loginInfo.data;

export const { enableLogin, disableLogin } = actions;

export { reducer, actions };
