import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCart, emptyCart, incrementCart, removeCartItem } from '../redux/slices/cartSlice'
import Products from './Products'
import Swal from 'sweetalert2'

function Cart() {

  const userCart = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()
  const [cartTotal,setCartTotal]=useState(0)
  const navigate=useNavigate()

  useEffect(()=>{
    setCartTotal(userCart?.reduce((acc,curr)=>acc+curr.totalPrice,0))
  },[userCart])

  const handleDecrement=(Product)=>{
    if(Product.quantity>1){
      dispatch(decrementCart(Product.id))

    }else{
      dispatch(removeCartItem(Product.id))
    }
  }

  const handleCheckout=()=>{
    dispatch(emptyCart())
    Swal.fire({
      title:"Order Placed Successfully",
      text:"Thankyou For Purchasing With Us",
      icon:"success",
      confirmButtonText:"ok"
  })
  navigate('/')
  }

  return (
    <>
      <Header />

      {
        userCart?.length > 0 ?
          <div  className='container my-5'>
            <h1 className='pt-5 text-info fw-bold'>User's Cart</h1>

            <div className='row'>
              <div className="col-lg-8 border shadow">
                <table className='table'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product</th>
                      <th>Image</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      userCart.map((item, index) => (
                        <tr key={item?.id}>
                          <td>{index + 1}</td>
                          <td>{item?.title}</td>
                          <td><img width={"50px"} height={"50px"} src={item?.thumbnail} alt="" /></td>
                          <td>
                            <div className='d-flex' >
                              <button onClick={()=>handleDecrement(item)}  className='btn fs-1 fw-bold'>-</button>
                              <input style={{ width: "50px" }} value={item?.quantity} type="text" className='form-control text-center' readOnly />
                              <button onClick={() => dispatch(incrementCart(item?.id))} className='btn fs-1 fw-bold'>+</button>
                            </div>
                          </td>
                          <td>{item?.totalPrice}</td>
                          <td><button onClick={() => dispatch(removeCartItem(item?.id))} className='btn text-danger fs-1 fw-bold'>X</button></td>
                        </tr>
                      ))
                    }
                  </tbody>

                </table>
                <div className='float-end p-3'>
                  <button onClick={()=>dispatch(emptyCart())} className='btn btn-danger'>EMPTY CART</button>
                  <Link to={"/"} className='btn btn-info ms-5'>SOHP MORE</Link>
                </div>

              </div>

              <div className="col-lg-4">
                <div className='border shadow rounded p-5 text-center'>
                  <h3>Total Amount : <span className='text-danger'>${cartTotal}</span></h3>
                  <hr />
                  <button onClick={handleCheckout} className='btn btn-success w-75'>CHECKOUT</button>

                </div>


              </div>


            </div>

          </div>
          :
          // empty cart
          <div className='d-flex justify-content-center align-items-center flex-column'>
            <img className='img-fluid ' src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-svg-download-png-6024626.png" alt="" />
            <h1>Your Cart is empty</h1>
            <Link to={'/'} className='btn btn-info'>ADD MORE</Link>

          </div>
      }
    </>
  )
}

export default Cart
