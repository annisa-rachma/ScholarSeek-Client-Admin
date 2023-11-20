export const LOGIN_FETCH_SUCCESS = 'login/fetchSuccess'
export const LOGIN_FETCH_FAIL = 'login/fetchFail'
export const REGISTER_FETCH_SUCCESS = 'register/fetchSuccess'
export const REGISTER_FETCH_FAIL = 'register/fetchFail'

export const SCHOLARSHIP_FETCH_SUCCESS = 'scholarship/fetchSuccess'
export const SCHOLARSHIP_BY_ID_FETCH_SUCCESS = 'scholarship/fetchSuccess'
export const ADD_SCHOLARSHIP_FETCH_SUCCESS = 'addScholarship/fetchSuccess'
export const DELETE_SCHOLARSHIP_FETCH_SUCCESS = 'deleteScholarship/fetchSuccess'
export const EDIT_SCHOLARSHIP_FETCH_SUCCESS = 'editScholarship/fetchSuccess'


export function loginFetchSuccess(payload) {
    return {
      type: LOGIN_FETCH_SUCCESS,
      payload: payload,
    };
  }
  export function registerFetchSuccess(payload) {
    return {
      type: REGISTER_FETCH_SUCCESS,
      payload: payload,
    };
  }

  export function scholarshipsFetchSuccess(payload) {
    return {
      type: SCHOLARSHIP_FETCH_SUCCESS,
      payload: payload,
    };
  }
  export function scholarshipsByIdFetchSuccess(payload) {
    return {
      type: SCHOLARSHIP_BY_ID_FETCH_SUCCESS,
      payload: payload,
    };
  }
  export function addScholarshipFetchSuccess(payload) {
    return {
      type: ADD_SCHOLARSHIP_FETCH_SUCCESS,
      payload: payload,
    };
  }
 
  export function editScholarshipFetchSuccess(payload) {
    return {
      type: EDIT_SCHOLARSHIP_FETCH_SUCCESS,
      payload: payload,
    };
  }
