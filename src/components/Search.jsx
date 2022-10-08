import React , {useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from "react-router-dom"
function Search() {
    const [input , setinput]= useState('')
    const navigate = useNavigate()
    const handleInput = (e)=>{
        setinput(e.target.value)

    }
    const submitHandler = (e)=>{
        e.preventDefault()
        navigate('/searched/'+input)
    }
  return (
    <form className="search-box" onSubmit={submitHandler}>
        <input className="input-space" type="text" value={input} onChange={handleInput} />
       <span><button className="search-button" type="button" onClick={submitHandler}> <FaSearch/></button> </span> 
        
    </form>
    
  )
}


export default Search