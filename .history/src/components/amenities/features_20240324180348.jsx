import React from "react";



const Features = ({name,price, address, features:{
name,
image
}, amenities }) => {

    return (
        <section className="amenities-container">
                <h1>
                    {name}
                </h1>
                <h3>{address}</h3>
                <h2><strong>For sale:</strong>
                {price}</h2>

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
                            <p></p>
                    ))}
                </div>


        </section>
    )
}

export default Features