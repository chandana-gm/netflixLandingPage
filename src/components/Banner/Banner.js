import React, { useEffect, useState } from 'react'
import './Banner.css'
import {baseUrl,imageUrl, apiKey} from '../../constants/constants'
import axios from '../../axios'

function Banner() {

const[values,setValues] = useState([])

useEffect(() => {
  axios.get(`trending/all/week?api_key=${apiKey}&language=en-US`)
    .then((response) => {
      // console.log("Random title", response);
      const randomIndex = Math.floor(Math.random() * response.data.results.length);
      setValues(response.data.results[randomIndex]);
      // console.log("Random index: ", randomIndex);
    })
    .catch((error) => {
      // console.error('Error fetching data:', error);
    });
}, [apiKey]);


    return (
        <div style={{backgroundImage:`url(${values? imageUrl+values.backdrop_path : ''})`}}
         className='banner'>
            <div className='content' >
                <h1 className='title'>{values? values.title : ''}  </h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{values? values.overview:""}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner