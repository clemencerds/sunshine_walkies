import React, {useState} from 'react';
import './App.css';
import Search from './components/Search';
import Results from './components/Results';
import WeatherApi from './util/WeatherApi';

function App () {

const [location, setLocation] = useState('');
const [date, setDate] = useState('');

const [lowRainChecked, setLowRainChecked] = useState(false)
const [isVisible, setIsVisible] = useState(false)
const [results, setResults] = useState([]);

const search = () => {
  WeatherApi.search({location, date}).then(setResults);
  setIsVisible(true)
};




  return (
    <div>
      <h1>Billie's Sunshine Walkies</h1>
      <Search location={location} setLocation={setLocation} date={date} setDate={setDate} lowRainChecked={lowRainChecked} setLowRainChecked={setLowRainChecked} onSearch={search}/>
      {isVisible &&
      <Results results={results} date={date} lowRainChecked={lowRainChecked}/>
      }
    </div>
  )
}

export default App;
