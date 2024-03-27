import React from "react";
import './footer.css'
import { Link } from "react-router-dom";
const Footer = () => {

    const links = [
        { name: 'home', id: 'home' },
        { name: 'description', id: 'description' },
        { name: 'price and features', id: 'price-and-features' },
        { name: 'amenities', id: 'amenities' },
        { name: 'photo gallery', id: 'photo-gallery' },
        { name: 'video', id: 'video' },
        { name: 'more info', id: 'more-info' },
        { name: 'flyers', id: 'flyers' },
        { name: 'area info', id: 'area-info' },
        { name: 'documents', id: 'documents' },
        { name: 'map', id: 'map' },
        { name: 'Broker', id: 'broker' },
        { name: 'More Listings', id: 'more-listings' },
        { name: 'Show Bookings', id: 'show-bookings' }
    ];

    const scrollToId = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
    };
    

    return (
        <footer className="footer-container">
            <div className="footer-grid">

           
            {links.map((link, index) => (
                <p key={index} onClick={() => scrollToId(link.id)}>{link.name}</p>
            ))}
             </div>
            <Link className="q3-link"
            to='https://q3designs.netlify.app'>
                <p>
                    
                </p>
                Created by Q3 Designs
            </Link>
        </footer>
    )
}

export default Footer;
