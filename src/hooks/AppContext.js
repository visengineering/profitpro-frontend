import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [openDropDown, setOpen] = useState(() => {
    // Load state from local storage, or use a default value
    const storedOpen = localStorage.getItem("openDropDown");
    return storedOpen ? JSON.parse(storedOpen) : false;
  });

  const updateOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    localStorage.setItem("openDropDown", JSON.stringify(openDropDown));
  }, [openDropDown]);

  return (
    <AppContext.Provider value={{ openDropDown, updateOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
