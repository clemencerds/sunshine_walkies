import React, {useState} from 'react';

function Search ({location, setLocation, date, setDate, onSearch}) {

    const handleLocation = (event) => setLocation(event.target.value);
    const handleDate = (e) => setDate(e.target.value);
    const search = (e) => onSearch(location, date)

    return (
        <div>
        <form>
            {/* <label for="location">Location: </label> */}
            <input id='location' type='text' value={location} onChange={handleLocation}/>
            {/* <label for="date">Date : </label> */}
            <input id='date' type= 'date' value={date} onChange={handleDate} />
            <button type='button' onClick={search}> Find your sunshine walky!</button>
        </form>
        </div>
    );
};

export default Search;


// location, date