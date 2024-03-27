import React, {useState} from "react";
import './navbar.css'


const Navbar = () => {



    const links = [
        'home',
        'description',
        'price and features',
        'amenities',
        'photo gallery',
        'video',
        'more info',
        'flyers',
        'area info',
        'documents',
        'map',
        'Broker',
        'More Listings',
        'Show Bookings'
      ]

      const [menuOpen, setMenuOpen] = useState(false)

      const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };

      const expandedStyle = {
        display: menuOpen ? 'block' : 'none'
    }

      return (
        <>
<div className="navbar-wrapper">
    
</div>
        <nav className="navbar-container">
                <span>
                    Rooftight Home
                </span>
                <div className={`menu-icon ${menuOpen ? 'menu-open' : ''}`} onClick={toggleMenu}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>

       

        </nav>
        <div style={expandedStyle}
         className="expanded-nav">
            {links.map((link,index) => (
                <p key={index}>
                    {link}
                </p>
            ))}
        </div>
        </>
      )
}


export default Navbar