import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Services extends Component {

    state={
        services: [
            {
                icon: <FaCocktail></FaCocktail>,
                title: 'Free Cocktails',
                info: 'All cocktails are available after the feast'
            },
            {
                icon: <FaHiking></FaHiking>,
                title: 'Endless Hikings',
                info: 'Enjoy your hiking with us'
            },
            {
                icon: <FaShuttleVan></FaShuttleVan>,
                title: 'Free Shuttle',
                info: 'Reach you to your exact destination'
            },
            {
                icon: <FaBeer></FaBeer>,
                title: 'Strong as Beer',
                info: 'Chill beer is waiting for you'
            }
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='services'></Title>
                <div className='services-center'>
                    {this.state.services.map((item,index) =>{
                        return <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
