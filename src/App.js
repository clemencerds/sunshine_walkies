import React, {useState} from 'react';
import './App.css';
import Search from './components/Search';
import Results from './components/Results';
import WeatherApi from './util/WeatherApi';
import 'bootstrap/dist/css/bootstrap.css';

function App () {

const [location, setLocation] = useState('');
const [date, setDate] = useState('');
const [name, setName] = useState('');

const [lowRainChecked, setLowRainChecked] = useState(false)
const [noColdChecked, setNoColdChecked] = useState(false)
const [noHeatChecked, setNoHeatChecked] = useState(false)
const [isVisible, setIsVisible] = useState(false)
const [results, setResults] = useState([]);

const search = () => {
  WeatherApi.search({location, date}).then(setResults);
  setIsVisible(true)
};




  return (
    <div>
      <h1 className="text-3xl font-bold underline">Billie's Sunshine Walkies</h1>
      <Search 
          location={location} 
          setLocation={setLocation} 
          date={date} 
          setDate={setDate} 
          name={name}
          setName={setName}
          lowRainChecked={lowRainChecked} 
          setLowRainChecked={setLowRainChecked}
          noColdChecked={noColdChecked}
          setNoColdChecked={setNoColdChecked} 
          noHeatChecked={noHeatChecked}
          setNoHeatChecked={setNoHeatChecked}
          onSearch={search}
          />
      {isVisible &&
      <Results 
          results={results} 
          date={date} 
          name={name}
          lowRainChecked={lowRainChecked}
          noColdChecked={noColdChecked}
          noHeatChecked={noHeatChecked}
          />
      }
      
      
    </div>
  )
}

export default App;
