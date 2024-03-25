import React from "react";
import 


const Features = ({name,price, address, features:{
featureName,
image
}, amenities }) => {

    return (
        <section className="amenities-container">
                <h1>
                    {name || 'property name'}
                </h1>
                <h3>{address || 'adress name'}</h3>
                <h2><strong>For sale:</strong>
                {price || '1,000, 000'}</h2>

                <div className="amenities-grid">
                    {features.map((feature, index) => (
                        <div className="amenity">
                            <img 
                            src={feature.image}
                            />
                            <p>{feature.name}</p>
                            </div>
                    ))}
                </div>

                <div className="amenities-box">
                    <h2>Amenities</h2>
                    {amenitites.map((amenity, index) => (
                        <div className="amenity">
                            <img src=''
                            />
                            <p>{amenity}</p>
                            </div>
                    ))}
                </div>


        </section>
    )
}

export default Features