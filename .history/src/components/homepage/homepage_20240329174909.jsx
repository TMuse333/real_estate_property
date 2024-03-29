import React from "react";
import { Link } from "react-router-dom";
import { useRouteContext } from '../../context/context'; // Import useRouteContext hook
import NewPage from "../newPage/newPage";
const Homepage = () => {
    const { routes, addNewRoute } = useRouteContext(); 
    // Access routes and addNewRoute function from RouteContext

    const handleCreatePage = () => {
        // Call addNewRoute function to add a new route for NewPage component
        addNewRoute({ path: '/new-page', element: <NewPage /> });
        console.log("New page created!"); // Log a message indicating successful creation
    };

    // Function to log all current routes
    const logRoutes = () => {
        console.log("Current Routes:", routes);
    };

    return (
        <div className="homepage-container">
            <h1>Create a new page here</h1>
            <button style={{ alignItems: 'center' }}
             onClick={handleCreatePage}>
                Create Page
            </button>
            <Link to='/property'>
                <button>
                    View current property
                </button>
            </Link>
            <Link to='/new-page'>
                <button>
                    new page!
                </button>
            </Link>
            <button onClick={logRoutes}>Log Current Routes</button>
        </div>
    );
};

export default Homepage;
