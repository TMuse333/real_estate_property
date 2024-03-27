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

      const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };

      return (
        <nav className="navbar-container">
                <span>
                    Rooftight Home
                </span>
        </nav>
      )
}


export default Navbar