import React, {createContext, useContext, useState, useEffect} from "react";


const imageContext = createContext()



export const ImageProvider = ({children}) => {

    const contextValue = {

    }


    return <ImageContext.Provider
    value={contextValue}>
        {children}
    </imageContext.Provider>

}