import React from "react";
import {useRoute}

const CreatePage = () => {

    const {addRoute} = useRouterContext()



    return (
        <div className="create-page-container">
            <h1>You can create your page  here</h1>
        </div>
    )
}


export default CreatePage