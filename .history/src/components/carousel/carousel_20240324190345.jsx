import React, { useState, useEffect, useRef } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import './carousel.css'

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import kakashi from '../../media/kakashi_susanoo.jpg';
import sasuke from '../../media/sasuke.jpg';
import vegeta from '../../media/majin-vegeta.png';


const WorkCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const images = [
    {
      original:kakashi,
      thumbnail:kakashi
    },
    {
      original: sasuke,
      thumbnail: sasuke,
    },
    {
      original: vegeta,
      thumbnail: vegeta,
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
      <h2 className="title-text bold-700">{images.length</h2>
      <p className="description-text">
        Here are some of my best lifts
      </p>

      <div className="">
        <ImageGallery
          items={images}
          showThumbnails={false}
          showPlayButton={false}
          showFullscreenButton={false}
          onSlide={handleSlide} // This callback is triggered when the slide changes
        />

    

        {/* Video element */}
        <video ref={videoRef} src={images[currentIndex].original} autoPlay={playing} controls={false} style={{ display: 'none' }} />
      </div>
    </div>
  );
};

export default WorkCarousel;