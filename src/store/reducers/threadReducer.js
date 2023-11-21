import {
    THREADS_FETCH_SUCCESS,
    THREAD_BY_ID_FETCH_SUCCESS,
  } from "../actions/actionType";
  
  const initialState = { threads: [], threadById: {} };

function threadReducer(state = initialState, action) {
  switch (action.type) {
    case THREADS_FETCH_SUCCESS:
      return { ...state, threads: action.payload };
    case THREAD_BY_ID_FETCH_SUCCESS:
      return { ...state, threadById: action.payload };
    default:
      return state;
  }
}

export default threadReducer;