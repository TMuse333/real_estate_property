import React, {useEffect} from "react";
import './footer.css'
import { Link } from "react-router-dom";
import { motion, useMotionTemplate, useMotionValue,
    animate } from "framer-motion";
const Footer = () => {

    const colors = [
        "#0080ff", // Slightly darker shade of blue
        "#00ccff", // Lighter shade of blue
        "#7f5af0", // Slight purple shade
        "#d8a5ff", // Lighter shade of the slight purple
      ];

    const color = useMotionValue(colors[0])

    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

    const backgroundColor

    const pColor = useMotionTemplate`${color}`

    useEffect(()=> {
        animate(color, colors, {
            ease: 'easeInOut',
            duration:10,
            repeat:Infinity,
            repeatType: 'mirror'

       })
    },[])

    
    
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
                <motion.p
                style={{
                    boxShadow
                }}>
                Created by Q3 Designs
                </motion.p>
               
            </Link>
        </footer>
    )
}

export default Footer;
