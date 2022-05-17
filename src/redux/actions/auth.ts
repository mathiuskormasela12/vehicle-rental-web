// =========== Auth Actions

import { REDUX_TYPES } from '../../constants';
import { SetTokenFunc } from '../../types';

export const setToken: SetTokenFunc = (accessToken: string, refreshToken: string) => ({
  type: REDUX_TYPES.SET_TOKEN,
  payload: {
    data: {
      accessToken,
      refreshToken,
    },
  },
});
