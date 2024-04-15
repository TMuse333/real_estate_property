import React, { createContext, useContext, useState, useEffect } from "react";

// Create the ListContext
const ListContext = createContext();

// Create the ListProvider component
export const ListProvider = ({ children }) => {
  const [inputList, setInputList] = useState([]);
  const [inputListLength, setInputListLength] = useState(0);
  const [inputVariant, setInputVariant] = useState(true); // Assuming initial inputVariant is true

  // Function to handle input change
  const handleInputChange = (index, title, description) => {
    const newList = [...inputList];
    newList[index] = { title, description };
    setInputList(newList);
    console.log('add fact clicked');
  };

  const handleDescriptionChange = (index, value) => {
    const newList = [...inputList];
    newList[index] = { ...newList[index], description: value };
    setInputList(newList);
  };
  

  // Placeholder data for initial inputList
  const placeHolder = [
    {
      title: "Scenic Views",
      description:
        "Bedford offers stunning views of the Bedford Basin and has many homes situated along its picturesque coastline, providing residents with breathtaking views of the water.",
    },
    {
      title: "Community Events",
      description:
        "The Bedford community hosts various events throughout the year, including festivals, farmers' markets, and cultural celebrations, creating a vibrant and engaging atmosphere for residents and visitors alike.",
    },
    // Add more placeholder data as needed
  ];

  // Function to initialize input list when inputVariant changes to false
  useEffect(() => {
    if (!inputVariant) {
      setInputList(placeHolder); // Set initial values here
      setInputListLength(placeHolder.length);
    }
  }, [inputVariant]);

  // Value to provide to consumers
  const contextValue = {
    inputList,
    handleInputChange,
    inputListLength,
    setInputList,
    setInputListLength,
    inputVariant,
    setInputVariant,
    handleDescriptionChange
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
