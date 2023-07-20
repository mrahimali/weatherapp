import React, { useState, useEffect } from 'react'

const Card = () => {

    const [city, setCity]=useState(null);
    const [search, setSearch]=useState("Bareilly");

    useEffect(() => {
        const fetchAPI=async ()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=29c21bace495743624274095c8a2fd65`;
            const response=await fetch(url);
            const data=await response.json();
            console.log(data);
            setCity(data.main);
        }

        fetchAPI();
    },[search] );

    // (32°F − 32) × 5/9 = 0°C
  return (
    <div className='container'>
            <div>
                <h1 className='heading'>Weather App</h1>
                <input type='search' placeholder='Enter city Name' className='inputField' onChange={(event)=>{setSearch(event.target.value)}}/>
            </div>
            {
            !city?(
                <p className='text'>No Data Found</p>
                ):(<div className='text'>
                <h2 className='text'>{search}</h2>
                {/* <h2>Country : {city.sys.country}</h2> */}
                <h4 className='cur_temp'>Current Temperature : { ((city.temp-32)*(5/9)).toFixed(2)

                    } <sup>o</sup>C</h4>
                <p className='text'>min temp {((city.temp_min-32)*(5/9)).toFixed(2)}<sup>o</sup>C | max temp : {((city.temp_max-32)*(5/9)).toFixed(2)}<sup>o</sup>C</p>
                <p className='text'>Humidity : {city.humidity}</p>
                <p className='text'>Pressure : {city.pressure}</p>
            </div>)
            }
            <p className='footer'>Developed By- Mohd Rahim Ali</p>
        
    </div>
  )
}

export default Card