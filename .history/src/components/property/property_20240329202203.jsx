import React from "react";
import ImageSlider from "../carousel2/carosuel2";
import Features from "../features/features";
import img from '../../media/place-holder.jpg'

import kakashi from '../../media/kakashi_susanoo.jpg';
import sasuke from '../../media/sasuke.jpg';
import vegeta from '../../media/majin-vegeta.png';

import './property.css'
import ProductCarousel from "../productCarousel/productCarousel";
import Documents from "../documents/documents";
import GoogleMaps from "../maps/googleMaps";
import Testimonials from "../testimonials/testimonials";
import Profile from "../realtorProfile/profile";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import HydroList from "../hydrolist/hydrolist";
import { hydroText } from "../../data/data";

import { RouteProvider, useRouteContext } from "../../context/context";
import { useEffect } from "react";



const Property = ({propertyAttributes,
  featureAttributes, amenitiesAttributes,
  sliderImages, carouselImages1,
  carouselImages2,
  documents,
  factsList,
  profile


  }) => {


      const {routes} = useRouteContext()



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
            <Navbar/>
           
            <div className="property-herobanner"
            id='home'>

                <h1>A lovely Rooftight Home</h1>
                <h2>Bedford, Nova Scotia</h2>

       
            <img className="property-hero"
            src={property || img}
            />
 <h2><strong>For Sale:</strong> {price || '1,000,000$'}</h2>

 <p className="open-house-hours"> 
    Open House - {openingDate || 'march 24th 3pm'} - {closingDate || 'march 25th 5pm'}
 </p>
           
                 </div>
                 <h1 id='description'>Property Description</h1>
                 <p className="main-description-p">
                    {mainDescription ||
                    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas et ad, similique nobis molestias ullam alias? Beatae suscipit expedita nobis nulla inventore incidunt eaque molestias ipsum repudiandae reprehenderit. Asperiores, laborum?'}
                 </p>

                 <Features/>

                 <ImageSlider
                 images={images}/>

                 <h1>Video</h1>

                 <img className="property-video"
                  src={img}
                  id='video'
                 />

                 <div className="property-images-grid">
                    <img src={img}/>
                    <img src={img}/>
                    <img src={img}/>
                    <img src={img}/>
                 </div>

                <section className="title-paragraph-container"
                id='more-info'>


                 <h1>Title Here</h1>
                 <p className="main-description-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, quis dolorem illo, quasi debitis dolore exercitationem reprehenderit culpa impedit officiis explicabo unde, ab fugiat. Maxime reiciendis quae possimus voluptates repellat facilis eum delectus libero magni quod vero modi iusto officiis alias, excepturi, odio animi voluptatum nulla dolorum illo ratione unde.</p>
                </section>

               

                <ProductCarousel
                horizontal={true}/>

<section className="title-paragraph-container">


<h1>Title Here</h1>
<p className="main-description-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, quis dolorem illo, quasi debitis dolore exercitationem reprehenderit culpa impedit officiis explicabo unde, ab fugiat. Maxime reiciendis quae possimus voluptates repellat facilis eum delectus libero magni quod vero modi iusto officiis alias, excepturi, odio animi voluptatum nulla dolorum illo ratione unde.</p>
</section>


<ProductCarousel
horizontal={true}/>

<Documents/>

<GoogleMaps/>

<HydroList
// absolute={true}
text={hydroText}/>

<Profile
id='profile'
profile={profile}/>

<Footer/>



        </section>
    )
}

export default Property