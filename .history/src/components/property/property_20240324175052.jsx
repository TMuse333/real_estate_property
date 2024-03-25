import React from "react";

const Property = ({heroImage,price,
    mainDescription}) => {


    return (
        <section className="property-container">
            <div className="property-herobanner">

       
            <img className="property-hero"
            src={heroImage}
            />
 <h2><strong>For Sale:</strong> {price}</h2>

 <p className=""></p>
           
                 </div>
                 <h1>Property Description</h1>
                 <p>
                    {mainDescription}
                 </p>
        </section>
    )
}

export default Property