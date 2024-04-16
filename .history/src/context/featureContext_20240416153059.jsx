import React, { createContext, useContext, useState } from "react";


const featureContext = createContext()

export const FeatureProvider = ({ children }) => {
    const [profileImage, setProfileImage] = useState(img);
    const [profileName, setProfileName] = useState(null);
    const [profilePosition, setProfilePosition] = useState(null);
    const [companyName, setCompanyName] = useState(null);
    const [profileEmail, setProfileEmail] = useState(null);
    const [profilePhoneNumber, setProfilePhoneNumber] = useState(null);
  
    const contextValue = {
      profileImage,
      setProfileImage,
      profileName,
      setProfileName,
      profilePosition,
      setProfilePosition,
      companyName,
      setCompanyName,
      profileEmail,
      setProfileEmail,
      profilePhoneNumber,
      setProfilePhoneNumber
    };
  
    return (
      <FeatureProvider.Provider value={contextValue}>
        {children}
      </ProfileContext.Provider>
    );
  };
  
  export const useProfileContext = () => {
    const context = useContext(ProfileContext);
  
    if (!context) {
      throw new Error("useProfileContext must be used within a ProfileProvider");
    }
    return context;
  };