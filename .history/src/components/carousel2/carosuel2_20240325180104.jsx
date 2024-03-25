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

  const [itemClicked, setItemClicked] = useState(false)


  const handleItemClick = (index) => {
    setItemClicked()
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

  const toggleImageHeight = () => {
    setIsFullHeight(prevState => !prevState);
  };

  return (
    <>


    {!isDesktop ? (
        <section
        aria-label="Image Slider"
        style={{ width: "100%",
         height: isFullHeight ? "10%" : '10%', position: "relative",
  
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
         
          }}
        >
          {images.map(({ url, alt }, index) => (
            <img
              key={url}
              src={url}
              alt={alt}
              aria-hidden={imageIndex !== index}
              className="img-slider-img"
              style={{ transform: `translateX(${-100 * imageIndex}%)`, height: isFullHeight ? "50px" : "500px",
              // position:'absolute',
              // top:'25%',
              // left:'50%',
              // transform:'translateX(-50%)'
          }}
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
        <button onClick={toggleImageHeight} className="toggle-height-btn"
        style={{
          position:'absolute',
          top:isFullHeight ? '100%' : '100%',
          left:'50%',
          transform:'translateX(-50%)'
        }}>
  
          {isFullHeight ? "Collapse" : "Expand"}
        </button>
      </section>
    ) : (
        <section
        className="images-grid">
            {images.map((image, index)=> (
                <img src={image.url}
                alt={image.alt}
                className='desktop-image'></img>
            ))}
          
        </section>
    )}

</>
  
  );
};

export default ImageSlider;
