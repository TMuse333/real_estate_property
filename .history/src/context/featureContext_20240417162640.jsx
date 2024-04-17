import React, { createContext, useContext, useState } from "react";


const FeatureContext = createContext()

export const FeatureProvider = ({ children }) => {

 

    const [featureListLength, setFeatureListLength] = useState(0)

    const [featureList, setFeatureList] = useState([])

    const handleInputChange = (index, value) => {
      // Create a new feature object with the input value
      const newFeature = { name: value };

      // Update the featureList state with the new feature object
      setFeatureList(prevList => {
          // Copy the existing featureList array
          const newList = [...prevList];
          // Replace the item at the specified index with the new feature object
          newList[index] = newFeature;
          // Return the updated list
          return newList;
      });
  };


  const handleAddImage = (index, value) => {
    // Create a new feature object with the input value
    const newFeature = { name: value };

    // Update the featureList state with the new feature object
    setFeatureList(prevList => {
        // Copy the existing featureList array
        const newList = [...prevList];
        // Replace the item at the specified index with the new feature object
        newList[index] = newFeature;
        // Return the updated list
        return newList;
    });
};



   
    const contextValue = {
            featureList,setFeatureListLength,
            setFeatureList, featureListLength,
            handleInputChange
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