import React from "react";
import "./Business.css";

function Business(props) {
    return(
        <div className="Business">
            <a href={props.business.url} target='_blank' rel="noopener noreferrer">
                <div className="image-container">
                        <img src={props.business.imageSrc} alt=''/>
                </div>
            <h2>{props.business.name}</h2>
            </a>
            <div className="Business-information">
                <a 
                href={`https://www.google.com/maps/?q=${props.business.coordinates.latitude},${props.business.coordinates.longitude}`} 
                target='_blank' rel="noopener noreferrer">
                    <div className="Business-address">
                        <p>{props.business.address}</p>
                        <p>{props.business.city}</p>
                        <p>{props.business.state} {props.business.zipCode}</p>
                    </div>
                </a>
                <div className="Business-reviews">
                    <h3>{props.business.category}</h3>
                    <h3 className="rating">{props.business.rating}</h3>
                    <p>{props.business.reviewCount}</p>
                </div>
            </div>
    </div>
    );
}

export default Business