import React, { useState, useEffect } from "react";
import { useRouteContext } from "../../context/context";

const CreatePage = () => {
    const { addRoute, routes } = useRouteContext();
    const [pageText, setPageText] = useState("");
    const [pathName, setPathName] = useState("");

    // Function to handle submission of page text and path name
    const handleSubmit = () => {
        // Check if pageText and pathName are not empty
       setPageText(pageText)
    };

    // Function to create the page
    const createPage = (text, path) => {
        // Create the new route object
        const newRoute = {
            path: `/${path}`, // Assuming path starts with '/'
            element: <div>{text}</div> // Display page text
        };

        // Add the new route
        addRoute(newRoute);
    };

    // useEffect to call createPage when pageText and pathName are set
    useEffect(() => {
        if (pageText && pathName) {
            createPage(pageText, pathName);
        }
    }, [pageText, pathName]);

    return (
        <div className="create-page-container">
            <h1>Create Your Page Here</h1>
            <input
                type="text"
                placeholder="Enter Page Text"
                value={pageText}
                onChange={(e) => setPageText(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter Path Name"
                value={pathName}
                onChange={(e) => setPathName(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default CreatePage;
