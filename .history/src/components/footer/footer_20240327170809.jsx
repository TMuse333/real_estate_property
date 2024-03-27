import React, {useEffect, useState} from "react";
import './footer.css'
import { Link } from "react-router-dom";
import { motion, useMotionTemplate, useMotionValue,
    animate } from "framer-motion";
const Footer = () => {

    const colors = [
        "#005999", // Slightly darker shade of blue
        "#0099cc", // Lighter shade of blue
        "#6646b3", // Slight purple shade
        "#b382ff", // Lighter shade of the slight purple
    ];

    const color = useMotionValue(colors[0])

    const boxShadow = useMotionTemplate`0px 4px 4px ${color}`

    const backgroundColor = useMotionTemplate`${color}`

    const pColor = useMotionTemplate`${color}`

    useEffect(()=> {
        animate(color, colors, {
            ease: 'easeInOut',
            duration:10,
            repeat:Infinity,
            repeatType: 'mirror'

       })
    },[])

    const [hovered, setHovered] = useState(false)

    const handleMouseEnter = () => {
        setHovered(true)
    }

    const handleMouseLeave = () => {
        setHovered(false)
    }

    
    
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
            <Link 
            to='https://q3designs.netlify.app'>
                <motion.p
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}

                style={{
                    // boxShadow,
                    // backgroundColor
                }}>
                Created by Q3 Designs
                </motion.p>
               
            </Link>
        </footer>
    )
}

export default Footer;
