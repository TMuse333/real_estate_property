import React, { useState,useEffect } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import './navbar.css'






const Navbar = ({links,id}) => {
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true)
  const [hovered, setHovered] = useState(false)
  const [navHovered, setNavHovered] = useState(null)

  const handleMouseEnter = () => {
    setHovered(true)
  }

  const handleMouseLeave = () => {
    setHovered(false)
  }

  const handleNavEnter = (index) => {
    setNavHovered(index);
  };

  const handleNavLeave = () => {
    setNavHovered(null);
  };

  const toggleSubMenu = () => {
    
    setSubMenuVisible(!subMenuVisible);
  };


  useEffect(() => {
    // Function to update sub-menu visibility when the screen width changes
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(!(screenWidth >= 865)); // Set subMenuVisible to true if screen width is at least 415 pixels
    };

    // Add a resize event listener to update the sub-menu visibility
    window.addEventListener('resize', handleResize);

    // Initial call to set sub-menu visibility based on current screen width
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const style = {
height: isMobile && !subMenuVisible ? '0px' :  isMobile ? '90vh' : 'auto',
overflowY:'hidden',
width: isMobile ?'80px':'auto',
backgroundImage: isMobile ? 'linear-gradient(to right, #00bfff, #4db8ff, #64bcff, #00bfff)' : null,
transition: isMobile? 'height 0.3s ease-in,padding 0.3s ease-in' : null,
marginTop: isMobile ? '1rem' : null,
borderRadius:'10px',
paddingTop:subMenuVisible ?'1rem' : '0',
position:'fixed',
left:'10%'

  
 
  };

  const navStyle = (index) => {

    return{
      backgroundColor: navHovered === index? '#00bfff' : null,
      padding:'0 0.55rem 0 0.55rem',
      borderRadius:'7px',
      // color:navHovered === index? '#6c5933' : null,
    }
  }

  const logoStyle = {
    transform: hovered || subMenuVisible? 'scale(1.3)' : 'scale(1)',
    width:'50px',
    transition:'all ease-in 0.3s',
    backgroundColor:'transparent',
    marginTop:'-1rem'
  }

  return (

    <div className='navbar-container'
    id={id}>
    <p 
          className='big-logo'
          style={logoStyle}
          />
    <div className='navbar-logo'>
   
 

  
        <p className='navbar-logo'
      >Q3 Designs</p>
     

      </div>

     
      
    
      <div className='list-container'>
        <button onClick={toggleSubMenu} 
        
        className='mini-logo'
        
        >

         
          
<p
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}>x</p>
        </button>
        <ul 
        className='nav-list'
        style={style}
         
         >

          {links.map((link,index) => (
          
                <li
                className='nav-link'
                onMouseEnter={()=>handleNavEnter(index)}
                onMouseLeave={()=>handleNavLeave()}
                style={navStyle(index)}>
                  {link}
                </li>
        
          ))}
       
        </ul>
      </div>

      


       </div>
  
  );
};

export default Navbar;