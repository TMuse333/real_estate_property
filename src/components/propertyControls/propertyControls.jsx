import react, {useState, useEffect} from 'react'
import './propertyControls.css'


const AddBlock = ({showMenu}) => {



    return (
        <>
        <ul 
        className='add-items-list'>
            <li>Add Title</li>
            <li>Add description</li>
            <li>Add Single Image</li>
            <li>Add single Video</li>
        </ul>
        </>
    )
}




const PropertyControls = () => {

    const [showMenu, setShowMenu] = useState(false)
    const [showAddItemMenu, setShowItemMenu] = useState(false)

    const menuStyle = {
        transform: !showMenu ? 'translateX(100%)' : 'translateX(0)'
    }

    function toggleMenu(){
        setShowMenu(!showMenu)
    }

    function toggleAddItemMenu(){
        setShowItemMenu(!showAddItemMenu)
    }

    return (
        <>
          <button className='toggle-menu-button'
          onClick={toggleMenu}>
               {showMenu ? 'Exit Menu' : 'Show Menu'}
            </button>
        <section style={menuStyle}
        className='property-controls-container'>
          
            

        </section>
        </>
    )

}

export default PropertyControls