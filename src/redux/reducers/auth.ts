// =========== Auth
// import all modules
import { IAuthGlobalStates, IReduxAuthAction } from '../../interfaces';
import { REDUX_TYPES } from '../../constants';

const initialStates: IAuthGlobalStates = {
  accessToken: '',
  refreshToken: '',
};

const authReducer = (states = initialStates, action: IReduxAuthAction): IAuthGlobalStates => {
  switch (action.type) {
    case REDUX_TYPES.SET_TOKEN: {
      return {
        ...states,
        accessToken: action.payload.data.accessToken,
        refreshToken: action.payload.data.refreshToken,
      };
    }

    default: {
      return {
        ...states,
      };
    }
  }
};

export default authReducer;
