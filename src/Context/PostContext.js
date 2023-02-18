import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { actionTypes } from "../State/PostState/actionTypes";
import { initialState, postReducer } from "../State/PostState/postReducer";
import { authContext } from "./UserContext";
const postsContext = createContext();
const PostContext = ({ children }) => {
  const { user } = useContext(authContext);

  const [state, dispatch] = useReducer(postReducer, initialState);

  useEffect(() => {
    dispatch({ type: actionTypes.FETCHING_START });
    fetch("https://find-work-server.vercel.app/posts")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data });
      })
      .catch(() => {
        dispatch({ type: actionTypes.FETCHING_ERROR });
      });
  }, []);


  useEffect(() => {
    dispatch({ type: actionTypes.FETCHING_START });
    fetch(`https://find-work-server.vercel.app/applied?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: actionTypes.APPLIED_POST_FETCHING_SUCCESS,
          payload: data,
        });
      })
      .catch(() => {
        dispatch({ type: actionTypes.FETCHING_ERROR });
      });
  }, [user?.email]);

  const value = { state, dispatch };
  return (
    <postsContext.Provider value={value}>{children}</postsContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(postsContext);

  return context;
};

export default PostContext;
