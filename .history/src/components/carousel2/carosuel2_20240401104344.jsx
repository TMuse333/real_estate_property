import react,{ useState,useEffect } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import './carousel2.css'

import kakashi from '../../media/kakashi_susanoo.jpg';
import sasuke from '../../media/sasuke.jpg';
import vegeta from '../../media/majin-vegeta.png';

const ImageSlider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isFullHeight, setIsFullHeight] = useState(false);

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 565)

  const [itemClicked, setItemClicked] = useState(null)

    const [desktopExpanded, setDesktopExpanded] = useState(false)

    const [mobileExpanded, setMobileExpanded] = useState(false)

    useEffect(()=>{
      console.log('the slider images',
      images)
    },[])

    const placeHolder = [
      {
        url:kakashi,
        alt:'Kakashi'
      }
     ,{
      url:sasuke,
      alt:'Sasuke'
     },
     {
      url:vegeta,
      alt:'Vegeta'
     },
     {
      url:kakashi,
      alt:'Kakashi2'
    }
    ,{
    url:sasuke,
    alt:'Sasuke2'
    },
    {
    url:vegeta,
    alt:'Vegeta2'
    },
      
    ]

    images = images || placeHolder

  const handleItemClick = (index) => {

    console.log('item clicked')

    // if(itemClicked !== null){
        setItemClicked(index)
        setImageIndex(index)
        if(isDesktop){
            setDesktopExpanded(true)
        }
        else{
            setMobileExpanded(true)
            console.log('mobile expanded')
        }
  }

  

  useEffect(()=> {
    
    const handleResize = () => {
        if(window.innerWidth >= 565){
            setIsDesktop(true)
            console.log('desktop is true!')
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

  const showNextImage = () => {
    setImageIndex(index => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  };

  const showPrevImage = () => {
    setImageIndex(index => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  };

//   const toggleImageHeight = () => {
//     setIsFullHeight(prevState => !prevState);

    
//   };

const handleUnexpand = () => {
    setDesktopExpanded(false)
}

const handleMobileClick = () => {
    setMobileExpanded(true)
}

const handleExpansion = () => {

    if(isDesktop) {
        setDesktopExpanded(false)
    }
    else{
        setMobileExpanded(!mobileExpanded)
    }
}

const [hovered, setHovered] = useState(null)

const handleMouseEnter = (index) => {
    setHovered(index)
}

const handleMouseLeave = () => {
    setHovered(null)
}

const style = (index) => {
    const selected = index === hovered

    return {
        opacity: selected ? '0.8' : '1',
        transform: selected ? 'scale(1.05)' : null,
        transition: 'all 0.3s ease-in-out'
    }
}

  return (
    <>

{!isDesktop && !mobileExpanded && (
    <div>


            <h1>{images.length} Photos</h1>
            <p>Cick on the expand button to zoom in</p>
            </div>
        )}

    {!isDesktop  || (itemClicked !== null && desktopExpanded) ? (
        <section
        id='photo-gallery'
        aria-label="Image Slider"
        style={{ width: "100%",
         position:  desktopExpanded || mobileExpanded ? 'fixed' :"relative",
         backgroundColor:'black',
         height: desktopExpanded || mobileExpanded? '100vh' : 'auto',
         top: desktopExpanded || mobileExpanded?'0': 'auto',
         left:desktopExpanded || mobileExpanded?'0': 'auto',
         zIndex:100
  
   }}
      >
       
        <a href="#after-image-slider-controls" className="skip-link">
          Skip Image Slider Controls
        </a>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            overflow: "hidden",
            alignItems:'center',
           

         
          }}
        >
          {images.map(({ image, alt }, index) => (
            <img
              key={index}
              src={image}
              alt={alt}
              aria-hidden={imageIndex !== index}
              className="img-slider-img"
              style={{ transform: `translateX(${-100 * imageIndex}%)`, 
              height:  "500px",
              
             
          }}
          onClick={()=>handleItemClick(index)}
            />
          ))}
        </div>
        <button
          onClick={showPrevImage}
          className="img-slider-btn"
          style={{ left: 0 }}
          aria-label="View Previous Image"
        >
          <ArrowBigLeft aria-hidden />
        </button>
        <button
          onClick={showNextImage}
          className="img-slider-btn"
          style={{ right: 0 }}
          aria-label="View Next Image"
        >
          <ArrowBigRight aria-hidden />
        </button>
        <div
          style={{
            position: "absolute",
           bottom:'0.5rem',
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: ".25rem",
          }}
        >
          {images.map((_, index) => (
            <button
  
              key={index}
              className="img-slider-dot-btn"
              aria-label={`View Image ${index + 1}`}
              onClick={() => setImageIndex(index)}
  
            >
              {index === imageIndex ? (
                <CircleDot aria-hidden />
              ) : (
                <Circle aria-hidden />
              )}
            </button>
          ))}
        </div>
        <div id="after-image-slider-controls" />
        <button onClick={handleExpansion} className="toggle-height-btn"
        style={{
          position: desktopExpanded || mobileExpanded? 'fixed ' : 'absolute',
          top: desktopExpanded || mobileExpanded? 'auto' : '100%',
          left:'50%',
          transform:'translateX(-50%)',
          zIndex:'5',
       
          bottom:desktopExpanded || mobileExpanded? '10%' : " auto"
        }}>
  
          {desktopExpanded || mobileExpanded? "Collapse" : "Expand"}
        </button>
      </section>
    ) : (
        <section
        className="images-grid"
        id='photo-gallery'>
            {images.map((image, index)=> (
                <img src={image.url}
                key={index}
                onMouseEnter={()=>handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                style={style(index)}
                alt={image.alt}
                onClick={()=> handleItemClick(index)}
                className='desktop-image'></img>
            ))}
          
        </section>
    )}

</>
  
  );
};

export default ImageSlider;
