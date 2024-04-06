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
import ImageUploader from "../imageUploader/imageUploader";
import { useImageContext } from "../../context/imageContext";
const Profile = ({id,
inputVariant}) => {
    const [inView, setInView] = useState(false);
    const profileRef = useRef(null);

// const [name, setName] = useState(null)

const {profileImage, setProfileImage,setCreatePageClicked,
createPageClicked,  setProfileName,
profileName,
profilePosition,
setProfilePosition,
companyName,
setCompanyName,
profileEmail,
setProfileEmail,
profilePhoneNumber,
setProfilePhoneNumber} = useImageContext()

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 800);

   

    const handleInputChange = (event, setterFunction) => {
        setterFunction(event.target.value)
        setterFunction(event.target.value)
      
console.log('the value is',event.target.value)
      };

      useEffect(()=> {
        console.log(name)
      },[name])

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 800);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); 

    // useEffect(()=>{
    //     inputVariant = false
    //     console.log('the input variant,',inputVariant)
    //     console.log('the profile image',profileImage)

    // },[createPageClicked])


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
                setInView(true);
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
          
              src={profileImage } className='profile-image' />
            <motion.h2
           
            >
               {profileName }</motion.h2>
            <h3>{companyName }</h3>
            <p>{profilePosition }</p>
            
            <div className="profile-contacts">

<motion.h2
  initial={textVariants(false,2).hidden}
  animate={tiltFinished ? textVariants(false,0.6).animate : null}>Contact information</motion.h2>
<motion.p
 initial={textVariants(false,2).hidden}
 animate={tiltFinished ? textVariants(false,0.6).animate : null}
 >{profilePhoneNumber }</motion.p>
<motion.p
 initial={textVariants(false,2).hidden}
 animate={tiltFinished ? textVariants(false,0.6).animate : null}
>{profileEmail }</motion.p>
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

                {!inputVariant ? (

             <>
           


                <div className="profile-desktop">


                
                <div className="profile-name">

               
                      <motion.h2
                      initial={textVariants(true,2).hidden}
                      animate={tiltFinished ? textVariants(true,0).animate : null}
                      >{profileName }
                      </motion.h2>
                    
             

               
            <motion.h3
              initial={textVariants(true,2).hidden}
              animate={tiltFinished ? textVariants(true,0).animate : null}>
              {companyName }
</motion.h3>
            <motion.p
              initial={textVariants(true,2).hidden}
              animate={tiltFinished ? textVariants(true,0).animate : null}
            >{position }</motion.p>
            <motion.p
              initial={textVariants(true,2).hidden}
              animate={tiltFinished ? textVariants(true,0).animate : null}>REL#1234567890</motion.p>
                </div>
                <motion.img
           
           src={profileImage }  className='profile-image' />

              <div className="profile-contacts">

                    <motion.h2
                      initial={textVariants(false,2).hidden}
                      animate={tiltFinished ? textVariants(false,0.6).animate : null}>Contact information</motion.h2>
                    <motion.p
                     initial={textVariants(false,2).hidden}
                     animate={tiltFinished ? textVariants(false,0.6).animate : null}
                     >{profilePhoneNumber }
                     </motion.p>
                    <motion.p
                     initial={textVariants(false,2).hidden}
                     animate={tiltFinished ? textVariants(false,0.6).animate : null}
                    >{profileEmail }</motion.p>
            
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
            </>

            ) : (
                <div className="profile-desktop">


                
                <div className="profile-name input-name">

               
                  
<label htmlFor="name"
>
<input
type='text'
name='name'
placeholder="Enter your name "
onChange={(event)=>handleInputChange(event, setProfileName)}>


</input>
</label>

<label htmlFor="Company "
>
<input
type='text'
name='Company'
placeholder="Enter your Company name "
onChange={(event)=>handleInputChange(event, setCompanyName)}>


</input>
</label>

<label htmlFor="Position "
>
<input
type='text'
name='Position'
placeholder="Enter your position "
onChange={(event)=>handleInputChange(event, setProfilePosition)}>


</input>
</label>







                    
             

               
      
         

                </div>

                <ImageUploader
                isProfileImage={true}/>
               

              <div className="profile-contacts input-name">

                    <motion.h2
                      initial={textVariants(false,2).hidden}
                      animate={tiltFinished ? textVariants(false,0.6).animate : null}>Contact information</motion.h2>
                  <label htmlFor="Company "
>
<input
type='name'
name='Phone '
placeholder="Enter your phone number "
onChange={(event)=>handleInputChange(event, setProfilePhoneNumber)}>


</input>
</label>
<label htmlFor="Company "
>
<input
type='name'
name='Phone '
placeholder="Enter your phone number "
onChange={(event)=>handleInputChange(event, setProfileEmail)}>


</input>
</label>
            
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
            )}
            </section>
            </>
        )}

</>
      
    );
};

export default Profile;
