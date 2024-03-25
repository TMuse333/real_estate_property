import React from "react";



const Amenities = ({name,price, address, amenities:{
name,
image
}, }) => {

    return (
        <section className="amenities-container">
                <h1>
                    {name}
                </h1>
                <h3>{address}</h3>
                <h2><strong>For sale:</strong>
                {price}</h2>

                <div className="amenities-grid">
                    {amenities.map((amenitiy, index) => (
                        <div className="amenity">
                            <img 
                            src={amenity.image}
                            />
                            <p>{amenity.name}</p>
                            </div>
                    ))}
                </div>


        </section>
    )
}