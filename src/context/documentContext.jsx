import React, {createContext, useContext, useState, useEffect} from "react";
import img from '../media/place-holder.jpg'

const DocumentContext = createContext()



export const DocumentProvider = ({children, }) => {

  const [documentListLength, setDocumentListLength] = useState(0)

  const [documentList, setDocumentList] = useState([
    {
      name: '',
      image: '',
      description: '',
      link: ''
    }
  ]);

  const handleDocumentChange = (index, attribute, value) => {
    const newList = [...documentList];
    newList[index] = {
      ...newList[index],
      [attribute]: value
    };
    setDocumentList(newList);
  };
  

  useEffect(()=> {
    console.log('The documents list',documentList)
  },[documentList])


    const contextValue = {
        documentListLength,
        setDocumentListLength,
        documentList,
         setDocumentList,
         handleDocumentChange  
    }


    return <DocumentContext.Provider
    value={contextValue}>
        {children}
    </DocumentContext.Provider>

}

export const useDocumentContext = () => {
    const context = useContext(DocumentContext)

    if (!context) {
        throw new Error('useDocumentContext must be used within a GameProvider');
      }
      return context;
}