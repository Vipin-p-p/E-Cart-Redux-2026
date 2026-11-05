import React from 'react'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <div className='container my-5'>
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
              <tr>
                <td>1</td>
                <td>Perfume</td>
                <td><img width={"50px"} height={"50px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9VlkeeuHL8P8yBXQU2xNEva4Ta6KXUYfHfUOQSXmULQ&s=10" alt="" /></td>
                <td>
                  <div className='d-flex'>
                    <button className='btn fs-1'>-</button>
                    <input style={{width:"50px"}} value={10} type="text" className='form-control' readOnly />
                    <button className='btn fs-1'>+</button>
                  </div>
                </td>
                <td>$30</td>
                <td><button className='btn text-danger fs-1 fw-bold'>X</button></td>
              </tr>
            </tbody>

          </table>
          <div className='float-end p-3'>
            <button className='btn btn-danger'>EMPTY CART</button>
            <Link to={"/"} className='btn btn-info ms-5'>SOHP MORE</Link>
          </div>

        </div>

        <div className="col-lg-4">
          <div className='border shadow rounded p-5 text-center'>
            <h3>Total Amount : <span className='text-danger'>$30</span></h3>
            <hr />
            <button className='btn btn-success w-75'>CHECKOUT</button>
            
          </div>


        </div>


      </div>
      
    </div>
  )
}

export default Cart
