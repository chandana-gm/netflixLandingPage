import React from 'react'
import './RowPost.css'
import { useState, useEffect } from 'react'
import axios from '../../axios'
import { imageUrl } from '../../constants/constants'

function RowPost(props) {

    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(props.url).then(response => {
            console.log(response.data.results);
            setMovies(response.data.results)

        })
    }, [])

    const handleMovie = (id) => {
        console.log(id);
    }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj) =>


                    <div className="image-container">
                        <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageUrl + obj.backdrop_path}`} />

                        <h2 className="image-text">{obj.title}{obj.name}</h2>
                    </div>

                )}


            </div>
        </div>
    )
}

export default RowPost