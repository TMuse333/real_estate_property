import React from "react";
import ImageSlider from "../carousel2/carosuel2";
import Features from "../features/features";
import img from '../../media/place-holder.jpg'

const Property = ({heroImage,price,
    mainDescription,openingDate,closingDate}) => {


    return (
        <section className="property-container">
            <div className="property-herobanner">

       
            <img className="property-hero"
            src={heroImage || img}
            />
 <h2><strong>For Sale:</strong> {price}</h2>

 <p className="open-house-hours"> 
    Open House - {openingDate || 'march 24th '} - {closingDate}
 </p>
           
                 </div>
                 <h1>Property Description</h1>
                 <p>
                    {mainDescription}
                 </p>

                 <Features/>

                 <ImageSlider/>


        </section>
    )
}

export default Property