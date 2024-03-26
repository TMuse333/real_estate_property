import React from "react";
import ImageSlider from "../carousel2/carosuel2";
import Features from "../features/features";
import img from '../../media/place-holder.jpg'

import kakashi from '../../media/kakashi_susanoo.jpg';
import sasuke from '../../media/sasuke.jpg';
import vegeta from '../../media/majin-vegeta.png';

const Property = ({heroImage,price,
    mainDescription,openingDate,closingDate}) => {

  const images = [
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
    return (
        <section className="property-container">
            <div className="property-herobanner">

       
            <img className="property-hero"
            src={heroImage || img}
            />
 <h2><strong>For Sale:</strong> {price || '1,000,000$'}</h2>

 <p className="open-house-hours"> 
    Open House - {openingDate || 'march 24th 3pm'} - {closingDate || 'march 25th 5pm'}
 </p>
           
                 </div>
                 <h1>Property Description</h1>
                 <p>
                    {mainDescription ||
                    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas et ad, similique nobis molestias ullam alias? Beatae suscipit expedita nobis nulla inventore incidunt eaque molestias ipsum repudiandae reprehenderit. Asperiores, laborum?'}
                 </p>

                 <Features/>

                 <ImageSlider
                 images={images}/>


        </section>
    )
}

export default Property