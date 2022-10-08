import React from 'react'
import Cuisine from './Cuisine'
import Home from './Home'
import { Routes , Route , useLocation} from "react-router-dom"
import Searched from './Searched'
import Details from './Details'
import {AnimatePresence} from "framer-motion"
function Pages() {
  const location = useLocation()
  return (
    <div>
      <AnimatePresence>

      <Routes location={location} path={location.pathname}>
        <Route path='/' element={ <Home/>} />
        <Route path="/searched/:search" element={<Searched/>} />
        <Route path="/cuisine/:type" element={ <Cuisine/>} />
        <Route path="/recipe/:name" element={<Details/>} />
      </Routes>
   

      </AnimatePresence>
     
       
    </div>
  )
}

export default Pages