import React, { createContext, useContext, useState } from "react";


const featureContext = createContext()

export const FeatureProvider = ({ children }) => {

 

    const [featureListLength, setFeatureListLength] = useState(0)

    const [featureList, setFeatureList] = useState([])

    



   
    const contextValue = {
            featureList,setFeatureListLength,
            setFeatureList, featureListLength
    }
  
    return (
      <FeatureContext.Provider value={contextValue}>
        {children}
      </FeatureContext.Provider>
    );
  };
  
  export const useFeatureContext = () => {
    const context = useContext(featureContext);
  
    if (!context) {
      throw new Error("useProfileContext must be used within a ProfileProvider");
    }
    return context;
  };