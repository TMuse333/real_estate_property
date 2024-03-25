import React from "react";

const Property = ({heroImage,price}) => {


    return (
        <section className="property-container">
            <div className="property-herobanner">

       
            <img className="property-hero"
            src={heroImage}
            />

            <h2><strong>For Sale:</strong> {price}</h2>
                 </div>
        </section>
    )
}

export default Property