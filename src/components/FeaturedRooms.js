import React, { Component } from 'react'
import {RoomContext} from '../context'
import Loading  from './Loading'
import Title from './Title'
import Room from './Room'


class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
        let {loading, featuredRooms: rooms} = this.context
        rooms = rooms.map(room =>{
            return <Room key={room.id} room= {room}/>
        })
       
        return (
            <section className='featured-rooms'>
                <Title title='featured-rooms'/>
                <div className='featured-rooms-center'></div>
                    {loading? <Loading/>:rooms}
              
            </section>
        )
    }
}

export default FeaturedRooms
