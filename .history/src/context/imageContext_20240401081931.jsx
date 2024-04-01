import React, {createContext, useContext, useState, useEffect} from "react";


const ImageContext = createContext()



export const ImageProvider = ({children}) => {

    const [propertyHerobanner, setPropertyHerobanner] = useState(null)

    const contextValue = {

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