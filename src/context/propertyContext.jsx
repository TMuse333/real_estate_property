import React, { createContext, useContext, useState } from "react";
import img from '../media/place-holder.jpg'

const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {

    const [propertyTitle, setPropertyTitle] = useState('')
    const [propertyLocation, setPropertyLocation] = useState('')
    const [propertyPrice, setPropertyPrice] = useState('')
    const [propertyOpeningDate, setPropertyOpeningDate] = useState('')
    const [propertyClosingDate, setPropertyClosingDate] = useState('')
    const [propertyDescription1, setPropertyDescription1] = useState('')
    const [propertyTitle2, setPropertyTitle2] = useState('')
    const [propertyDescription2, setPropertyDescription2] = useState('')
    const [propertyTitle3, setPropertyTitle3] = useState('')
    const [propertyDescription3, setPropertyDescription3] = useState('')
    const [propertyVideo1, setPropertyVideo1] = useState(null)

    const [descriptions, setDescriptions] = useState([])


    const handleInputChange = (value, setterFunction) => {
        setterFunction(value)
    }




    const contextValue = {
        propertyTitle,
        setPropertyTitle,
        propertyLocation,
        setPropertyLocation,
        propertyPrice,
        setPropertyPrice,
        propertyOpeningDate,
        setPropertyOpeningDate,
        propertyClosingDate,
        setPropertyClosingDate,
        propertyDescription1,
        setPropertyDescription1,
        propertyTitle2,
        setPropertyTitle2,
        propertyDescription2,
        setPropertyDescription2,
        propertyTitle3,
        setPropertyTitle3,
        propertyDescription3,
        setPropertyDescription3,
        handleInputChange,
        propertyVideo1,
        setPropertyVideo1,
        descriptions,
        setDescriptions
      };
      

  return (
    <PropertyContext.Provider value={contextValue}>
      {children}
    </PropertyContext.Provider>
  );
};

export const usePropertyContext = () => {
  const context = useContext(PropertyContext);

  if (!context) {
    throw new Error("usePropertyContext must be used within a ProfileProvider");
  }
  return context;
};
