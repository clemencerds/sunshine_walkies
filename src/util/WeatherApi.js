const key = 'a169e3e94ab84c309e2125232251202';

const WeatherApi = {
    
    // search({location, date}) {
    //     return fetch(`https://api.weatherapi.com/v1/astronomy.json?key=${key}&q=${location}&dt=${date}`,
    //         { headers: {
    //             accept: 'application/json'}
    //         }
    //     )
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error(`Response status: ${response.status}`);
    //         }
    //         return response.json();
    //     })
    //     .then(jsonResponse => {
    //         if (jsonResponse.error) {
    //             throw new Error (`API error: ${jsonResponse.error.message}`);
    //         }
    //         return jsonResponse;
            
    //     })
        
    // }

    search({location, date}) {
        return fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&dt=${date}`,
            { headers: {
                accept: 'application/json'}
            }
        )
        .then(response => {
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            return response.json();
        })
        .then(jsonResponse => {
            if (jsonResponse.error) {
                throw new Error (`API error: ${jsonResponse.error.message}`);
            }
            return jsonResponse;
            
        })
        
    }
};
   

export default WeatherApi;