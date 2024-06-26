import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";


const FeatureContext = createContext()

export const FeatureProvider = ({ children }) => {

 

    const [featureListLength, setFeatureListLength] = useState(0)

    const [featureList, setFeatureList] = useState([
      {
        name:'',
        image:''
      }
    ])

    const [amenitiesList, setAmenitiesList] = useState([])

    const [amenityListLength, setAmenityListLength] = useState(0)

    const addAmenity = (index, value) => {
      setAmenitiesList((prevList) => {
        const newList = [...prevList]; // Create a copy of the previous list
        newList[index] = value; // Update the value at the specified index
        return newList; // Return the updated list
      });
    };
    

    const handleFeatureChange = (index, attribute, value) => {
  // Create a new feature object with the input value
    const newList = [...featureList];
    newList[index] = {
      ...newList[index],
      [attribute]:value
    }
    setFeatureList(newList)
  };


  const handleDocumentChange = (index, attribute, value) => {
    const newList = [...documentList];
    newList[index] = {
      ...newList[index],
      [attribute]: value
    };
    setDocumentList(newList);
  };




  const handleAddFeatureImage = (index, value) => {



    
    // Check if the feature object already exists at the specified index
    if (featureList[index]) {
        // If the object exists, update it with the image and existing name
        const newFeature = { ...featureList[index], image: value };
        const newList = [...featureList];
        newList[index] = newFeature;
        setFeatureList(newList);
    } else {
        // If the object doesn't exist, create a new one with the image and name
        const newFeature = { name: null, image: value };
        const newList = [...featureList];
        newList[index] = newFeature;
        setFeatureList(newList);
    }
};



// const handleDescriptionChange = (index, value) => {
//   const newList = [...inputList];
//   newList[index] = { ...newList[index], description: value };
//   setInputList(newList);
// };

useEffect(()=> {
  console.log('the amenitites list',amenitiesList)
},[amenitiesList])

   
    const contextValue = {
            featureList,
            setFeatureListLength,
            setFeatureList,
            featureListLength,
            handleFeatureChange,
            handleAddFeatureImage,
            amenitiesList,
            amenityListLength,
            setAmenitiesList,
            setAmenityListLength,
            addAmenity

    }

    useEffect(()=> {
      console.log('the current features',featureList)
    },[featureList])
  
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