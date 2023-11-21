import { REGISTER_FETCH_SUCCESS, REGISTER_FETCH_FAIL } from "../actions/actionType";

const initialState = { input: [],token: null, error: null };

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_FETCH_SUCCESS:
      return { ...state, input: action.payload,token: localStorage.access_token, error: null };
    case REGISTER_FETCH_FAIL:
      return { ...state, input: action.payload,token:null, error: action.payload };

    default:
      return state;
  }
}

export default registerReducer;
