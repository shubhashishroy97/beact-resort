import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/Title'


// get all unique values
const getUnique =(items,value) => {
    return[...new Set(items.map(item => item[value]))]
}


export default function RoomFilter({rooms}) {
    const context =useContext(RoomContext)
    const{
        handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets 
    } = context

    //get unique types
    let types = getUnique(rooms,'type') 

    // add all
    types = ['all',...types]

    //map to jsx
    types = types.map((item,index)=>{
    return <option value={item} key={index}>{item}</option>
    })

    let people = getUnique(rooms,'capacity')
    people = people.map((item,index)=>{
    return <option key={index} value={item}>{item}</option>
    })
    
    
    return (
        <section className='filter-container'>
            <Title title='search rooms' />
            <form className='filter-form'>
                {/* Select type */}
                <div className='form-group'>
                    <label htmlFor='type'>Room Type</label>
                         <select name='type' id='type' value={type} className='form-control' onChange={handleChange}>
                             {types}
                         </select>
                </div>
                {/* End of Select Type */}

                 {/* Guest */}
                 <div className='form-group'>
                    <label htmlFor='type'>Guests</label>
                         <select name='capacity' id='capacity' value={capacity} className='form-control' onChange={handleChange}>
                             {people}
                         </select>
                </div>
                {/* End of Guest */}

                {/* room price */}
                <div className='form-group'>
                        <label htmlFor='price'>Room price ${price}</label>
                        <input type='range' name='price' min={minPrice} max={maxPrice} id='price' value={price} onChange={handleChange} className='form-control'></input>
                </div>
                  {/* end of room price */}

                   {/* Size*/}
                <div className='form-group'>
                        <label htmlFor='size'>Room size}</label>
                        <div className='size-inputs'>
                            <input type='number' name='minSize' id='size' value={minSize} onChange={handleChange} className='size-input'/>
                            <input type='number' name='minSize' id='size' value={maxSize} onChange={handleChange} className='size-input'/>
                        </div>
                </div>
                  {/* end of Size */}

            {/* Extras */}
                <div className='form-group'>
                <div className='single-extra'>
                    <input type='checkbox'
                    name='breakfast'
                    id='breakfast'
                    checked={breakfast}
                    onChange={handleChange}></input>

                    <label htmlFor='breakfast'>Breakfast</label>


                </div>
                </div>
            

            
            <div className='form-group'>
                <div className='single-extra'>
                    <input type='checkbox'
                    name='pets'
                    id='pets'
                    checked={pets}
                    onChange={handleChange}></input>

                    <label htmlFor='pets'>pets</label>


                </div>
                </div>
            {/* End of extras */}


            </form>
        </section>
    )
}
 