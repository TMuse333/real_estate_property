import React, { useEffect, useRef, useState } from "react";
import Testimonials from "../testimonials/testimonials";
import tom from '../../media/tom-header.png'
import './profile.css'
import img from '../../media/place-holder.jpg'
import { motion } from "framer-motion";

const Profile = () => {
    const [inView, setInView] = useState(false);
    const profileRef = useRef(null);

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 800);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 800);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); 

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.33,
             // Adjust threshold as needed
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
    }, [profileRef]);

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
            x:-40,
        },
        animate:{
            opacity:1,
            x:0,
            transition:{
                duration:0.5
            }
        }
    }

    const imgVariants = {
        hidden:{
            opacity:0,

        },
        animate:{
            opacity:1,
            transition:{
                delay:0.55
            }
        }
    }

    return (
<>

        {!isDesktop ? (
            <section className="profile-container" ref={profileRef} id='broker'>
            <motion.h1
            initial={variants.hidden}
            animate={inView? variants.animate : null}>
                Meet the seller
            </motion.h1>
            <motion.img
             initial={imgVariants.hidden}
             animate={inView? imgVariants.animate : null}
              src={tom} className='profile-image' />
            <h2>Thomas Musial</h2>
            <h3>Re/max</h3>
            <p>A real one</p>
            <p>REL#1234567890</p>
            <div className="profile-socials">
                {socials.map((social, index) => (
                    <img src={social.image} key={index} />
                ))}
            </div>
            <Testimonials />
        </section>
        ) : (
            <section className="profile-container desktop-profile" ref={profileRef} id='broker'>
                <div>

                
                <section>
                <h2>Thomas Musial</h2>
            <h3>Re/max</h3>
            <p>A real one</p>
            <p>REL#1234567890</p>
                </section>
                <motion.img
             initial={imgVariants.hidden}
             animate={inView? imgVariants.animate : null}
              src={tom} className='profile-image' />
               <div className="profile-socials">
                {socials.map((social, index) => (
                    <img src={social.image} key={index} />
                ))}
            </div>
            </section>
        )}

</>
      
    );
};

export default Profile;
