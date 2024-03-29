import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {

    return (
        <div className="homepage-container">
            <h1>Create a new page here</h1>
            <button style={{
                alignItems:'center'
            }}>
                Create Page
            </button>
            <Link to='property'>

          
            <button>
                View current property
            </button>
            </Link>
        </div>
    )
}

export default Homepage