import { LOGIN_FETCH_SUCCESS, LOGIN_FETCH_FAIL } from "../actions/actionType";

const initialState = { token: null, error: null };

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_FETCH_SUCCESS:
      return { ...state, token: action.payload, error: null };
    case LOGIN_FETCH_FAIL:
      return { ...state, token: null, error: action.payload };

    default:
      return state;
  }
}

export default loginReducer;
