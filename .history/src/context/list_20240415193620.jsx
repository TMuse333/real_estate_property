import React, { createContext, useContext, useState } from "react";

// Create the ListContext
const ListContext = createContext();

// Create the ListProvider component
export const ListProvider = ({ children }) => {
  const [inputList, setInputList] = useState([]);
  const [inputListLength,setInputListLength] = useState(0)

  // Function to handle input change
  const handleInputChange = (index, title, description) => {
    const newList = [...inputList];
    newList[index] = { title, description };
    setInputList(newList);
    console.log('add fact clicked niqq')
  };


  const placeHolder = [
    {
      name: "Scenic Views",
      description: "Bedford offers stunning views of the Bedford Basin and has many homes situated along its picturesque coastline, providing residents with breathtaking views of the water."
    },
    {
      name: "Community Events",
      description: "The Bedford community hosts various events throughout the year, including festivals, farmers' markets, and cultural celebrations, creating a vibrant and engaging atmosphere for residents and visitors alike."
    },
    {
      name: "Historic Charm",
      description: "With a rich history dating back centuries, Bedford is home to many historic buildings and landmarks, adding character and charm to its neighborhoods."
    },
    {
      name: "Recreational Opportunities",
      description: "Residents of Bedford enjoy access to a wide range of recreational activities, including hiking trails, parks, and waterfront areas, making it an ideal location for outdoor enthusiasts."
    },
    {
      name: "Convenient Amenities",
      description: "Bedford boasts a variety of amenities, including shopping centers, restaurants, schools, and healthcare facilities, providing residents with everything they need for a comfortable and convenient lifestyle."
    }
];
  // Value to provide to consumers
  const contextValue = {
    inputList,
    handleInputChange,
    inputListLength,
    setInputList
,
setInputListLength
  }
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
