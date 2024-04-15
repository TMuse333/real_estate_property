import React, { createContext, useContext, useState } from "react";

// Create the ListContext
const ListContext = createContext();

// Create the ListProvider component
export const ListProvider = ({ children }) => {
  const [inputList, setInputList] = useState([]);
  const [setInputListLength]

  // Function to handle input change
  const handleInputChange = (index, title, description) => {
    const newList = [...inputList];
    newList[index] = { title, description };
    setInputList(newList);
    console.log('add fact clicked niqq')
  };

  // Value to provide to consumers
  const contextValue = {
    inputList,
    handleInputChange
  };

  return (
    <ListContext.Provider value={contextValue}>
      {children}
    </ListContext.Provider>
  );
};

// Custom hook to consume the ListContext
export const useListContext = () => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error("useListContext must be used within a ListProvider");
  }
  return context;
};
