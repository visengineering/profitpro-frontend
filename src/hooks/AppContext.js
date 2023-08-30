import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [openDropDown, setOpen] = useState(() => {
    // Load state from local storage, or use a default value
    const storedOpen = localStorage.getItem("openDropDown");
    return storedOpen ? JSON.parse(storedOpen) : false;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const updateOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const [open, setOpenToggle] = useState(() => {
    const toggleOpen = localStorage.getItem("open");
    return toggleOpen ? JSON.parse(toggleOpen) : false;
  });
  const toggleDrawer = () => {
    setOpenToggle(!open);
  };

  useEffect(() => {
    localStorage.setItem("openDropDown", JSON.stringify(openDropDown));
    localStorage.setItem("toggledrawer", JSON.stringify(open));
  }, [openDropDown, open]);

  return (
    <AppContext.Provider
      value={{
        openDropDown,
        updateOpen,
        open,
        toggleDrawer,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
