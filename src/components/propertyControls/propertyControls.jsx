import react, {useState, useEffect} from 'react'
import { useAppContext } from '../../context/context'
import './propertyControls.css'


const PropertyControls = () => {

    const [showMenu, setShowMenu] = useState(false)
    const [showAddItemMenu, setShowItemMenu] = useState(false)

    const {handleAddSectionClick} = useAppContext()

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
          <button onClick={handleAddSectionClick}
          >
            Add Section
          </button>
            

        </section>
        </>
    )

}

export default PropertyControls