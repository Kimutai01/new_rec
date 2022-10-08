import React , {useEffect ,useState} from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {Link} from "react-router-dom"
import { layoutGenerator } from "react-break";

function Veggie() {
  const layout = layoutGenerator({
    mobile: 0,
    phablet: 550,
    tablet: 768,
    desktop: 992,
  });
  const OnMobile = layout.is("mobile");
  const OnDesktop = layout.is("desktop");


    useEffect(()=>{
        getVeggie()
    },[])
    const [veggie, setVeggie]=useState([])
    const getVeggie = async ()=>{

      const check = localStorage.getItem('Veggie')
      if(check){
        setVeggie(JSON.parse(check))
      }
      else{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12&tags=vegetarian`)
        const data = await api.json()
        localStorage.setItem('Veggie', JSON.stringify(data.recipes))
        setVeggie(data.recipes)

      }
       
    }

    const renderRecipe = veggie.map(recipe =>(
      <SplideSlide key={recipe.id}>
        <div className="popular-veggie-card" key={recipe.id}>
        <img src={recipe.image} alt="food " />
        <div className="nameAndLink">
          <p> {recipe.title} </p>
          <Link to={"/recipe/" + recipe.id}>view recipe</Link>
        </div>
      </div>
      </SplideSlide>
    
     
    ))
  return (
    <div className="wrapper vegg">
      <h3>VEGGIES</h3>
      <OnDesktop> 
      <Splide options={{
        perPage:4,
        arrows:false,
        pagination:false,
        drag:"free",
        gap: "5rem",
      }}>
        
      {renderRecipe}

      </Splide>

      </OnDesktop>
      <OnMobile>
      <Splide options={{
       perPage: 1,
       arrows: false,
       pagination: false,
       drag: "free",
       gap: "1rem",
      }}>
        
      {renderRecipe}

      </Splide>
      </OnMobile>
     
     
    </div>
  )
  
}


export default Veggie