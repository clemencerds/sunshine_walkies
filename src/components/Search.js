import React, {useState} from 'react';

function Search ({location, setLocation, date, setDate, lowRainChecked, setLowRainChecked, onSearch}) {

    const handleLocation = (e) => setLocation(e.target.value);
    const handleDate = (e) => setDate(e.target.value);
    const handleLowRainCheck = () => setLowRainChecked(!lowRainChecked);
    const search = (e) => onSearch(location, date);
    
    

    return (
        <div>
        <form>
            <label for="location">Your location </label>
            <input id='location' type='text' value={location} onChange={handleLocation}/>
            <label for="date">Date of your walkies </label>
            <input id='date' type= 'date' value={date} onChange={handleDate} />
            <div>
                <p>Your criteria :</p>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={lowRainChecked} onChange={handleLowRainCheck}/>
            <label class="form-check-label" for="flexCheckDefault"> My dog doesn't like the rain </label>
            </div>
            <button type='button' onClick={search}> Ask Billie !</button>
        </form>
        </div>
    );
};

export default Search;


