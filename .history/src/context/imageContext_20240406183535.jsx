import React, {createContext, useContext, useState, useEffect} from "react";
import img from '../media/place-holder.jpg'

const ImageContext = createContext()



export const ImageProvider = ({children}) => {

    const [propertyHerobanner, setPropertyHerobanner] = useState(null)

    const [sliderImages, setSliderImages] = useState([])


    const [profileImage, setProfileImage] = useState(img)

    const profile

    const [createPageClicked, setCreatePageClicked] = useState(false)

    const contextValue = {
        propertyHerobanner,
        setPropertyHerobanner,
        sliderImages,
        setSliderImages,
        profileImage,
        setProfileImage,
        createPageClicked,
        setCreatePageClicked
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