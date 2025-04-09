import React, {useState} from 'react';

function Search ({location, 
                setLocation, 
                date, setDate, 
                name, setName,
                lowRainChecked, setLowRainChecked, 
                noColdChecked, setNoColdChecked,
                noHeatChecked, setNoHeatChecked, 
                onSearch}) {

    const handleLocation = (e) => setLocation(e.target.value);
    const handleDate = (e) => setDate(e.target.value);
    const handleName = (e) => setName(e.target.value);
    const handleLowRainCheck = () => setLowRainChecked(!lowRainChecked);
    const handleNoColdCheck = () => setNoColdChecked(!noColdChecked);
    const handleNoHeatCheck = () => setNoHeatChecked(!noHeatChecked);
    const search = (e) => onSearch(location, date);
    
    

    return (
        <div>
        <form>
            
            <label for="location" class="form-label">My location </label>
            <input id='location' class="form-control" type='text' value={location} onChange={handleLocation}/>
            <label for="date" class="form-label">Date of my walkies </label>
            <input id='date' class="form-control" type= 'date' value={date} onChange={handleDate} />
            <label for="name" class="form-label">My dog's name </label>
            <input id='name' class="form-control" type= 'text' value={name} onChange={handleName} />
            <div>
                <p>My dog's preferences :</p>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" value="" id="lowRain" checked={lowRainChecked} onChange={handleLowRainCheck}/>
                    <label class="form-check-label" for="lowRain"> My dog doesn't like the rain ☔ </label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" value="" id="noCold" checked={noColdChecked} onChange={handleNoColdCheck}/>
                    <label class="form-check-label" for="noCold"> My dog is sensitive to cold (min + 4°c / 39°f) ❄️ </label>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" value="" id="noHeat" checked={noHeatChecked} onChange={handleNoHeatCheck}/>
                    <label class="form-check-label" for="noHeat"> My dog doesn't like the heat (max + 25°c / 77°f) 🔥 </label>
                </div>
            </div>
            <button type='button' onClick={search}> Ask Billie !</button>
        </form>
        </div>
    );
};

export default Search;


