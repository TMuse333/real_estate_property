import React, {createContext, useContext, useState, useEffect} from "react";


const ImageContext = createContext()



export const ImageProvider = ({children}) => {

    const contextValue = {

    }


    return <ImageContext.Provider
    value={contextValue}>
        {children}
    </ImageContext.Provider>

}

export const useImageContext = () => {
    const context = useContext(GameContext)
}