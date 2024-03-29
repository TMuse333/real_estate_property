import React from "react";
import { Link } from "react-router-dom";
import { useRouteContext } from '../../context/context'; // Import useRouteContext hook

const Homepage = () => {
    // const { addNewRoute } = useRouteContext(); 
    // Access addNewRoute function from RouteContext

    const handleCreatePage = () => {
        // Call addNewRoute function to add a new route for NewPage component
        addNewRoute({ path: '/new-page', element: <NewPage /> });
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
