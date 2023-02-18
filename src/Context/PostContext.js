import React, { createContext, useContext, useEffect, useState } from "react";
const postsContext = createContext();
const PostContext = ({ children }) => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setPosts(data)
      });
  }, []);

  const value = { posts };
  return (
    <postsContext.Provider value={value}>{children}</postsContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(postsContext);

  return context;
};

export default PostContext;
