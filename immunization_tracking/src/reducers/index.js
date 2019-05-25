import {
  FETCH_PATIENT_START,
  FETCH_PATIENT_SUCCESS,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILED
} from '../actions';

const initialState = {
  patients: {},
  isLoggingIn: false,
  isLoggedIn: false,
  isLoading: false,
  error: ''
};

function reducer(state = initialState, action) {
  console.log(`----------------reducer fired`);
  switch (action.type) {
    // TODO:
    //   ADD_PATIENT
    //   REMOVE_PATIENT (stretch)
    //   UPDATE_PATIENT (stretch)

    // console.log(`----------------fetch PATIENT/staff profile fired`);

    case FETCH_PATIENT_START:
      return {
        ...state,
        isLoading: true,
        isLoggedIn: true,
        error: ''
      };
    case FETCH_PATIENT_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        patients: action.payload,
        error: ''
      };
    case LOGIN_START:
      return {
        ...state,
        isLoggedIn: false,
        error: '',
        isLoading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoggedIn: false,
        isLoading: false
      };
    case REGISTER_START:
      return {
        ...state,
        error: '',
        isRegistering: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        error: '',
        isRegistering: false
      };
    case REGISTER_FAILED:
      return {
        ...state,
        error: action.payload,
        isRegistering: false
      };
    default:
      return state;
  }
}

export default reducer;
