import {
    SCHOLARSHIP_FETCH_SUCCESS,
    SCHOLARSHIP_BY_ID_FETCH_SUCCESS,
    ADD_SCHOLARSHIP_FETCH_SUCCESS,
    EDIT_SCHOLARSHIP_FETCH_SUCCESS,
    DELETE_SCHOLARSHIP_FETCH_SUCCESS,
  } from "../actions/actionType";
  
  const initialState = { scholarships: [], scholarshipsById: {} };

function scholarshipReducer(state = initialState, action) {
  switch (action.type) {
    case SCHOLARSHIP_FETCH_SUCCESS:
      return { ...state, scholarships: action.payload };
    case SCHOLARSHIP_BY_ID_FETCH_SUCCESS:
      return { ...state, scholarshipsById: action.payload };
    case ADD_SCHOLARSHIP_FETCH_SUCCESS:
      return { ...state, scholarships: action.payload };
    case EDIT_SCHOLARSHIP_FETCH_SUCCESS:
      return { ...state, scholarships: action.payload };
    case DELETE_SCHOLARSHIP_FETCH_SUCCESS:
      return { ...state, scholarships: action.payload };

    default:
      return state;
  }
}

export default scholarshipReducer;