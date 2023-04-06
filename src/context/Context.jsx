import React, { createContext, useState } from "react";

// Create a context with an initial value
export const Context = createContext();

// Create a provider component
export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState({ message: "example message" });

  return (
    <Context.Provider value={{ message, setMessage }}>
      {children}
    </Context.Provider>
  );
};
