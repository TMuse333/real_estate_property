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
            name:'Document 2',
            image:img,
            url:'',
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, repellendus mollitia minima quibusdam voluptates ullam accusamus nostrum repellat maxime sequi?'
        },
        {
            name:'Document 3',
            image:img,
            url:'',
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, repellendus mollitia minima quibusdam voluptates ullam accusamus nostrum repellat maxime sequi?'
        },
        {
            name:'Document 4',
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

  


    return (
        <section className="documents-container">

         
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
                        <div>
                         
                        <img src={document.image}/>
                        <p>{document.name}</p>
                        </div>
                        {/* <div className="document-details"
            style={detailsStyle(index)}>
                <h2>Le Document</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, harum. Omnis autem aspernatur magnam error sit neque itaque velit laboriosam.</p>
            </div> */}
                        </div>
                ))}
            </div>
        </section>
    )
}

export default Documents