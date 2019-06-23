import React from 'react';
import Day from '../Days/days'


const Bottom = (props) => {

    const { forecast } = props;
    return (
        <div className="bottom">
            {forecast.forecastday.map(aDay => {
                return (
                    <Day aDay={aDay}></Day>
                )

            })}

        </div>
    )
}


export default Bottom;