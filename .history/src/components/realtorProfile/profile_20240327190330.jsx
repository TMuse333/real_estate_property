import React from "react";
import Testimonials from "../testimonials/testimonials";
import tom from '../../media/tom-header.png'
import './profile.css'
import img from '../../media/place-holder.jpg'
import { motion } from "framer-motion";
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

    const variants = {
        hidden:{
            opacity:0
        }
    }


    

    return (
        <section className="profile-container"
        id='broker'>
            <h1>
                Meet the seller
            </h1>
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