import React, { Component } from 'react';
import logo from "../../logo.svg";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clima: {},
            isLoaded: false
        }

        this.getWeekDay = this.getWeekDay.bind(this);
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


    getWeekDay(date) {
        return days[new Date(date * 1000).getDay()];
    }

    render() {
        const { location, current, forecast } = this.state.clima;

    return this.state.isLoaded ? (
      
      <div className="App">
        <div className="container">
          <div className="top">

            <img src={logo} alt="Clima principal" className="image" />
            <p className="temp">{current.temp_c}</p>
            <h2 className="city">{location.name}, {location.region}, {location.country}</h2>
            <div className="feelslike">ST: {current.feelslike_c} °C, H: {current.humedity} %</div>
          </div>

          <div className="bottom">
            {forecast.forecastday.map(aDay => {
              return (<div className="card" key={aDay.date}>
              <h5>{this.getWeekDay(aDay.date_epoch)}</h5>
              <h6>{aDay.date}</h6>
              <img src={aDay.day.condition.icon} alt="Clima diario" className="imagebottom" />
              <div className="minmax">
                <p>
                  <span className="tempmax" />
                  {aDay.day.maxtemp_c}
                </p>
                <p>
                  <span className="tempmin" />
                  {aDay.day.mintemp_c}
                </p>
              </div>
            </div>)
              
            })}

          </div>
        </div>
      </div>
    ) : (
        <div className="App">Cargando...</div>
      )
  
    }
}

export default Weather;