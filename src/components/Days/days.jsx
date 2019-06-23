import React from 'react';

const Day = (props) => {

    const { aDay } = props;
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const getWeekDay = (date) => {
        return days[new Date(date * 1000).getDay()];
    }

    return (
        <div className="card" key={aDay.date}>
            <h5>{getWeekDay(aDay.date_epoch)}</h5>
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
        </div>
    )

}

export default Day;