import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext();

const AuthContextProvider = ({children}) => {

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(user=>{
        setUser(user);
        setLoading(false)
        console.log(user)

        if (user) {
            navigate('/chats')
        }
    })
  }, [user,navigate]);
  
  return (
    <AuthContext.Provider value={user}>
        {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
