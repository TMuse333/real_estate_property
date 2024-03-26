import React from "react";
import image from '../../media/place-holder.jpg';


const FloorPlans = () => {

    return (
        <section className="floorplans-contanier">
            <div><button>
                Ground Floor</button>
                <button>
                    Second Floor</button></div>
                    <img src={image}
                    />
        </section>
    )
}