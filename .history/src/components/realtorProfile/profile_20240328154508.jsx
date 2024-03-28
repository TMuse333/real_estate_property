import React, { useEffect, useRef, useState, } from "react";
import Testimonials from "../testimonials/testimonials";
import tom from '../../media/tom-header.png'
import './profile.css'
import img from '../../media/place-holder.jpg'
import { motion } from "framer-motion";

const Profile = ({id}) => {
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


    const 


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


    const [tiltAngle, setTiltAngle] = useState(30);

    useEffect(()=>{


    const handleScroll = () => {
        const contentElement = profileRef.current;
        const elementTop = contentElement.getBoundingClientRect().top;
        const elementHeight = contentElement.clientHeight;
        const windowHeight = window.innerHeight;

        // Calculate the percentage of the element's bottom in view
        const visiblePercentBottom = Math.max(0, Math.min(100, (windowHeight - (elementTop + elementHeight)) / windowHeight * 100));

        // Check if only the bottom 33% of the element is in view
        const bottomThirdInView = visiblePercentBottom >= 67;

        // Calculate the percentage of the element in view
        const visiblePercent = Math.max(0, Math.min(100, (windowHeight - elementTop) / windowHeight * 100));

        // Gradually decrease the tilt angle from 30 to 0 as 60% of the element becomes visible

        const newTiltAngle= 
        // bottomThirdInView ? (visiblePercent / 90) * 10 :
        Math.max(0, 30 - (visiblePercent / 60) * 30);

        // console.log("Visible Percentage:", visiblePercent);
        // console.log("Tilt Angle:", newTiltAngle);
        setTiltAngle(newTiltAngle);
        console.log(bottomThirdInView)

        const offset = 350;

        if (elementTop < windowHeight - offset) {
            setIsAnimated(true);
        }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, [id]);
    



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

    const textVariants = (left, delay) => {

        const direction = left ? -1 : 1

        return {
           hidden:{
            x: direction * 40,
            opacity:0
           },
           animate:{
            x:0,
            opacity:1,
            transition:{
                delay:delay,
                duration:0.8
            }
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
            <motion.h2
            initial={textVariants(left,2).initial}
            animate={inView ? textVariants(left,2).animate : null}>Thomas Musial</motion.h2>
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

            <>
            <motion.h1
           >
                Meet the seller
            </motion.h1>

            <section className="profile-container " ref={profileRef} id='broker'
            style={
                { transform: `perspective(1000px) rotateX(${tiltAngle}deg)` }
            }>


                <div className="profile-desktop">


                
                <div className="profile-name">
                <motion.h2
            initial={textVariants(true,2).hidden}
            animate={inView ? textVariants(true,1).animate : null}
            >Thomas Musial
            </motion.h2>
            <motion.h3
              initial={textVariants(true,2).hidden}
              animate={inView ? textVariants(true,1).animate : null}>
                Re/max</motion.h3>
            <motion.p
              initial={textVariants(true,2).hidden}
              animate={inView ? textVariants(true,1).animate : null}
            >A real one</motion.p>
            <motion.p
              initial={textVariants(true,2).hidden}
              animate={inView ? textVariants(true,1).animate : null}>REL#1234567890</motion.p>
                </div>
                <motion.img
            //  initial={imgVariants.hidden}
            //  animate={inView? imgVariants.animate : null}
              src={tom} className='profile-image' />

              <div className="profile-contacts">

                    <motion.h2
                      initial={textVariants(false,2).hidden}
                      animate={inView ? textVariants(false,2).animate : null}>Contact information</motion.h2>
                    <motion.p
                     initial={textVariants(false,2).hidden}
                     animate={inView ? textVariants(false,2).animate : null}
                     >902-999-1006</motion.p>
                    <motion.p
                     initial={textVariants(false,2).hidden}
                     animate={inView ? textVariants(false,2).animate : null}
                    >Thomaslmusial@gmail.com</motion.p>
            
               <div className="profile-socials">
                
                {socials.map((social, index) => (
                    <img src={social.image} key={index} />
                ))}
            </div>
            </div>
            </div>
            <Testimonials />
            </section>
            </>
        )}

</>
      
    );
};

export default Profile;
