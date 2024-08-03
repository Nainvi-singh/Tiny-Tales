import React,{useState} from 'react'
import NavBar from './compontent/NavBar'
import Shop from './compontent/Shop'
import Cart from './compontent/Cart'
import './App.css'

const App=()=> {

  const [cart, setCart] = useState([])
  const [warning,setWarning] = useState(false);
  const[show,setShow] = useState(true);

  const handleClick=(item) =>{
    let isPresent = false;
    // to check that it already present
    cart.forEach((product) =>{
      if(item.id === product.id)
      isPresent= true;
    })

    if(isPresent){
      setWarning(true);
      setTimeout(()=>{
        setWarning(false);
      },2000);
      return;
    }

    setCart([...cart,item]);
  }

  const handleChange = (item,d) => {
    let ind = -1;
    cart.forEach((data,index) => {
      if(data.id === item.id)
      ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount +=d;
    console.log(tempArr);

    if(tempArr[ind].amount === 0){
      tempArr[ind].amount =1;
      
    }
    setCart([...tempArr])
  }

  return (
    <div>
      <NavBar size={cart.length} setShow={setShow}/>
      {
        show ? <Shop handleClick={handleClick} /> : 
        <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
      }
      
      {warning && <div className='warning'> Item is already in your cart </div>}

    </div>
  )
}
export default App
