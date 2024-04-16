import React, { createContext, useContext, useState } from "react";


const featureContext = createContext()

export const FeatureProvider = ({ children }) => {
   
  
    return (
      <FeatureProvider.Provider value={contextValue}>
        {children}
      </FeatureProvider.Provider>
    );
  };
  
  export const useFeatureContext = () => {
    const context = useContext(featureContext);
  
    if (!context) {
      throw new Error("useProfileContext must be used within a ProfileProvider");
    }
    return context;
  };