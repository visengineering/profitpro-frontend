import React, { createContext, useState, useEffect } from "react";
// import { cardData } from "../constants/data";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  // const [card, setCardData] = useState([]);

  // useEffect(() => {
  //   setCardData(cardData);
  // }, []);

  // const handleAddCardData =() =>{
  //   setCardData(previous)
  // }
  const [expandValue, setExpandValue] = useState();
  const [openDropDown, setOpen] = useState(() => {
    // Load state from local storage, or use a default value
    const storedOpen = localStorage.getItem("openDropDown");
    return storedOpen ? JSON.parse(storedOpen) : false;
  });

  // const [openDropDown, setOpen] = useState([]);
  const [token, setToken] = useState();

  const updateToken = (token) => {
    localStorage.setItem("token", JSON.stringify(token));
    setToken(token);
  };

  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const updateOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  // const updateOpen = (value) => {
  //   if (!openDropDown){
  //     setOpen((prevNames) => [...prevNames, value]);
  //   }
  //   const dropDownExist =openDropDown.find(
  //     (menu) => menu === value
  //   );
  //   setOpen((prevNames) => [...prevNames, value]);
  // };

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
        expandValue,
        setToken,
        token,
        updateToken,
        // card,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
