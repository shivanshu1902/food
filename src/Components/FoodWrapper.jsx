import React,{useState} from "react";
import data from "./data";
import FoodCard from "./FoodCard";
import ShowMore from "./ShowMore";
import NavBar from "./NavBar";
import Checkout from "./Checkout";


// console.log({ data});
const FoodWrapper = () => {
  let [num,setNum]=useState(2)
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
        if(idx<num)
        {
          return (
          <FoodCard
            toggle={toggle}
            key={idx}
            mealname={item.name}
            id={item.idMeal}
            // category={item.strCategory}
            area={item.info}
            // tags={item.strTags}
            setFavFoodList={setFavFoodList}
            favFoodList={favFoodList}
            price={item.price}
            fav={item.fav}
            addtoCart={addtoCart}
          />
        );
        }
       
        
      })}
      <Checkout open={open} onCloseModal={onCloseModal} CartItems={CartItems}/>
      
      <ShowMore num={num} setNum={setNum}/>
    </div>
  );
};

export default FoodWrapper;