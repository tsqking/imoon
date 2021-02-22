import { Action } from '../../models/action';
import { ON_LOGIN_TITLE_CLICK } from '../actions/types';

const initState = {};
export const rootReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case ON_LOGIN_TITLE_CLICK:
      return {
        user: {},
      };

    default:
      return state;
  }
};
