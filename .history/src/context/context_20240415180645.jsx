import React, { createContext, useContext, useState } from "react";
import { ProfileProvider } from "./profileContext";
import { ImageProvider } from "./imageContext";
import { ListProvider } from "./list";

const AppContext = createContext();

export const AppProvider = ({ children, numberOfCarousels }) => {
  return (
    <ListProvider>
        
    </ListProvider>
    <ProfileProvider>
      <ImageProvider numberOfCarousels={numberOfCarousels}>
        <AppContext.Provider value={{}}>
          {children}
        </AppContext.Provider>
      </ImageProvider>
    </ProfileProvider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
