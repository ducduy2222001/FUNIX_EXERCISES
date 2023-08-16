import React from "react";

const MyContext = React.createContext();

export default MyContext;
export const MyContextProvider = MyContext.Provider;
export const MyContextConsummer = MyContext.Consumer;
