// Patient Actions
import axios from 'axios';
import { axiosAuth } from '../axiosAuth';

export const URL = 'https://immunization-tracker-backend.herokuapp.com';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

// async () =>
export const login = creds => dispatch => {
  console.log(`---------------patient login fired`);
  dispatch({ type: LOGIN_START });
  axiosAuth()
    .post(`${URL}/login?role=1`, creds)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('patient_id', res.data.patient_id);
      localStorage.setItem('username', res.data.username);
      localStorage.setItem('message', res.data.message);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      const saved = JSON.stringify(res.data);
      console.log(`------------------------saved response` + saved);
      localStorage.setItem('data', saved);
      console.log(`---------------------login response` + JSON.stringify(res));
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILED, payload: err });
      alert(`Incorrect credentials used: Please check and try again.`);
    });
};

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';

export const registerPatient = creds => dispatch => {
  console.log(
    `-------------------------patient register fired` + JSON.stringify(creds)
  );
  dispatch({ type: REGISTER_START });
  // axiosAuth()
  axios
    .post(`${URL}/register?role=1`, creds)
    .then(res => {
      // console.log(`------------------------response`, res);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', res.data.username);
      console.log(`-----------------------reg ID`, res.data.id);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data.token });
      console.log(`------------------------response`, JSON.stringify(res));
    })
    .catch(err => {
      console.log(`------------------------error`);
      dispatch({ type: REGISTER_FAILED, payload: err });
      alert('Oops! Something did not work. Please try again');
    });
};

// Fetch + Initial Render
export const FETCH_PATIENT_START = 'FETCH_PATIENT_START';
export const FETCH_PATIENT_SUCCESS = 'FETCH_PATIENT_SUCCESS';
// export const FETCH_PATIENT_FAILED = 'FETCH_PATIENT_FAILED';

export const fetchPatients = data => dispatch => {
  dispatch({ type: FETCH_PATIENT_START, payload: data });
  console.log(`----------------------fetch patient start`);
  axiosAuth()
    .get(`${URL}/api/patients`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCH_PATIENT_SUCCESS });
      console.log(`-------------------fetch sucessful`);
    })
    .catch(err => {
      console.log(err);
    });
};
