import React from 'react';
import logo from "../../logo.svg";

const Top = (props) => {

    const { current, location } = props;
    return (
        <div className="top">
            <img src={logo} alt="Clima principal" className="image" />
            <p className="temp">{current.temp_c}</p>
            <h2 className="city">{location.name}, {location.region}, {location.country}</h2>
            <div className="feelslike">ST: {current.feelslike_c} °C, H: {current.humedity} %</div>
        </div>
    )
}


export default Top;