import React from "react";
import img from '../../media/place-holder.jpg';


const Documents = () => {

    const documents = [
        {
            name:'Document 1',
            image:img,
            url:''
        },
        {
            name:'Document 1',
            image:img,
            url:''
        },
        {
            name:'Document 1',
            image:img,
            url:''
        },
        {
            name:'Document 1',
            image:img,
            url:''
        }
    ]

    return (
        <section className="documents">
            <h1>Documents</h1>
            <p>Here are some documents you will
                need for your dream home.
            </p>
            <div className="documents-grid">
                {documents.map((document, index) => (
                    <div className=""
                ))}
            </div>
        </section>
    )
}

export default Documents