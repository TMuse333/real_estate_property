import React, { useState, useEffect } from "react";
import { useRouteContext } from "../../context/context";

const CreatePage = () => {
    const { addRoute, routes } = useRouteContext();
    const [pageText, setPageText] = useState("");
    const [pathName, setPathName] = useState("");
    const [submittedPageText, setSubmittedPageText] = useState("");
    const [submittedPathName, setSubmittedPathName] = useState("");

    // Function to handle submission of page text and path name
    const handleSubmit = () => {
        // Check if pageText and pathName are not empty
        if (pageText && pathName) {
            // Save submitted values
            setSubmittedPageText(pageText);
            setSubmittedPathName(pathName);
            console.log('pages submitted')
        }
    };

    // useEffect to create the page when submitted values are set
    useEffect(() => {
        console.log('creating page?')
        if (submittedPageText && submittedPathName) {
            // Create the new route object
            const newRoute = {
                path: `/${submittedPathName}`, // Assuming path starts with '/'
                element: <div>{submittedPageText}</div> // Display page text
            };

            // Add the new route
            addRoute(newRoute);
        }
    }, [submittedPageText, submittedPathName]);

    useEffect(()=>{
        console.log('routes updated')
    })

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
