import { actionTypes, APPLY_POST } from "./actionTypes";

export const initialState = {
  loading: false,
  posts: [],
  appliedPost: [],
  error: false,
};


export const postReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_START:
      return {
        ...state, 
        loading: true,
        error: false
      };
    case actionTypes.FETCHING_SUCCESS:
      return {
        ...state, 
        loading: false,
        posts: action.payload,
        error: false
      };
    case actionTypes.APPLIED_POST_FETCHING_SUCCESS:
      return {
        ...state, 
        loading: false,
        appliedPost: action.payload,
        error: false
      };
    case actionTypes.FETCHING_ERROR:
      return {
        ...state, 
        loading: false,
        error: true
      };
    case APPLY_POST:
      return {
        ...state, 
        appliedPost: [...state.appliedPost, action.payload]
      };

    default:
      return state;
  }
};
