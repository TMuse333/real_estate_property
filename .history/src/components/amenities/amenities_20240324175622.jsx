import React from "react";



const Amenities = ({name,price, address}) => {

    return (
        <section className="amenities-container">
                <h2>
                    {name}
                </h2>
                <h3>{address}</h3>
        </section>
    )
}