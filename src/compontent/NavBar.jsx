import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../style/NavBar.css'
const NavBar=({size,setShow})=> {
  return (
    <nav>
        <div className='nav_box'>
            <span className='my_shop' onClick={()=>setShow(true)}>
                TINY TALES
            </span>
            <div className='cart' onClick={()=>setShow(false)}>
                <span>
                    <i className='fas fa-cart-plus'></i>
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}
export default NavBar