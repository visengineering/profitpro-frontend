import React, { createContext, useContext, useState } from "react";

const HeadingContext = createContext();

export const HeadingContextProvider = ({ children }) => {
  const [heading, setHeading] = useState("");

  return (
    <HeadingContext.Provider value={{ heading, setHeading }}>
      {children}
    </HeadingContext.Provider>
  );
};

export const useHeading = () => {
  return useContext(HeadingContext);
};
