import { createContext, useState } from "react";
import React from "react";

export const LoadingContext = createContext();

const Loading = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const info = { isLoading, setIsLoading };
  return <LoadingContext.Provider value={info}>{children}</LoadingContext.Provider>;
};

export default Loading;