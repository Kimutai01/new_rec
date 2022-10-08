import React from 'react'
import Popular from '../components/Popular';
import Search from '../components/Search';
import Veggie from '../components/Veggie';
import {motion} from "framer-motion"
function Home() {
  return (
    <motion.div 
    animate ={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition= {{duration:0.8 }}
     >
       
      <Search/>
         <Popular/>
      <Veggie/>
    
    
    </motion.div>
  )
}

export default Home