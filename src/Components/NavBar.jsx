import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../images/logo.png";
import data from './data'

const NavBar = ({favFoodList,toggle,setToggle,setItems,onOpenModal}) => {
  const displayFav=()=>{
  setToggle(!toggle);
  document.querySelector(".NavHeart").classList.toggle("red")
  
  if(toggle)
  {
    setItems(favFoodList);
    
  }
  else{
    setItems(data);
  
  }
  }
  return (
    <nav className="navbar">
        <div className='header-content_logo'>
    <div>
      <img src={logo} alt='logo' />
      <span>
        <b>Taste</b>
      </span>
    </div>
    <p>
      <b>Restaurant & BBQ</b>
    </p>
  </div>
      <div className="right">
        <span className="NavHeart"><AiOutlineHeart 
         onClick={displayFav}
        /></span>

        <AiOutlineShoppingCart onClick={()=>onOpenModal()} />
      </div>
    </nav>
  );
};

export default NavBar;