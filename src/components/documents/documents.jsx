import React, {useState} from "react";
import { useEffect } from "react";
import { useAppContext } from "../../context/context";
import { useDocumentContext } from "../../context/documentContext";
import img from '../../media/place-holder.jpg';
import ImageUploader from "../imageUploader/imageUploader";
import './document.css'

const Documents = ({document,inputVariant}) => {

    const placeholderData = [
        {
          name: 'Document 1',
          image: img,
          url: '',
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, repellendus mollitia minima quibusdam voluptates ullam accusamus nostrum repellat maxime sequi?'
        },
        {
          name: 'Document 2',
          image: img,
          url: '',
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, repellendus mollitia minima quibusdam voluptates ullam accusamus nostrum repellat maxime sequi?'
        },
        // Add more placeholder data as needed
      ];

      const {documentListLength, setDocumentList, setDocumentListLength,
    documentList,handleDocumentChange} = useDocumentContext()

    const handleAddDocumentClick = () => {
        setDocumentListLength((prevLength) => prevLength + 1)
    }
    
      // Use the document prop if provided, otherwise use placeholder data
      const documents = document ? document : placeholderData;
    const [hoveredDoc, setHoveredDoc] = useState(null)

    const handleDocHover = (index) => {
        setHoveredDoc(index)
    }

    const handleMouseLeave = () => {
        setHoveredDoc(null)
    }

    const docStyle = (index) => {
        const hovered = hoveredDoc === index

        return {
            transform:hovered ? 'scale(1.2)' : null,
            
        }
    }

    const detailsStyle = (index) => {
        const selected = hoveredDoc === index

        const initialTopOffset = 20; // Adjust the initial offset as needed
        const isEven = hoveredDoc % 2 === 0;
        const top = hoveredDoc === 0 ? initialTopOffset : isEven ? (hoveredDoc / 2 + 1) * 25 : Math.floor(hoveredDoc / 2) * 20;
        



// console.log('the top value', Math.floor(hoveredDoc / 2) * 30 + 30)

console.log('top',top)
        return {
            opacity: selected ? '1' : '0',
            // top:
            // `${top}%`
            
        }
    }

        const renderDocuments = () => {
            return Array.from({length:documentListLength},(_,index) => (
                <div className="document"
                key={index}>
                    <input
                    onChange={(e)=>handleDocumentChange(index,'name',e.target.value)}
                    placeholder='Enter name of Document Here'>

                    </input>
                    <ImageUploader
                    isDocumentImage={true}
                    arrayIndex={index}
                    />
                    <input  onChange={(e)=>handleDocumentChange(index,'description',e.target.value)}
                    placeholder='Enter Description of Document Here'
                    >
                    </input>
                    <input  onChange={(e)=>handleDocumentChange(index,'link',e.target.value)}
                    placeholder='Enter a link to the document Document Here'
                    >
                    </input>

                    <button>
                        Save Document
                    </button>
                    
                    

                </div>
            ))
        }


    return (

        <>

        {!inputVariant ? (

    
        <section className="documents-container"
        id='documents'>

         
            <h1>Documents</h1>
            <p className="main-description-p">Here are some documents you will
                need for your dream home.
            </p>

            <div className="documents-grid">

                {documentList.length > 0 && (
<>
{documentList.map((document, index) => (
    <div className="document"
    key={index}
    onMouseEnter={()=>handleDocHover(index)}
    onMouseLeave={()=>handleMouseLeave()}
    style={docStyle(index)}>
        <div>
         
        <img src={document.image}/>
        <p>{document.name}</p>
        </div>

        </div>
     
))}
   </>
                )}
               
            </div>
        </section>

            ) : (
                <section className="documents-container"
                id='documents'>
        
                 
                    <h1>Insert your documents here</h1>
                    <p className="main-description-p">
                        Drag and drop important documents here
                    </p>

                    <button onClick={handleAddDocumentClick}
                    >
                        Add Document
                    </button>
        
                    <div className="documents-grid">
                      {renderDocuments()}
                    </div>
                </section>
            )}
        </>
    )
}

export default Documents