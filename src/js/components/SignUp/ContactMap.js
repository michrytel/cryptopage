import React from "react";
import {Map, GoogleApiWrapper, Marker} from "google-maps-react";
const ContactMap = props => {
    const mapStyles = {
        width: "100%",
        minHeight: "200px"
    };
    return (
            <Map className="map"
                google={props.google}
                zoom={10}
                style={mapStyles}
                 initialCenter={{lat: "52.40692", lng: "16.92993"}}>
                <Marker position={{lat: "52.40692", lng: "16.92993"}}/>
            </Map>
    );
};
export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_API_KEY)
})(ContactMap)


