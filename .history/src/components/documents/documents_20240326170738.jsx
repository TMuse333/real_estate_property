import React, {useState} from "react";
import img from '../../media/place-holder.jpg';
import './document.css'

const Documents = () => {

    const documents = [
        {
            name:'Document 1',
            image:img,
            url:'',
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, repellendus mollitia minima quibusdam voluptates ullam accusamus nostrum repellat maxime sequi?'
        },
        {
            name:'Document 1',
            image:img,
            url:'',
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, repellendus mollitia minima quibusdam voluptates ullam accusamus nostrum repellat maxime sequi?'
        },
        {
            name:'Document 1',
            image:img,
            url:'',
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, repellendus mollitia minima quibusdam voluptates ullam accusamus nostrum repellat maxime sequi?'
        },
        {
            name:'Document 1',
            image:img,
            url:'',
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, repellendus mollitia minima quibusdam voluptates ullam accusamus nostrum repellat maxime sequi?'
        }
    ]

    const [hoveredDoc, setHoveredDoc] = useState(null)

    const handleDocHover = (index) => {
        setHoveredDoc(index)
    }

    const handleMouseLeave = () => {
        setHoveredDoc(null)
    }

    const docStyle = (index) => {
        const hovered = hoveredDoc === index

        return (
            
        )
    }



    return (
        <section className="documents">
            <h1>Documents</h1>
            <p>Here are some documents you will
                need for your dream home.
            </p>

            <div className="documents-grid">
                {documents.map((document, index) => (
                    <div className="document"
                    key={index}
                    onMouseEnter={()=>handleDocHover(index)}
                    onMouseLeave={()=>handleMouseLeave()}>
                        <img src={document.image}/>
                        <p>{document.name}</p>
                        </div>
                ))}
            </div>
        </section>
    )
}

export default Documents