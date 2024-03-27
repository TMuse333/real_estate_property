import React from "react";
import Testimonials from "../testimonials/testimonials";
import tom from '../../media/tom-header.png'
import './profile.css'
import img from '../../media/place-holder.jpg'
const Profile = () => {

    const socials = [
        {
            image:img
        },
    ]

    return (
        <section className="profile-container">
            <img src={tom}
            className='profile-image'/>
            <h2>Re/max</h2>
            <h3>Thomas Musial</h3>
            <p>A real one</p>
            <p>REL#1234567890</p>




<Testimonials/>
        </section>
    )
}

export default Profile