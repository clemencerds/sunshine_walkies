import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import dogDay from './Assets/dogDay.png'
import dogRain from './Assets/dogRain.png'
import dogSnow from'./Assets/dogSnow.png'
import dogSun from './Assets/dogSun.png'
import './Search.css'

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
    const [validated, setValidated] = useState(false);


    const search = (event) => {
        
        onSearch(location, date)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }
        setValidated(true);
        
    };
    
   
    

    return (
        <div className='search'>

            <Form noValidate validated={validated} className="selection">
                <Form.Group className="mb-3" controlId="formGroupLocation">
                    <Form.Label>My location *</Form.Label>
                    <Form.Control required name='location' type='text' value={location} onChange={handleLocation}/>
                    <Form.Control.Feedback type="invalid">Please enter a valid location</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupDate">
                    <Form.Label>Date of my walkies * (in the next 14 days)</Form.Label>
                    <Form.Control required name='date' type= 'date' value={date} onChange={handleDate} />
                    <Form.Control.Feedback type="invalid">Please enter a date in the next 14 days</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Label>My dog's name</Form.Label> 
                    <Form.Control name='name' type= 'text' value={name} onChange={handleName} />
                </Form.Group>
            </Form>

            <div className="preferences">
                <h2>My dog's preferences :</h2>
                <Form className="preferencesForm">
                    <Form.Check 
                        className="custom-switch" 
                        type="switch" 
                        id="custom-switch-daylight"
                        value="" 
                        name="daylight" 
                        checked 
                        disabled 
                        label={<span> <img className='criteriaimg' src={dogDay}/> I want to go out in the daylight </span>}/>
                    <Form.Check 
                        className="custom-switch" 
                        type="switch" 
                        id="custom-switch-lowRain" 
                        value=""  
                        name="lowRain" 
                        checked={lowRainChecked} 
                        onChange={handleLowRainCheck} 
                        label={<span><img className='criteriaimg' src={dogRain}/> My dog doesn't like the rain </span>}/> 
                    <Form.Check 
                        className="custom-switch" 
                        type="switch" 
                        id="custom-switch-noCold" 
                        value="" 
                        name="noCold" 
                        checked={noColdChecked} 
                        onChange={handleNoColdCheck} 
                        label={<span><img className='criteriaimg' src={dogSnow}/>My dog is sensitive to cold (min + 4°c / 39°f)  </span>}/>
                    <Form.Check 
                        className="custom-switch" 
                        type="switch" 
                        id="custom-switch-noHeat" 
                        value="" 
                        name="noHeat" 
                        checked={noHeatChecked} 
                        onChange={handleNoHeatCheck} 
                        label={<span><img className='criteriaimg' src={dogSun}/> My dog can't stand heat (max + 25°c / 77°f) </span>}/>
                </Form>
             </div>
             
            <Button id='searchButton' type='button' variant="outline-light" onClick={search}>Ask Billie !</Button>
        </div>
    );
};

export default Search;


