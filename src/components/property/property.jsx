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
import { useEffect } from "react";
import ImageUploader from "../imageUploader/imageUploader";
import { useAppContext } from "../../context/context";
import { usePropertyContext } from "../../context/propertyContext";
import { useState } from "react";
import { useImageContext } from "../../context/imageContext";





const Property = ({
  documents,carouselImages1,
  carouselImages2,
  sliderImages
  ,propertyVideo


  }) => {


    const {
        propertyTitle,
        setPropertyTitle,
        propertyLocation,
        setPropertyLocation,
        propertyPrice,
        setPropertyPrice,
        propertyOpeningDate,
        setPropertyOpeningDate,
        propertyClosingDate,
        setPropertyClosingDate,
        propertyDescription1,
        setPropertyDescription1,
        propertyTitle2,
        setPropertyTitle2,
        propertyDescription2,
        setPropertyDescription2,
        propertyTitle3,
        setPropertyTitle3,
        propertyDescription3,
        setPropertyDescription3,
        handleInputChange
      } = usePropertyContext() 

    const {createPageClicked, setCreatePageClicked,
    inputVariant, setInputVariant} = useAppContext()


const {setPropertyHerobanner, propertyHerobanner } = useImageContext()


    const handleCreatePage = () => {
       setInputVariant(false)
    }



 
    return (

        <>

        {!inputVariant ? (

     


        <section className="property-container ">
            <Navbar/>
           
            <div className="property-herobanner"
            id='home'>

                <h1>{propertyTitle}</h1>
                <h2>{propertyLocation}</h2>

       
            <img className="property-hero"
            src={propertyHerobanner || img}
            />
 <h2><strong>For Sale:</strong> {propertyPrice || '1,000,000$'}</h2>

 <p className="open-house-hours"> 
    Open House - {propertyOpeningDate || 'march 24th 3pm'} - {propertyClosingDate || 'march 25th 5pm'}
 </p>
           
                 </div>
                 <h1 id='description'>{propertyTitle}</h1>
                 <p className="main-description-p">
                    {propertyDescription1 ||
                    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas et ad, similique nobis molestias ullam alias? Beatae suscipit expedita nobis nulla inventore incidunt eaque molestias ipsum repudiandae reprehenderit. Asperiores, laborum?'}
                 </p>

                 <Features
                //  {...featureAttributes}
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


                 <h1>{propertyTitle2}</h1>
                 <p className="main-description-p">{propertyDescription2 || 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, quis dolorem illo, quasi debitis dolore exercitationem reprehenderit culpa impedit officiis explicabo unde, ab fugiat. Maxime reiciendis quae possimus voluptates repellat facilis eum delectus libero magni quod vero modi iusto officiis alias, excepturi, odio animi voluptatum nulla dolorum illo ratione unde.'}</p>
                </section>

               

                <ProductCarousel
                horizontal={true}
                images={carouselImages1}
                />

<section className="title-paragraph-container">


<h1>{propertyTitle3}</h1>
<p className="main-description-p">{propertyDescription3 || 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, quis dolorem illo, quasi debitis dolore exercitationem reprehenderit culpa impedit officiis explicabo unde, ab fugiat. Maxime reiciendis quae possimus voluptates repellat facilis eum delectus libero magni quod vero modi iusto officiis alias, excepturi, odio animi voluptatum nulla dolorum illo ratione unde.'}</p>
</section>


<ProductCarousel
horizontal={true}
images={carouselImages2}/>

<Documents
{...documents}/>

<GoogleMaps/>

<HydroList

/>

<Profile
id='profile'



// profile={profile}
/>

<Footer/>



        </section>

) : (
    
    <section className="property-container ">
    <Navbar/>

    <button onClick={handleCreatePage}
     className="create-page-button">
        createPage
    </button>

    
   
    <div className="property-herobanner"
    id='home'>

        <div className="input-stack">

   

        <input className="h1-input input"
        onChange={(e)=>handleInputChange(e.target.value,setPropertyTitle)}
        placeholder="Enter title here"></input>
       <input  onChange={(e)=>handleInputChange(e.target.value,setPropertyLocation)}
       className="h2-input input"
       placeholder="Enter Location Here">

       </input>
       </div>


 <ImageUploader
 className='property-hero'
 setterFunction={setPropertyHerobanner}
 />
 <div className="input-stack">
<input className="h2-input input"
 onChange={(e)=>handleInputChange(e.target.value,setPropertyPrice)}
placeholder="Enter Price Here">

</input>



<div>



<input className="p-input input"
placeholder=" Enter starting date of open house"
onChange={(e)=>handleInputChange(e.target.value,setPropertyOpeningDate)}
>
   
</input>
<input className="p-input input"
placeholder=" Enter end  time and date of open house"
onChange={(e)=>handleInputChange(e.target.value,setPropertyClosingDate)}
>
   
</input>
</div>
</div>
   
         </div>
         <h1 id='description'>Property Description</h1>
        <textarea className="description-input input"
        onChange={(e)=>handleInputChange(e.target.value,setPropertyDescription1)}
        placeholder="enter a description of your property here">

        </textarea>

         <Features
         inputVariant={inputVariant}
        //  {...featureAttributes}
         />

         <ImageUploader
         multiple={true}
         />

         {/* <ImageSlider
         images={sliderImages}/> */}

         <h1>Video</h1>

         {/* <img className="property-video"
          src={ propertyVideo || img}
          id='video'
         /> */}

         <ImageUploader/>

         <div className="property-images-grid">
         <ImageUploader/>
            <ImageUploader/>
            <ImageUploader/>
          <ImageUploader/>
         </div>

        <section className="title-paragraph-container"
        id='more-info'>


        <input className="h1-input input"
        placeholder="enter title"
        onChange={(e)=>handleInputChange(e.target.value,setPropertyTitle2)}>
        </input>

  
         <textarea className="description-input input"
         onChange={(e)=>handleInputChange(e.target.value,setPropertyDescription2)}
        placeholder="enter a description of your property here">

        </textarea>
        
        </section>

       <button className="create-page-button"
       onClick={handleCreatePage}>
        Create page

       </button>

        <ProductCarousel
        horizontal={true}
        images={carouselImages1}
        />

<section className="title-paragraph-container">


<input className="h1-input input"
placeholder=" your title here"
onChange={(e)=>handleInputChange(e.target.value,setPropertyTitle3)}>

</input>
<textarea className="description-input input"
        placeholder="enter a description of your property here"
        onChange={(e)=>handleInputChange(e.target.value,setPropertyDescription3)}>

        </textarea>
</section>


<ProductCarousel
horizontal={true}
images={carouselImages2}/>

<Documents
{...documents}
inputVariant={inputVariant}/>

<GoogleMaps/>

<HydroList
inputVariant={inputVariant}
/>

<Profile
id='profile'
inputVariant={inputVariant}

// profile={profile}
/>

<Footer/>



</section>
)}

        </>
    )
}

export default Property