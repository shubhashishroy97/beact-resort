import React ,{useState,useEffect} from 'react'
import Axios from 'axios'

function DataFetchingOne(){
    const[post,setpost]= useState({})
    const[id,setId] = useState(1)
    const[idFromButtonClick,setIdFromButtonClick] = useState(1)

    const handleClick = ()=>{
        setIdFromButtonClick(id)
    }

    useEffect(()=>{
        Axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(response=>{
            console.log(response)
            setpost(response.data)
        })

        .catch((error)=>{
            console.log(error)
        })
    },[idFromButtonClick])
    return(
        <div>
            
            <input type='text' value={id} onChange={e=>setId(e.target.value)}/>
            <button type='button' onClick={handleClick}>Fetching data</button>
            <div>{post.title}</div>
            {/* <ul>
                {
                devashish.map(devashish=> (<li key={devashish.id}>{devashish.title}</li> ))
                }
             </ul> */}
            
        </div>
    )
}

export default DataFetchingOne