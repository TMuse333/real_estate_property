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



const Property = ({propertyHerobanner,
  propertyPrice, propertyOpeningDate,
  propertyClosingDate,
  propertyMainDescription,
  propertyDescription2,
  propertyDescription3,
  propertyVideo,

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


        <section className="property-container ">
            <Navbar/>
           
            <div className="property-herobanner"
            id='home'>

                <h1>A lovely Rooftight Home</h1>
                <h2>Bedford, Nova Scotia</h2>

       
            <img className="property-hero"
            src={propertyHerobanner || img}
            />
 <h2><strong>For Sale:</strong> {propertyPrice || '1,000,000$'}</h2>

 <p className="open-house-hours"> 
    Open House - {propertyOpeningDate || 'march 24th 3pm'} - {propertyClosingDate || 'march 25th 5pm'}
 </p>
           
                 </div>
                 <h1 id='description'>Property Description</h1>
                 <p className="main-description-p">
                    {propertyMainDescription ||
                    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas et ad, similique nobis molestias ullam alias? Beatae suscipit expedita nobis nulla inventore incidunt eaque molestias ipsum repudiandae reprehenderit. Asperiores, laborum?'}
                 </p>

                 <Features
                 {...featureAttributes}
                 />

                 <ImageSlider
                 images={sliderImages}/>

                 <h1>Video</h1>

                 <img className="property-video"
                  src={ propertyVideo || img}
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
                 <p className="main-description-p">{propertyDescription2 || 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, quis dolorem illo, quasi debitis dolore exercitationem reprehenderit culpa impedit officiis explicabo unde, ab fugiat. Maxime reiciendis quae possimus voluptates repellat facilis eum delectus libero magni quod vero modi iusto officiis alias, excepturi, odio animi voluptatum nulla dolorum illo ratione unde.'}</p>
                </section>

               

                <ProductCarousel
                horizontal={true}
                images={carouselImages1}
                />

<section className="title-paragraph-container">


<h1>Title Here</h1>
<p className="main-description-p">{propertyDescription3 || 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, quis dolorem illo, quasi debitis dolore exercitationem reprehenderit culpa impedit officiis explicabo unde, ab fugiat. Maxime reiciendis quae possimus voluptates repellat facilis eum delectus libero magni quod vero modi iusto officiis alias, excepturi, odio animi voluptatum nulla dolorum illo ratione unde.'}</p>
</section>


<ProductCarousel
horizontal={true}/>

<Documents
{...documents}/>

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