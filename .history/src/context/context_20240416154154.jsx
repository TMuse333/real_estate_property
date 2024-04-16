import React, { createContext, useContext, useState } from "react";
import { ProfileProvider } from "./profileContext";
import { ImageProvider } from "./imageContext";
import { ListProvider } from "./list";
import { FeatureProvider } from "./featureContext";

const AppContext = createContext();

export const AppProvider = ({ children, numberOfCarousels }) => {
  // Define your general context variables here
  const [createPageClicked, setCreatePageClicked] = useState(false);
  const [inputVariant, setInputVariant] = useState(true)

  const value = {
    createPageClicked,
    setCreatePageClicked,
    inputVariant,
    setInputVariant
  }

  return (
    <ListProvider>
      <ProfileProvider>
        <ImageProvider numberOfCarousels={numberOfCarousels}>
          {/* Include general context variables in the context value */}
          <AppContext.Provider value={value}>
            {children}
          </AppContext.Provider>
        </ImageProvider>
      </ProfileProvider>
    </ListProvider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
