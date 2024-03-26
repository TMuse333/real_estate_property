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

        return {
            transform:hovered ? 'scale(1.2)' : null,
            
        }
    }

    const detailsStyle = () => {
        const selected = hoveredDoc !== null

        const initialTopOffset = 20; // Adjust the initial offset as needed
const top = hoveredDoc === 0 ? initialTopOffset : Math.floor(hoveredDoc / 2) * 60 ;

const sections =

console.log('the top value', Math.floor(hoveredDoc / 2) * 30 + 30)



        return {
            opacity: selected ? '1' : '0',
            top:
            `${top}vh`
            
        }
    }

  


    return (
        <section className="documents-container">

            <div className="document-details"
            style={detailsStyle()}>
                <h2>Le Document</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, harum. Omnis autem aspernatur magnam error sit neque itaque velit laboriosam.</p>
            </div>
            <h1>Documents</h1>
            <p>Here are some documents you will
                need for your dream home.
            </p>

            <div className="documents-grid">
                {documents.map((document, index) => (
                    <div className="document"
                    key={index}
                    onMouseEnter={()=>handleDocHover(index)}
                    onMouseLeave={()=>handleMouseLeave()}
                    style={docStyle(index)}>
                        <img src={document.image}/>
                        <p>{document.name}</p>
                        </div>
                ))}
            </div>
        </section>
    )
}

export default Documents