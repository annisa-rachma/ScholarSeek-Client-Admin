import {
   USERS_FETCH_SUCCESS, USERS_PATCH_FETCH_SUCCESS,
  } from "../actions/actionType";
  
  const initialState = { users: [], user: {} };

function userReducer(state = initialState, action) {
  switch (action.type) {
    case USERS_FETCH_SUCCESS:
      return { ...state, users: action.payload };
    case USERS_PATCH_FETCH_SUCCESS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

export default userReducer;