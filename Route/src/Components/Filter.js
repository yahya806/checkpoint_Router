import React from 'react'
import ReactStars from 'react-rating-stars-component'

export const Filter = ({filtertext,filterrate}) => {
    
    return (
        <div>
            <div>
            <h3>Search</h3>
            <input type='text' onChange={(e)=>filtertext(e.target.value)}/>
            <h3>sort by rating</h3>
            <ReactStars
    count={5}
    onChange={(newRating)=>filterrate(newRating)}
    size={24}
    activeColor="#ffd700"
  />
        </div> 
        </div>
    )
}
export default Filter