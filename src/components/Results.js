import React, {useState} from 'react';

function Results ({results}) {


    return (
        <div>
            <h2>Sunrise and sunset times</h2>
            <div>
                {/* <p> Sunrise is at {JSON.stringify(results.astronomy.astro.sunrise)}</p>
                <p>Sunset is at {JSON.stringify(results.astronomy.astro.sunset)}</p> */}
                {/* <p>Your best sunshine walky will happen between {JSON.stringify(results.astronomy.astro.sunrise)} and {JSON.stringify(results.astronomy.astro.sunset)}</p> */}
                <p>Your best sunshine walky will happen between {JSON.stringify(results.forecast.forecastday.astro.sunrise)} and {JSON.stringify(results.forecast.forecastday.astro.sunset)}</p>
            </div>
        </div>
    );
};

export default Results;