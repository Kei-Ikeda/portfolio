import { combineReducers } from 'redux';

import { reducer as loginInfo } from '@/redux/appData/loginInfo';

const reducers = (
  combineReducers({
    loginInfo,
  })
);

export { reducers };
