import React,{useState} from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { AiOutlineClose } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Checkout = ({open,onCloseModal,CartItems}) => {
    let [coupvalue,setCoupvalue]=useState("")
    let [toggle,setToggle]=useState(false)
    let [discvalue,setDiscValue]=useState(0)
    const handleToggle = ()=>{
        setToggle(!toggle)
    }
    
    const Handlechange =(e)=>{
        setCoupvalue(e.target.value)

    }
    const handleSubmit = (e)=>{
        e.preventDefault()

        if(!(coupvalue.length))
        return;
        if(itemsprice()<200)
        { 
          return errormessage("minimum cart value should be greater than 200");
        }
        
        setCoupvalue("")
        setToggle(!toggle)
        handleDiscount()
    }
    const handleDiscount=()=>{
        let value=itemsprice()
        setDiscValue(value-200)

        
    }
    const itemsprice = ()=>{
        let value = CartItems.reduce((acc,curr)=>{
            return acc+=curr.price
        },0)
        return value;
    }
    const errormessage=(errm)=>{
        toast(errm, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    return (
        <Modal open={open} showCloseIcon={false}   center>
       
        <div className="paymentcontainer" >
        <span className="closebtn" onClick={()=>{
            onCloseModal()
        }}>
         <AiOutlineClose fontSize={20}/>

        </span>
            <div className="paymentHeading">
                <h1>Payment Summary </h1>
            </div>
            <div className="paymentsummary">
                <div className="prices">
                    <h4>Total Price</h4>
                    <p>{CartItems.reduce((acc,curr)=>{
                        return acc+=curr.price
                    },0)}</p>
                </div>
                <div className="prices">
                <h4>Product Discount</h4>
                <p>-100</p>
                    
                </div>
                <div className="prices">
                <h4>Coupon Discount</h4>
                
                    <p style={{cursor:'pointer'}} onClick={handleToggle}>Apply Coupon</p>
                 {toggle&&<form onSubmit={handleSubmit} className="couponform">
                        <input type="text" placeholder="Enter your Coupon" name="CoupName" value={coupvalue}onChange={Handlechange}

                        />
                    </form>
                 }
                </div>
                
                <div className="prices">
                <h4>Total Amount Payable</h4>
                    <p>{discvalue||CartItems.reduce((acc,curr)=>{
                        return acc+=curr.price
                    },0)}</p>
                </div>

            </div>
            
                <button className="paymentbtn">Proceed to pay 199</button>
                       
                      
 
        </div>
        <ToastContainer />
      </Modal>
    )
}

export default Checkout