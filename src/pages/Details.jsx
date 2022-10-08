import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Details() {
  const params = useParams();
  const [details, setDetails] = useState([]);
  const [active, setActive] = useState("instructions");
  const fetchDetails = async (id) => {
    const fetchDetailsApi = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailsJson = await fetchDetailsApi.json();
    setDetails(detailsJson);
  };
  useEffect(() => {
    fetchDetails(params.name);
  }, [params.name]);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="detailsDiv" key={details.id}>
        <div className="image-name">
          <h2>{details.title}</h2>
          <img className="detail-img" src={details.image} alt="details" />
        </div>
        <div className="full-recipe">
             <div className="buttons">
            <button type="button" id="instructions" onClick={()=>{setActive('instructions')}}>INSTRUCTIONS</button>
            <button type="button" id="ingredients" onClick={()=>{setActive('ingredients')}}>INGREDIENTS</button>
            </div>
        {active==='instructions' && (
             <div className="summary">
             <p key={details.id} dangerouslySetInnerHTML={{__html:details.instructions}}></p>
         </div>

        )}
        {active=== 'ingredients' && (
             <div>
             {details.extendedIngredients.map(ingredient =>(
                     <ul key={ingredient.id}className="ulsummary">
                         
                     <li >{ingredient.original}</li>
     
                     </ul>
                    
                     
                 ))}
     
             </div>

        )}
       
        </div>
      </div>
    </motion.div>
  );
}

export default Details;
