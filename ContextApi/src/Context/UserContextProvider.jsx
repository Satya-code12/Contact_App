//Context data refers to any piece of information or state that we want to make available to multiple components in a React aplication.


import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) =>{
  const [user, setUser] = React.useState(null)
   return(

    // the provider component is responsible for making the context data available to any component that it wraps around

    <UserContext.Provider value={{user, setUser}}> 
      {children}
    </UserContext.Provider>
   )
}
export default UserContextProvider;