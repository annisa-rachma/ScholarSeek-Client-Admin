import {
    MENTORING_FETCH_SUCCESS,
    MENTORING_BY_ID_FETCH_SUCCESS,
  } from "../actions/actionType";
  
  const initialState = { mentoring: [], mentoringById: {} };

function mentoringReducer(state = initialState, action) {
  switch (action.type) {
    case MENTORING_FETCH_SUCCESS:
      return { ...state, mentoring: action.payload };
    case MENTORING_BY_ID_FETCH_SUCCESS:
      return { ...state, mentoringById: action.payload };
    default:
      return state;
  }
}

export default mentoringReducer;