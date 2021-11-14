import React, { useState } from "react";

export const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
  const [formOpen, setFormOpen] = useState(false);

  const [formType, setFormType] = useState("");

  return (
    <AppContext.Provider
      value={{
        formOpen,
        setFormOpen,
        formType,
        setFormType,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
