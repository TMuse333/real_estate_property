import React, {createContext, useContext, useState, useEffect} from "react";
import img from '../media/place-holder.jpg'

const ImageContext = createContext()



export const ImageProvider = ({children, numberOfCarousels}) => {

    const [propertyHerobanner, setPropertyHerobanner] = useState(null)







    const [createPageClicked, setCreatePageClicked] = useState(false)

       const initialSliderImages = Array.from({ length: numberOfCarousels }, () => []);
const [sliderImages, setSliderImages] = useState(initialSliderImages);

    const contextValue = {
        propertyHerobanner,
        setPropertyHerobanner,
        sliderImages,
        setSliderImages,
        profileImage,
        setProfileImage,
        createPageClicked,
        setCreatePageClicked,
        setProfileName,
        profileName,
        profilePosition,
        setProfilePosition,
        companyName,
        setCompanyName,
        profileEmail,
        setProfileEmail,
        profilePhoneNumber,
        setProfilePhoneNumber
        
    }


    return <ImageContext.Provider
    value={contextValue}>
        {children}
    </ImageContext.Provider>

}

export const useImageContext = () => {
    const context = useContext(ImageContext)

    if (!context) {
        throw new Error('useGameContext must be used within a GameProvider');
      }
      return context;
}