import React, {useState} from "react";



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

      return (
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
      )
}


export default Navbar