import React,{useState} from "react";
import data from "./data";
import FoodCard from "./FoodCard";
import NavBar from "./NavBar";
import Checkout from "./Checkout";


const FoodWrapper = () => {

  let [favFoodList,setFavFoodList]=useState([])
  let [toggle,setToggle]=useState(true)
  let [items,setItems]=useState(data)
  const [open, setOpen] = useState(false);
  let [CartItems,setCartitem] = useState([])

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  
  const addtoCart = (item)=>{

setCartitem([...CartItems,item]);
console.log(CartItems)
  }

  return (
    <div>
      <NavBar setItems={setItems} toggle={toggle} setToggle={setToggle}  favFoodList={favFoodList} onOpenModal={onOpenModal}  />
      
      {items.map((item, idx) => {

          return (
          <FoodCard
            toggle={toggle}
            key={idx}
            mealname={item.name}
            id={item.idMeal}
            area={item.info}
            setFavFoodList={setFavFoodList}
            favFoodList={favFoodList}
            price={item.price}
            fav={item.fav}
            addtoCart={addtoCart}
          />
        );
       
        
      })}
      <Checkout open={open} onCloseModal={onCloseModal} CartItems={CartItems}/>
      
    </div>
  );
};

export default FoodWrapper;