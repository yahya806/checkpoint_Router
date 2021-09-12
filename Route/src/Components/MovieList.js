import React, { useState } from 'react'
import Filter from './Filter';
import MovieCard from './MovieCard';



const MovieList = ({movies}) => {
    const [text, setText] = useState('')
    const filtertext = (text) => {
      setText(text)
    }
    const [rate, setRate] = useState('')
    const filterrate = (rate)  => {
        setRate(rate)
    
    }
  
    return (
        <>
        <div className='dif'>
            <Filter filtertext={filtertext} filterrate={filterrate}/>
        </div>
        <div className='lista'>
                
        {movies.filter((el)=> el.name.toLowerCase().includes(text.toLowerCase())&& el.rating>=rate).map((el)=>(<MovieCard movie={el}/>))}

        </div>
        </>
    )
}

export default MovieList ;
