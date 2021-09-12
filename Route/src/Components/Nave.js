import React from 'react'
import { Link } from 'react-router-dom'

export const Nave = () => {
    return (
        <div className='navigation'>
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg2GeSFyXq6Z3X9UBTlj29tA2JoH-cxflp_Q&usqp=CAU" alt='logo'/>
            <ul> 
                <Link to='/'>
                <li>
                <i class="fas fa-home"></i>
                Home
                </li>
                </Link>
                <Link to='/movies'>
                <li>
                <i class="fas fa-film"></i>
                Movies
                </li>
                </Link>
            </ul>
        </div>
    )
}
