import React, { createContext, useContext, useState } from "react";


const FeatureContext = createContext()

export const FeatureProvider = ({ children }) => {

 

    const [featureListLength, setFeatureListLength] = useState(0)

    const [featureList, setFeatureList] = useState([])

    const [featureListP]



   
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
    const context = useContext(FeatureContext);
  
    if (!context) {
      throw new Error("useProfileContext must be used within a ProfileProvider");
    }
    return context;
  };