import React from 'react'


const UserContext = React.createContext();
const UserComsumer=UserContext.Consumer;
const UserProvider=UserContext.Provider;

export {UserComsumer, UserProvider};

