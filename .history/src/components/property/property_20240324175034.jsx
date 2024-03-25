import React from "react";

const Property = ({heroImage,price,
    mainDescription}) => {


    return (
        <section className="property-container">
            <div className="property-herobanner">

       
            <img className="property-hero"
            src={heroImage}
            />

           
                 </div>
                 <h1>Property Description</h1>
                 <p>
                    {mainDescription}
                 </p>
        </section>
    )
}

export default Property