import React from "react";



const Amenities = ({name,price, address}) => {

    return (
        <section className="amenities-container">
                <h1>
                    {name}
                </h1>
                <h3>{address}</h3>
                <h2><strong>For sale:</strong></h2>
        </section>
    )
}