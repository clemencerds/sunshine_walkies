import React from 'react';
import './SunshineTimeline.css'

function SunshineTimeline ({ sunrise, sunset }) {
        // const toDecimal = (time) => {
        //   const [h, m] = time.split(":").map(Number);
        //   return h + m / 60;
        // };
      
        const sunriseHour = 6;
        const sunsetHour = 19;
        const totalHours = 24;
      
        const preDaylight = (sunriseHour / totalHours) * 100;
        const daylight = ((sunsetHour - sunriseHour) / totalHours) * 100;
        const postDaylight = 100 - preDaylight - daylight;
      
        return (
          <div className="daylight-wrapper">
            <div className="bar-container">
              <div className="segment night" style={{ width: `${preDaylight}%` }} />
              <div className="segment daylight" style={{ width: `${daylight}%` }} />
              <div className="segment night" style={{ width: `${postDaylight}%` }} />

              <div className="sunrise-marker" style={{ left: `${preDaylight}%` }}>rise:{sunrise}</div>
              <div className="sunset-marker" style={{ left: `${preDaylight + daylight}%` }}>set:{sunset}</div>
            </div>
          </div>
        )

    };
    
    


export default SunshineTimeline;