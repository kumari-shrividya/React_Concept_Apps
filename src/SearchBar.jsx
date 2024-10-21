import React,{useState} from 'react'

const SearchBar = () => {

    const [query,setQuery]=useState('')

    const [countries]=useState([
        "India",
        "America",
        "Italy", 
         'Afghanistan',
        'Albania',
        'Algeria',
        'Andorra',
        'Angola',])

    

    const filtered=countries.filter((x)=>
         x.toLowerCase().includes(query.toLowerCase())
    
    )
  return (
    <div>
        
        <input type='text' value={query} onChange={(e)=>setQuery(e.target.value)}/>
        <ul>
       
         {
        filtered.map((item,index)=>(
        <li key={index}>{item}</li>

          ))}
          </ul>
       
    
      
    </div>
  )
}

export default SearchBar
