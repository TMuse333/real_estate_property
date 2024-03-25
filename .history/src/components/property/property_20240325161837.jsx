import React from "react";
import Features from "../features/features";

const Property = ({heroImage,price,
    mainDescription,openingDate,closingDate}) => {


    return (
        <section className="property-container">
            <div className="property-herobanner">

       
            <img className="property-hero"
            src={heroImage}
            />
 <h2><strong>For Sale:</strong> {price}</h2>

 <p className="open-house-hours"> 
    Open House - {openingDate} - {closingDate}
 </p>
           
                 </div>
                 <h1>Property Description</h1>
                 <p>
                    {mainDescription}
                 </p>

                 <Features/>

                 <Images


        </section>
    )
}

export default Property