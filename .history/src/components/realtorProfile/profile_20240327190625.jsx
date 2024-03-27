import React from "react";
import Testimonials from "../testimonials/testimonials";
import tom from '../../media/tom-header.png'
import './profile.css'
import img from '../../media/place-holder.jpg'
import { animate, motion } from "framer-motion";
const Profile = () => {

    const socials = [
        {
            image:img
        },
        {
            image:img
        },
        {
            image:img
        },
        {
            image:img
        },
        {
            image:img
        },
        
    ]

 


    

    return (
        <section className="profile-container"
        id='broker'>
            <motion.h1
            initial={variants.initial}
            animate={inView? variants.animate : null}>
                Meet the seller
            </motion.h1>
            <img src={tom}
            className='profile-image'/>
            <h2>Re/max</h2>
            <h3>Thomas Musial</h3>
            <p>A real one</p>
            <p>REL#1234567890</p>
            <div className="profile-socials">
                {socials.map((social,index) => (
                    <img src={social.image}
                    />
                ))}
            </div>




<Testimonials/>
        </section>
    )
}

export default Profile