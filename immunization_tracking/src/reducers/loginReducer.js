import { LOGGING_IN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';

const initialState = {
  user: [],
  loggingIn: false,
  loading: false,
  error: ''
};

function loginReducer(state = initialState, action) {
  console.log(`----------------login fired`);
  switch (action.type) {
    case LOGGING_IN:
      return {
        ...state,
        loggingIn: true,
        error: '',
        loading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loading: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

export default loginReducer;
