import React from "react";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
// import { useState } from "react/cjs/react.development";
import noodles from "../images/noodles.jpeg";
import data from "./data";

const FoodCard = ({ fav,mealname, id, category, area, tags,setFavFoodList,favFoodList,price,toggle,addtoCart}) => {
  
  const handleFavourite=(e)=>{
    
    if(e.target.parentElement.parentElement.classList.contains("heart"))
    {
        let foundmeal;
        toggle ? foundmeal=data.find((item)=>item.idMeal===id) : foundmeal=favFoodList.find((item)=>item.idMeal===id)
        
        if(foundmeal.fav===false)
        {
          foundmeal.fav=true;
          setFavFoodList([...favFoodList,  foundmeal])
          e.target.parentElement.parentElement.classList.add("red")
        }
        else{
          foundmeal.fav=false;
          favFoodList.forEach((item,idx)=>
          {
           if(item.idMeal===foundmeal.idMeal)     
           setFavFoodList(favFoodList.splice(idx,1)); 
          })
          e.target.parentElement.parentElement.classList.remove("red")
          setFavFoodList([...favFoodList]);  
        }    
      }
    }
    // const HandleCart=(e)=>{
      
    // }
    // // console.log(favFoodList)
 
  
  return (
    <div className="card">
      <div className="top">
        <p className="mealname">{mealname}</p>
       {fav? <span className="heart red" onClick={handleFavourite} >
          <AiFillHeart />
        </span>: <span className="heart" onClick={handleFavourite}>
          <AiFillHeart />
        </span>}
      </div>
      <div className="middle">
        <img src={noodles} alt='noodle'/>
        <div className="foodinfo">
          <div className="category-area">
            {/* <span className="category">{category}</span> */}
            <span className="area">{area}</span>
          </div>
          <div className="foodtag">
            <span>{tags}</span>
            
          </div>
        </div>
      </div>
      <div className="bottom">
        <button onClick={()=>addtoCart({id:id,name:mealname,price:price})}>
          <p>Add To Cart</p>
          <AiOutlineShoppingCart />
        </button>
        <div className="price">
        ₹{price}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;