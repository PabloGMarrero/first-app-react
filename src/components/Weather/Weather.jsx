import React, { Component } from 'react';

import Top from "../Top/top"
import Bottom from "../Bottom/bottom"

class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clima: {},
            isLoaded: false
        }
    }



    componentDidMount() {
        fetch(`https://api.apixu.com/v1/forecast.json?key=${
            process.env.REACT_APP_API_KEY
            }&q=Buenos+Aires&days=6`)
            .then(response => response.json())
            .then(jsonData => {
                this.setState({ clima: jsonData, isLoaded: true });
            })
    }


    render() {
        const { location, current, forecast } = this.state.clima;

        return this.state.isLoaded ? (

            <div className="App">
                <div className="container">
                    <Top current={current} location={location}>Hola</Top>
                    <Bottom forecast={forecast}></Bottom>
                    
                </div>
            </div>
        ) : (
                <div className="App">Cargando...</div>
            )

    }
}

export default Weather;