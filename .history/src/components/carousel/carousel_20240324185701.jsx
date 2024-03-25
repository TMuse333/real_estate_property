import React, { useState, useEffect, useRef } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import './carousel.css'

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Link } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";


import lift1 from '../../media/mobenz-squat.mp4'
import lift2 from '../../media/mobenz-squat2.mp4'
import lift3 from '../../media/mobenz-deadlift.mp4'

const WorkCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const images = [
    {
      original:lift1,
      thumbnail:lift1
    },
    {
      original: lift2,
      thumbnail: lift2,
    },
    {
      original: lift3,
      thumbnail: lift3,
    },
  ];

  const handleSlide = (index) => {
    setCurrentIndex(index);
    setPlaying(false); // Pause video when sliding to a new image
  };

  const handleVideoPause = () => {
    setPlaying(false);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // When 50% of the video is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setPlaying(true);
        } else {
          setPlaying(false);
        }
      });
    }, options);

    // Start observing the video element
    observer.observe(videoRef.current);

    return () => {
      observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <div className="work-container">
      <h2 className="title-text bold-700">I am Strong Man</h2>
      <p className="description-text">
        Here are some of my best lifts
      </p>

      <div className="image-text-box work">
        <ImageGallery
          items={images}
          showThumbnails={false}
          showPlayButton={false}
          showFullscreenButton={false}
          onSlide={handleSlide} // This callback is triggered when the slide changes
        />

        <div className="work-description">
          <AnimatePresence>
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.7 } }}
              exit={{ transition: 'all 0.3s ease-in', opacity: 0 }}
              className="description-text"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ad porro amet aliquid pariatur maxime dolorem voluptatem facere voluptatum et.
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Video element */}
        <video ref={videoRef} src={images[currentIndex].original} autoPlay={playing} controls={false} style={{ display: 'none' }} />
      </div>
    </div>
  );
};

export default WorkCarousel;