import React, {useState} from 'react';
import SunshineTimeline from '../SunshineTimeline/SunshineTimeline';
import './Results.css'
// import MyMap from '../../util/GoogleMaps';


function Results ({results, date, name, lowRainChecked, noColdChecked, noHeatChecked}) {
    
        //Convert sunrise and sunset times to Date object
        function convertToDate(timeString) {
            let euroDate = new Date(`${date} ${timeString}`);
            let formattedTime = euroDate.toLocaleTimeString('en-US', {hour12: false});
            return formattedTime;
        } 
        let sunriseTime = results?.[0]?.sunrise;
        let formattedSunriseTime = convertToDate(sunriseTime);
        let sunriseDate = new Date(`${date} ${formattedSunriseTime}`);
        console.log(sunriseDate);
    
        let sunsetTime = results?.[0]?.sunset;
        let formattedSunsetTime = convertToDate(sunsetTime);
        let sunsetDate = new Date(`${date} ${formattedSunsetTime}`);
        console.log(sunsetDate)

        

        //convert HH:MM:SS to HH:MM
        let shortSunriseTime = formattedSunriseTime.split(":").slice(0,2).join(":");
        let shortSunsetTime = formattedSunsetTime.split(":").slice(0,2).join(":");

        

    
        //filter hours with <20% chance of rain and convert to Date object
        let lowRainResults = results.filter(result => result.chance_of_rain < 20).map(result => new Date(result.time));
        console.log(lowRainResults)
    
        //filter hours with a temperature > 4°c and convert to Date object
        let noColdResults = results.filter(result => result.temperature > 4).map(result => new Date(result.time));
        console.log(noColdResults)

        //filter hours with a temperature < 26°c and convert to Date object
        let noHeatResults = results.filter(result => result.temperature < 26).map(result => new Date(result.time));
        console.log(noHeatResults)

        //filter lowRainResults and noColdResults when both are checked
        let noColdSet = new Set(noColdResults.map(date => date.getTime()));
        let noColdLowRain = lowRainResults.filter(date => noColdSet.has(date.getTime()));
        console.log(noColdLowRain)

        //filter lowRainResults and noHeatResults when both are checked
        let noHeatSet = new Set(noHeatResults.map(date => date.getTime()));
        let noHeatLowRain = lowRainResults.filter(date => noHeatSet.has(date.getTime()));
        console.log(noHeatLowRain)
    
        //filter noColdResults and noHeatResults when both are checked
        let noColdNoHeat = noColdResults.filter(date => noHeatSet.has(date.getTime()));
        console.log(noColdNoHeat)

        //filter all criteria when all are checked
        let lowRainSet = new Set(lowRainResults.map(date => date.getTime()));
        let warmAndLowRain = noColdNoHeat.filter(date => lowRainSet.has(date.getTime()));
        console.log(warmAndLowRain)


        //Filter the results hours between sunshine and sunset hours
        function sunshine(sunshineDate) {
            return sunshineDate >= sunriseDate && sunshineDate <= sunsetDate;
        }
        let sunAndLowRain = lowRainResults.filter(sunshine);
        let sunAndNoCold = noColdResults.filter(sunshine);
        let sunAndNoHeat = noHeatResults.filter(sunshine);
        let sunAndNoColdLowRain = noColdLowRain.filter(sunshine);
        let sunAndNoHeatLowRain = noHeatLowRain.filter(sunshine);
        let sunAndNoColdNoHeat = noColdNoHeat.filter(sunshine);
        let sunAndWarmAndLowRain = warmAndLowRain.filter(sunshine);

    
        //Return time slots
        function timeSlots(criteria) {

            if(!criteria.length) return 'Oh no ! No ideal time for a perfect walkies found today.';

            let resultArray = [];
            let start = criteria[0];
            let end = start;
    
            if (start?.getHours() <= sunriseDate.getHours() + 1 ) {
                start = sunriseDate;
            }
    
            for (let i = 1; i < criteria.length; i++) {
                if (criteria[i].getHours() === end.getHours() + 1) {
                    end = criteria[i];
                }
                else {
                    if (end?.getHours() >= sunsetDate.getHours() - 1) {
                        end = sunsetDate;
                    }
                    if (end?.getHours() === start?.getHours()) {
                        resultArray.push(`${start?.getHours()}:${start?.getMinutes()  > 0 ? start?.getMinutes() : '00'} and ${end?.getHours()+ 1}:${end?.getMinutes()  > 0 ? end?.getMinutes() : '00'}`);

                    }
                    else {
                        resultArray.push(`${start?.getHours()}:${start?.getMinutes()  > 0 ? start?.getMinutes() : '00'} and ${end?.getHours()}:${end?.getMinutes()  > 0 ? end?.getMinutes() : '00'}`);}
                    start = criteria[i];
                    end = start;
                }
            }
            
            if (end?.getHours() >= sunsetDate.getHours() - 1) {
                end = sunsetDate;
            }
            
            
            resultArray.push(`${start?.getHours()}:${start?.getMinutes() > 0 ? start?.getMinutes() : '00'} and ${end?.getHours()}:${end?.getMinutes()  > 0 ? end?.getMinutes() : '00'}`)
            
            return `Ideally, you and ${name} should go out between ${resultArray.join(" or between ")}`
    
            
        }
        



    return (
        <div className="results">
            <div>
                <h2 id='resultstitle'>Your sunshine walkies on the {date} </h2>
                <SunshineTimeline sunrise={shortSunriseTime} sunset={shortSunsetTime}/>
            </div>

            <div>
                <p>
                    {lowRainChecked && !noColdChecked && !noHeatChecked && timeSlots(sunAndLowRain)}
                    {noColdChecked && !lowRainChecked && !noHeatChecked && timeSlots(sunAndNoCold)}
                    {noHeatChecked && !lowRainChecked && !noColdChecked && timeSlots(sunAndNoHeat)}
                    {lowRainChecked && noColdChecked && !noHeatChecked && timeSlots(sunAndNoColdLowRain)}
                    {lowRainChecked && noHeatChecked && !noColdChecked && timeSlots(sunAndNoHeatLowRain)}
                    {noHeatChecked && noColdChecked && !lowRainChecked && timeSlots(sunAndNoColdNoHeat)}
                    {lowRainChecked && noColdChecked && noHeatChecked && timeSlots(sunAndWarmAndLowRain)}
                </p>
                
            </div>
        </div>
    )
};

export default Results;


