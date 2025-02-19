import React, {useState} from 'react';
import './App.css';
import Search from './components/Search';
import Results from './components/Results';
import WeatherApi from './util/WeatherApi';

function App () {

const [location, setLocation] = useState('');
const [date, setDate] = useState('');

const [results, setResults] = useState([]);

const search = () => {
  WeatherApi.search({location, date}).then(setResults);
};




  return (
    <div>
      <h1>Sunshine walkies</h1>
      <Search location={location} setLocation={setLocation} date={date} setDate={setDate} onSearch={search}/>
      <Results results={results} />
    </div>
  )
}

export default App;
