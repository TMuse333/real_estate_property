import React from "react";
import ImageSlider from "../carousel2/carosuel2";
import Features from "../features/features";
import img from '../../media/place-holder.jpg'

import kakashi from '../../media/kakashi_susanoo.jpg';
import sasuke from '../../media/sasuke.jpg';
import vegeta from '../../media/majin-vegeta.png';

import './property.css'
import ProductCarousel from "../productCarousel/productCarousel";

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

                 <h1>Video</h1>

                 <img className="property-video"
                  src={img}
                 />

                 <div className="property-images-grid">
                    <img src={img}/>
                    <img src={img}/>
                    <img src={img}/>
                    <img src={img}/>
                 </div>

                <section className="title-paragraph-container">


                 <h1>Title Here</h1>
                 <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, quis dolorem illo, quasi debitis dolore exercitationem reprehenderit culpa impedit officiis explicabo unde, ab fugiat. Maxime reiciendis quae possimus voluptates repellat facilis eum delectus libero magni quod vero modi iusto officiis alias, excepturi, odio animi voluptatum nulla dolorum illo ratione unde.</p>
                </section>

               

                <ProductCarousel
                horizontal={true}/>

<section className="title-paragraph-container">


<h1>Title Here</h1>
<p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, quis dolorem illo, quasi debitis dolore exercitationem reprehenderit culpa impedit officiis explicabo unde, ab fugiat. Maxime reiciendis quae possimus voluptates repellat facilis eum delectus libero magni quod vero modi iusto officiis alias, excepturi, odio animi voluptatum nulla dolorum illo ratione unde.</p>
</section>


<ProductCarousel
horizontal={true}/>

        </section>
    )
}

export default Property