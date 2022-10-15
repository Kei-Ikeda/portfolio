import { combineReducers } from 'redux';

import { reducer as drawer } from '@/redux/ui/drawer';

const reducers = (
  combineReducers({
    drawer,
  })
);

export { reducers };
