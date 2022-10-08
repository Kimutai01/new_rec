import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useParams , Link } from "react-router-dom";

function Searched() {
  const [searched, setSearched] = useState([]);
  const params = useParams();
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);
  const getSearched = async (searchedfood) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=12&query=${searchedfood}`
    );
    const searchedFoods = await data.json();
    setSearched(searchedFoods.results);
  };

  return (
    <motion.div   animate ={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition= {{duration:0.8 }}
    >
      <div className="cuisine" >
      {searched.map((eachSearched) => (
        <div className="cuisine-card" key={eachSearched.id}>
        <img src={eachSearched.image} alt="eachSearched " />
        <div className="nameAndLink">
          <p> {eachSearched.title} </p>
          <Link to={'/recipe/'+ eachSearched.id}>view recipe</Link>

        </div>
        </div>
       
      ))}
      </div>
    </motion.div>
  );
}

export default Searched;
