import React, {useState, useEffect} from "react";
import './navbar.css'


const Navbar = () => {



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

    const [menuOpen, setMenuOpen] = useState(false)

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 655)

    useEffect(()=> {
        const handleResize = () => {
            if(window.innerWidth >=655){
                setIsDesktop(true)
            }
            else{
                setIsDesktop(false)
            }
        }

        window.addEventListener('resize',handleResize)

        return () => {
            window.removeEventListener('resize',handleResize)
        }
    },[])

    const scrollToId = (id) => {
        const element = document.getElementById(id);
        if (element) {
            setMenuOpen(false);
            element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

           

            
            window.scrollBy({ top: -125, behavior: "smooth" });
            }
        }
    };
    

   

      const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };

      const expandedStyle = {
        opacity:menuOpen ? 1 : 0,
        zIndex: menuOpen ? 999 : -1

    }

    const [hovered, setIsHovered] = useState(null)

    const handleMouseEnter = (index) => {
        setIsHovered(index)
    }

    const handleMouseLeave = () => {
        setIsHovered(null)
    }

    const navOptionStyle = (index) => {
        const selected = index === hovered

        return {
            transform: selected ? 'scale(1.2)' : null,
            color: selected ? 'rgb(236, 236, 236)' : 'white',
            transition: 'all 0.1s ease-in',
            
        }
    }

      return (
        <>
<div className="navbar-wrapper">


        <nav className="navbar-container">
                <span>
                    Rooftight Home
                </span>

                {!isDesktop ? (
       <div className={`menu-icon ${menuOpen ? 'menu-open' : ''}`} onClick={toggleMenu}>
       <div className='bar'></div>
       <div className='bar'></div>
       <div className='bar'></div>
     </div>
                ) : (
                    <>
                    <div className="navbar-items">


                    {links.map((link, index) => (
                        <p 
                        key={index}
                        onMouseEnter={()=>handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        onClick={()=>scrollToId(link.id)}
                        style={
                            navOptionStyle(index)
                        }
                        >{link.name}</p>
                    ))}
                    


                </div>
         </>
           )}

       

        </nav>

        {!isDesktop && (
 <div style={expandedStyle}
 className="expanded-nav">
    {links.map((link,index) => (
        <p key={index}
        onClick={()=>scrollToId(link.id)}>
            {link.name}
        </p>
    ))}
</div>
        )}
       
        </div>
        </>
      )
}


export default Navbar