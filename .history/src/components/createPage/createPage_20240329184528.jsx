import React, { useState } from "react";
import { useRouteContext } from "../../context/context";

const CreatePage = () => {
    const { addRoute } = useRouteContext();

    const [pageText, setPageText] = useState("");
    const [pathName, setPathName] = useState("");

    const handleCreatePage = () => {
        // Create the new route object
        const newRoute = {
            path: `/${pathName}`, // Assuming path starts with '/'
            element: <div>{pageText}</div> // Display page text
        };

        // Add the new route
        addRoute(newRoute);
    };

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
            <button onClick={handleCreatePage}>Create Page</button>
        </div>
    );
};

export default CreatePage;
