import React from 'react';
import { useEffect, useState } from 'react';
// Data
import LoggedInUser from '../utils/LoggedInUser';
// Fetch
import client from '../utils/axios/client';
// Data
import { tempUserData } from '../utils/TempData';
// Context
export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(tempUserData);
  const [token, setToken] = useState(
    localStorage.getItem(process.env.REACT_APP_USER_TOKEN) || ''
  );
  const [toggleCookiePolicy, setToggleCookiePolicy] = useState(false);

  console.log('usercontext', user);
  // useEffect(() => {
  //   const decodedUserData = LoggedInUser();

  //   if (decodedUserData) {
  //     const userId = decodedUserData.id;

  //     client
  //       .get(`/users/${userId}`)
  //       .then((res) => {
  //         setUser(res.data.data.user);
  //       })
  //       .catch((err) => {
  //         console.error('Unable to retrieve user data', err);
  //       });
  //   }

  //   const cookie = localStorage.getItem('CookiePolicy');

  //   if (cookie) {
  //     setToggleCookiePolicy(true);
  //   }
  // }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        toggleCookiePolicy,
        setToggleCookiePolicy,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
