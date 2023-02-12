import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  const [myUser, setMyUser] = useState(null);

  useEffect(() => {
    setMyUser(user);
  }, [user]);

  return (
    <UserContext.Provider
      value={{ isAuthenticated, loginWithRedirect, logout, myUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
// make sure use

export { UserContext, UserProvider };
