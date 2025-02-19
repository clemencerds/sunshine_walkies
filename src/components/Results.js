import React, {useState} from 'react';

function Results ({results}) {

    

    return (
        <div>
            
            {/* <div>
                {/* <p> Sunrise is at {JSON.stringify(results.astronomy.astro.sunrise)}</p>
                <p>Sunset is at {JSON.stringify(results.astronomy.astro.sunset)}</p> */}
                {/* <p>Your best sunshine walky will happen between {JSON.stringify(results.astronomy.astro.sunrise)} and {JSON.stringify(results.astronomy.astro.sunset)}</p> */}
                {/* <p>Your best sunshine walky will happen between {JSON.stringify(results.forecast.forecastday[0].astro.sunrise)} and {JSON.stringify(results.forecast)}</p> */}
            {/* </div> */}
            <div>
                <h2>sunrise and sunset times</h2>
                {/* {results?.forecast?.forecastday && results.forecast.forecastday.length > 0 ? (
                    <p>Your best sunshine walky will happen between {results.forecast.forecastday[0].astro.sunrise} and {results.forecast.forecastday[0].astro.sunset}</p>
                ) : (
                    <p>noo data</p>
                )} */}
                    <p>{results[0].sunrise}</p>
                    <p>{results[0].sunset}</p>
            </div>

            <div>
                <h2>hours with low chance of rain</h2>
                   {results.filter(result => result.chance_of_rain < 10).map(result =>
                    <p key={result.time}>{result.time}</p>
                   )}
            </div>
        </div>
    );
};

export default Results;