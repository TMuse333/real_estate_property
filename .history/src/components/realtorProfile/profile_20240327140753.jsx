import React from "react";
import Testimonials from "../testimonials/testimonials";
import tom from '../../media/tom-header.png'

const Profile = () => {

    return (
        <section className="profile-container">
            <img src={tom}/>
            <h2>Re/max</h2>
            <h3>Thomas Musial</h3>
            <p>A real one</p>



<Testimonials/>
        </section>
    )
}

export default Profile