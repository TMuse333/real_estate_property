import React, { useEffect, useRef, useState, useMemo } from "react";
import Testimonials from "../testimonials/testimonials";
import tom from '../../media/tom-header.png'
import './profile.css'
import img from '../../media/place-holder.jpg'
import insta from '../../media/instagram-logo.svg.png'
import facebook from '../../media/facebook.jpeg'
import x from '../../media/x-logo.png'
import { motion } from "framer-motion";
import { input } from "@tensorflow/tfjs";

const Profile = ({id,profileName,
profileTitle,profileImage,profileCompany,
profileNumber,profileEmail,
inputVariant}) => {
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


    const [tiltFinished, setTiltFinished] = useState(false)


    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.33,
             // Adjust threshold as needed
        };

        const observer = new IntersectionObserver(([entry]) => {
            
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

    const handleScroll = useMemo(() => {
        return () => {
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
            const newTiltAngle = Math.max(0, 30 - (visiblePercent / 60) * 30);
    
            setTiltAngle(newTiltAngle);
    
            const offset = 350;
            if (elementTop < windowHeight - offset) {
                setIsAnimated(true);
            }
        };
    }, [profileRef, id]);
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);
    


useEffect(()=> {
    if(tiltAngle <=10){
        setTiltFinished(true)
    }
    // else{
    //     setTiltFinished(false)
    // }
},[tiltAngle])
    



    const socials = [
        {
            image: insta
        },
        {
            image: facebook
        },
        {
            image: x
        },
        // {
        //     image: img
        // },
        // {
        //     image: img
        // },
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
            x: inputVariant ? 0 :direction * 40,
            opacity: inputVariant ? 1 : 0
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

    const socialVariants = (delay) => {

        return {

        
        initial:{
            opacity: inputVariant ? 1 :0,
            y: inputVariant ? 0 :10
        },
            animate:{
                opacity:1,
                transition:{
                    delay:1.5 + delay
                },
                y:0
            }
        }

    }

    return (
<>

<motion.h1 className="profile-h1"
           >
                Meet the seller
            </motion.h1>

        {!isDesktop ? (
            <section className="profile-container" ref={profileRef} id='broker'
            style={
                { transform: `perspective(1000px) rotateX(${tiltAngle}deg)` }
            }>
      
            <motion.img
          
              src={profileImage || tom} className='profile-image' />
            <motion.h2
           
            >
               {profileName || 'Your name Here'}</motion.h2>
            <h3>{profileCompany || 'Company Name'}</h3>
            <p>{profileTitle || 'Your position here'}</p>
            
            <div className="profile-contacts">

<motion.h2
  initial={textVariants(false,2).hidden}
  animate={tiltFinished ? textVariants(false,0.6).animate : null}>Contact information</motion.h2>
<motion.p
 initial={textVariants(false,2).hidden}
 animate={tiltFinished ? textVariants(false,0.6).animate : null}
 >{profileNumber || '123 456 794'}</motion.p>
<motion.p
 initial={textVariants(false,2).hidden}
 animate={tiltFinished ? textVariants(false,0.6).animate : null}
>{profileEmail || 'Your email here'}</motion.p>
            <div className="profile-socials">
                {socials.map((social, index) => (
                    <img src={social.image} key={index} />
                ))}
            </div>
            </div>
            <Testimonials />
        </section>
        ) : (

            <>
         

            <section className="profile-container " ref={profileRef} id='broker'
            style={
                { transform: !inputVariant ? `perspective(1000px) rotateX(${tiltAngle}deg)` : null}
            }>


                <div className="profile-desktop">


                
                <div className="profile-name">

                {!inputVariant ? (
                      <motion.h2
                      initial={textVariants(true,2).hidden}
                      animate={tiltFinished ? textVariants(true,0).animate : null}
                      >{profileName || 'Your name Here'}
                      </motion.h2>
                    
                ) : (
                    <input
                    type='text'
                    name>
                    <label></label>
                    </input>

                )}

               
            <motion.h3
              initial={textVariants(true,2).hidden}
              animate={tiltFinished ? textVariants(true,0).animate : null}>
              {profileCompany || 'Company Name'}
</motion.h3>
            <motion.p
              initial={textVariants(true,2).hidden}
              animate={tiltFinished ? textVariants(true,0).animate : null}
            >{profileTitle || 'Your position here'}</motion.p>
            <motion.p
              initial={textVariants(true,2).hidden}
              animate={tiltFinished ? textVariants(true,0).animate : null}>REL#1234567890</motion.p>
                </div>
                <motion.img
           
           src={profileImage || tom}  className='profile-image' />

              <div className="profile-contacts">

                    <motion.h2
                      initial={textVariants(false,2).hidden}
                      animate={tiltFinished ? textVariants(false,0.6).animate : null}>Contact information</motion.h2>
                    <motion.p
                     initial={textVariants(false,2).hidden}
                     animate={tiltFinished ? textVariants(false,0.6).animate : null}
                     >{profileNumber || '123 456 794'}
                     </motion.p>
                    <motion.p
                     initial={textVariants(false,2).hidden}
                     animate={tiltFinished ? textVariants(false,0.6).animate : null}
                    >{profileEmail || 'Your email here'}</motion.p>
            
               <div className="profile-socials">
                
                {socials.map((social, index) => (
                    <motion.img
                    initial={socialVariants((index * 0.5)).initial}
                    animate={tiltFinished ?socialVariants((index * 0.25)).animate : null }
                     src={social.image} key={index} />
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
