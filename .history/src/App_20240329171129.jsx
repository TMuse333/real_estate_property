import React from "react";
import { Link, useHistory } from "react-router-dom";

const Homepage = () => {
    const history = useHistory();

    const handleCreatePage = () => {
        // Navigate to the new route '/new-page' when the button is clicked
        history.push('/new-page');
    };

    return (
        <div className="homepage-container">
            <h1>Create a new page here</h1>
            <button style={{ alignItems: 'center' }} onClick={handleCreatePage}>
                Create Page
            </button>
            <Link to='/property'>
                <button>
                    View current property
                </button>
            </Link>
        </div>
    );
};

export default Homepage;
