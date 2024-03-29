import React from "react";
import { useRouteContext } from "../../context/context";

const CreatePage = () => {

    const {addRoute} = useRouteContext()



    return (
        <div className="create-page-container">
            <h1>You can create your page  here</h1>
        </div>
    )
}


export default CreatePage