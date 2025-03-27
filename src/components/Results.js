import React, {useState} from 'react';

function Results ({results, date, lowRainChecked}) {

    // //filter hours with <20% chance of rain and convert to Date object
    // let lowRainResults = results.filter(result => result.chance_of_rain < 20).map(result => new Date(result.time));
    // console.log(lowRainResults)

    // //filter hours with a temperature > 4°c and convert to Date object
    // let noColdResults = results.filter(result => result.temperature > 4).map(result => new Date(result.time));
    // console.log(noColdResults)
    
    // //Convert sunrise and sunset times to Date object
    // function convertToDate(timeString) {
    //     let euroDate = new Date(`${date} ${timeString}`);
    //     let formattedTime = euroDate.toLocaleTimeString('en-US', {hour12: false});
    //     return formattedTime;
    // } 
    // let sunriseTime = results?.[0]?.sunrise;
    // let formattedSunriseTime = convertToDate(sunriseTime);
    // let sunriseDate = new Date(`${date} ${formattedSunriseTime}`);
    // console.log(sunriseDate);

    // let sunsetTime = results?.[0]?.sunset;
    // let formattedSunsetTime = convertToDate(sunsetTime);
    // let sunsetDate = new Date(`${date} ${formattedSunsetTime}`);
    // console.log(sunsetDate)


    // //Filter the hours with low chance of rain between sunshine and sunset hours
    // function sunshine(sunshineDate) {
    //     return sunshineDate >= sunriseDate && sunshineDate <= sunsetDate;
    // }
    // let sunAndLowRain = lowRainResults.filter(sunshine);
    // console.log(sunAndLowRain)


    // //Return time slots
    // function timeSlots(sunAndLowRain) {

    //     let resultArray = [];
    //     let start = sunAndLowRain[0];
    //     let end = start;

    //     if (start?.getHours() <= sunriseDate.getHours() + 1 ) {
    //         start = sunriseDate;
    //     }

    //     for (let i = 1; i < sunAndLowRain.length; i++) {
    //         if (sunAndLowRain[i].getHours() === end.getHours() + 1) {
    //             end = sunAndLowRain[i];
    //         }
    //         else {
    //             if (end?.getHours() >= sunsetDate.getHours() - 1) {
    //                 end = sunsetDate;
    //             }
    //             resultArray.push(`${start?.getHours()}:${start?.getMinutes()  > 0 ? start?.getMinutes() : '00'} and ${end?.getHours()}:${end?.getMinutes()  > 0 ? end?.getMinutes() : '00'}`);
    //             start = sunAndLowRain[i];
    //             end = start;
    //         }
    //     }
        
    //     if (end?.getHours() >= sunsetDate.getHours() - 1) {
    //         end = sunsetDate;
    //     }
        
        
    //     resultArray.push(`${start?.getHours()}:${start?.getMinutes() > 0 ? start?.getMinutes() : '00'} and ${end?.getHours()}:${end?.getMinutes()  > 0 ? end?.getMinutes() : '00'}`)
        

    //     if(lowRainChecked){
    //         if (!sunAndLowRain.length) {
    //             return 'oh no! it will rain all day';
    //         }
    //         else {
    //         return `Your best walkies this day will happen between ${resultArray.join(" and between ")}.`
    //         };
    //     }
    // }
    // console.log(timeSlots(sunAndLowRain))
    
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
    
        //filter hours with <20% chance of rain and convert to Date object
        let lowRainResults = results.filter(result => result.chance_of_rain < 20).map(result => new Date(result.time));
        console.log(lowRainResults)
    
        //filter hours with a temperature > 4°c and convert to Date object
        let noColdResults = results.filter(result => result.temperature > 4).map(result => new Date(result.time));
        console.log(noColdResults)
    
        //Filter the results hours between sunshine and sunset hours
        function sunshine(sunshineDate) {
            return sunshineDate >= sunriseDate && sunshineDate <= sunsetDate;
        }
        
        let sunAndLowRain = lowRainResults.filter(sunshine);
        console.log(sunAndLowRain)
    
        let sunAndNoCold = noColdResults.filter(sunshine);
        console.log(sunAndNoCold)
    
    
        //Return time slots
        function timeSlots(criteria) {
    
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
                    resultArray.push(`${start?.getHours()}:${start?.getMinutes()  > 0 ? start?.getMinutes() : '00'} and ${end?.getHours()}:${end?.getMinutes()  > 0 ? end?.getMinutes() : '00'}`);
                    start = criteria[i];
                    end = start;
                }
            }
            
            if (end?.getHours() >= sunsetDate.getHours() - 1) {
                end = sunsetDate;
            }
            
            
            resultArray.push(`${start?.getHours()}:${start?.getMinutes() > 0 ? start?.getMinutes() : '00'} and ${end?.getHours()}:${end?.getMinutes()  > 0 ? end?.getMinutes() : '00'}`)
            
    
            if(lowRainChecked){
                if (!sunAndLowRain.length) {
                    return 'oh no! it will rain all day';
                }
                else {
                return `Your best walkies this day will happen between ${resultArray.join(" and between ")}.`
                };
            }
    
        }
        



    return (
        <div>
            
            <div>
                <h2>sunrise and sunset times</h2>
                <p>the sun will rise between {formattedSunriseTime} and {formattedSunsetTime}</p>
            </div>

            <div>
                <h2>hours with low chance of rain</h2>
                {timeSlots(sunAndLowRain)}
            </div>
        </div>
    )
};

export default Results;


