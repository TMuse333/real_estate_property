import React, { useState, useEffect,useMemo } from 'react';
import './productCarousel.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import image from '../../media/place-holder.jpg'

const ProductCarousel = ({images,horizontal}) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(null);

  const [carouselSwiped, setCarouselSwiped] = useState(false)

  const [positions, setPositions] = useState(
    Array.from({ length: 6 }, (_, index) => ({
      left: `${index * 50}%`,
      transform: `translateX(-50%)`,
      transition: 'transform 0.3s ease, border 0.3s ease, box-shadow 0.3s ease',
      animation: index === 0 ? 'first' : index === 1 ? 'second' : index === 2 ? 'third' : index === 3 ? 'forth' :'none',
    }))
  );

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: [0.2, 0], // Adjust the threshold as needed
  });

  const controls = useAnimation();

  useEffect(() => {
    // Trigger the animation when the element is in view
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const combinedVariants = useMemo(() => {
    return (index, button) => {
      return {
        hidden: {
          opacity: 0,
          y: -40,
          height: '0px',
          transition: {
            y: { duration: 0.3 },
            opacity: { delay: 0.4, duration: 0.5 },
            height: { duration: 0.4, ease: 'easeInOut' },
          },
        },
        visible: {
          opacity: 1,
          y: 0,
          height: '60vw',
          transition: {
            y: {
              delay: index === 1 ? 1 : index === 0 ? 0.75 : index === 2 ? 0.5 : 0,
            },
            opacity: {
              delay: index === 1 ? 1 : index === 0 ? 0.75 : index === 2 ? 0.5 : 0,
            },
            height: {
              delay: index === 1 ? 1 : index === 0 ? 0.75 : index === 2 ? 0.5 : 0,
            },
            duration: 0.71,
            ease: 'easeInOut',
          },
        },
      };
    };
  }, []);
  

  const products = [
    {
      image: image,
      name: 'the striker',
      description: 'the quantum realm is strong',
    },
    {
      image: image,
      name: 'Abu fire',
      description: 'Aboubacar flexing with the fire',
    },
    {
      image: image,
      name: 'Abu flex',
      description: 'Flexing at glenbourne',
    },
    {
      image: image,
      name: 'Vegeta',
      description: 'Be a proud warrior like Vegeta',
    },
    {
        image:image,
        name:'Goku, Vegeta and Broly',
        description:'Legendary Super Saiyans'
    },
    {
        image:image,
        name:'Majin Vegeta',
        description:'Embrace your dark side!'
    }
  ];

  useEffect(() => {
    // Find the index of the centered image based on the left position being '50%'
    const centeredIndex = positions.findIndex(
      (position) => position.left === '50%'
    );

    // Log the src of the centered image
    console.log('Centered Image Src:', products[centeredIndex].image);
  }, [positions, products, currentPosition]);

  const shiftPositions = (direction) => {
    // Shift all positions circularly based on the specified direction
    const shiftedPositions = positions.map((position, index) => {
      const newIndex =
        direction === 'right'
          ? (index - 1 + positions.length) % positions.length
          : (index + 1) % positions.length;
      return positions[newIndex];
    });

    // Update the positions array
    setCurrentPosition((prevPosition) =>
      direction === 'right'
        ? (prevPosition + 1) % positions.length
        : prevPosition === 0
        ? positions.length - 1
        : prevPosition - 1
    );
    setButtonClicked(direction);
    setPositions(shiftedPositions
        );
  };

  const handlePrevClick = () => {
    setCurrentPosition((prevPosition) =>
      prevPosition === 0 ? positions.length - 1 : prevPosition - 1
    );
    shiftPositions('left');
    setCarouselSwiped(true)
  };

  const handleNextClick = () => {
    setCurrentPosition((prevPosition) =>
      (prevPosition + 1) % positions.length
    );
    shiftPositions('right');
    setCarouselSwiped(true)
  };

  const productStyles = products.map((product, index) => {
    const position = positions[(currentPosition + index) % positions.length];
    const isCentered = position.left === '50%';
    const zIndex = isCentered ? 1 : 0; // Set zIndex to 1 if the product is centered, otherwise 0
  
    return {
      left: position.left,
      transform: `${position.transform} ${isCentered ? 'scale(1.2)' : 'scale(1)'}`,
      filter: isCentered ? 'none' : 'brightness(55%)',
      transition: `left 0.3s ease-in, transform 0.3s ease-in`,
      opacity: isCentered && inView ? 1 : 0,
      zIndex: zIndex, // Set zIndex dynamically
    };
  });

  const handleTouchStart = (e) => {
    // Record the initial touch position
    setTouchStartX(e.touches[0].clientX);
};

// Function to handle touch move
const handleTouchMove = (e) => {
    // Calculate the distance moved
    const touchMoveX = e.touches[0].clientX;
    const distance = touchMoveX - touchStartX;

    // Set the swipe direction based on the distance moved
    if (Math.abs(distance) >= swipeThreshold) {
        setSwipeDirection(distance > 0 ? 'right' : 'left');
    }
};

// Function to handle touch end
const handleTouchEnd = () => {
    // Reset swipe direction and touch start position
    setSwipeDirection(null);
    setTouchStartX(null);
};

// Attach touch event listeners
useEffect(() => {
    const carouselElement = document.getElementById('area-info');
    carouselElement.addEventListener('touchstart', handleTouchStart);
    carouselElement.addEventListener('touchmove', handleTouchMove);
    carouselElement.addEventListener('touchend', handleTouchEnd);

    // Clean up event listeners
    return () => {
        carouselElement.removeEventListener('touchstart', handleTouchStart);
        carouselElement.removeEventListener('touchmove', handleTouchMove);
        carouselElement.removeEventListener('touchend', handleTouchEnd);
    };
}, []);
  

  return (
    <div className="product-carousel-container" ref={ref}
    id='area-info'>
      <div className="products-row">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className={`product ${horizontal ? 'horizontal' : ''}`}
            // animate={controls}
            // initial="hidden"
            // variants={variants}
        
            style={{
              left: productStyles[index].left,
              transform: productStyles[index].transform,
              filter: productStyles[index].filter,
              transition: 'left 0.3s ease-in, transform 0.3s ease-in',
              zIndex: productStyles[index].zIndex, 
             
            }}
          >
            <motion.div className="image-button-container"
             
>
              <button
                className="carousel-button"
                onClick={handleNextClick}
                style={{

                  opacity: productStyles[index].opacity,
                  transition:productStyles[index].transition
                }}
              >
                <FiChevronLeft />
              </button>
              <motion.img
              ref={ref}
                  variants={combinedVariants(index)}
                  initial="hidden"
                  animate={controls}
  src={product.image}
  alt={`Product ${index + 1}`}
  key={index}
 
/>
              <button
              
                className="carousel-button right"
             
                onClick={handlePrevClick}
                style={{
                  opacity: productStyles[index].opacity,
                  transition:productStyles[index].transition
                }}
              >
                <FiChevronRight />
              </button>
            </motion.div>
            <div
              style={{
                opacity:
                  positions[(currentPosition + index) % positions.length]
                    .left !== '50%'
                    ? '0'
                    : '1',
                transition: 'opacity 0.5s ease 0.5s',
              }}
            ></div>
          </motion.div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default ProductCarousel;