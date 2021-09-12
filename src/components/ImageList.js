import React from "react";
import '../App.css';
import ImageCard from "./imageCard";

const ImageList = (props) => {

    const images = props.image.map((elements) => {
         return <div>
            <ImageCard key={elements.id} image={elements} />
        </div>
    })
    return (
        <>
            <div className="image-list">{images}</div>
        </>
    )
}

export default ImageList;