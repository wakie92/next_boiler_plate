import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from '@reduxjs/toolkit';

import { emailSlice } from './email';
import { urlSlice } from './url';

const reducer = (state = {}, action: any) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    [emailSlice.name]: emailSlice.reducer,
    [urlSlice.name]: urlSlice.reducer,
  })(state, action);
};

export default reducer;
