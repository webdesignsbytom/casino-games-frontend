import React from 'react';
import { useState } from 'react';

export const ToggleContext = React.createContext();

const ToggleContextProvider = ({ children }) => {
  const [toggleQuickDeposit, setToggleQuickDeposit] = useState(false);
  const [toggleNavigation, setToggleNavigation] = useState(false);
  const [activeNav, setActiveNav] = useState('/');

  const toggleNavbarOpenClosed = () => {
    setToggleNavigation(!toggleNavigation);
  };

  const toggleQuickDepositOpenClosed = () => {
    setToggleQuickDeposit(!toggleQuickDeposit);
  };

  return (
    <ToggleContext.Provider
      value={{
        toggleNavigation,
        toggleQuickDeposit,
        toggleNavbarOpenClosed,
        toggleQuickDepositOpenClosed,
        activeNav,
        setActiveNav,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContextProvider;
