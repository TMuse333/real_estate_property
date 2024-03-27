import React, { useEffect, useRef, useState } from "react";
import Testimonials from "../testimonials/testimonials";
import tom from '../../media/tom-header.png'
import './profile.css'
import img from '../../media/place-holder.jpg'
import { motion } from "framer-motion";

const Profile = () => {
    const [inView, setInView] = useState(false);
    const profileRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5, // Adjust threshold as needed
        };

        const observer = new IntersectionObserver(([entry]) => {
            // Check if target element is intersecting
            setInView(entry.isIntersecting);
        }, options);

        if (profileRef.current) {
            observer.observe(profileRef.current);
        }

        return () => {
            if (profileRef.current) {
                observer.unobserve(profileRef.current);
            }
        };
    }, []);

    const socials = [
        {
            image: img
        },
        {
            image: img
        },
        {
            image: img
        },
        {
            image: img
        },
        {
            image: img
        },
    ];

    const variants = {
        hidden:{
            opacity:0,
            x:-20,
        },
        animate:{
            opacity:1,
            x:0
        }
    }

    return (
        <section className="profile-container" ref={profileRef} id='broker'>
            <motion.h1
            initial={variants.initial}
            animate={inView? variants.animate : null}>
                Meet the seller
            </motion.h1>
            <img src={tom} className='profile-image' />
            <h2>Re/max</h2>
            <h3>Thomas Musial</h3>
            <p>A real one</p>
            <p>REL#1234567890</p>
            <div className="profile-socials">
                {socials.map((social, index) => (
                    <img src={social.image} key={index} />
                ))}
            </div>
            <Testimonials />
        </section>
    );
};

export default Profile;
