import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'





function homes() {
    return (
    <>
    <Hero>
         <Banner title='luxurious rooms' subtitle='deluxe rooms Starting At $299'>
            <Link to='/rooms' className='btn-primary'>
                Our Rooms
            </Link>
        </Banner>
    </Hero>


        <Services>

        </Services>
        
        <FeaturedRooms></FeaturedRooms>
      
       </>     
    )   
    
}

export default homes
