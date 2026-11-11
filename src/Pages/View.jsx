import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Header from '../Components/Header';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { addCart } from '../redux/slices/cartSlice';



function View() {
  const { id } = useParams()
  // console.log(id);
  const { allProducts } = useSelector(state => state.productReducer)
  const [product, setProduct] = useState({})

  const userWishlist = useSelector(state => state.wishlistReducer)

  const userCart = useSelector(state => state.cartReducer)

  const dispatch = useDispatch()


  console.log(userWishlist);


  useEffect(() => {
    setProduct(allProducts?.find(item => item.id == id))
  }, [])
  // console.log(product);


  const handleWishlist = () => {
    //check the product already in the wishlist
    const existingItem = userWishlist?.find(item => item?.id == product.id)
    if (existingItem) {
      Swal.fire({
        title: "Sorry",
        text: "Product Already In Your Wishlist",
        icon: "Error",
        confirmButtonText: "Ok"

      })
    } else {
      dispatch(addToWishlist(product))

    }
  }


  const handleCart = () => {
    //check the product already in the cart
    const existingItem = userCart?.find(item => item?.id == product.id)
    dispatch(addCart(product))
    Swal.fire({
      title: "Success",
      text: existingItem ? `${existingItem.title} Quantity Incremented` : "Product Added To Your Cart",
      icon: "Success",
      confirmButtonText: "Ok"

    })
  }


  return (
    <>
      <Header />

      <div className='container my-5 pt-5'>
        <div className='row align-items-center'>
          <div className="col-lg-6 text-center">
            <img className='img-fluid h-25' src={product?.thumbnail} alt="no image" />
            <div className='d-flex justify-content-evenly mt-5'>
              <button className='btn btn-info' onClick={handleWishlist}>ADD TO WISHLIST</button>
              <button className='btn btn-success' onClick={handleCart}>ADD TO CART</button>
            </div>


          </div>

          <div className="col-lg-6">
            <h3 className='fw-bold'> {product?.title}</h3>
            <h2 className='fw-bold'>$ {product?.price}</h2>
            <h4 className='fw-bold'>Brand : {product?.brand} </h4>
            <h4 className='fw-bold'>Category : {product?.category} </h4>
            <h4 className='fw-bold'>Description : {product?.description} </h4>
            <h5 className='fw-bold'>Client Reviews</h5>
            {
              product?.reviews?.map((item, index) => (
                <div key={index} className='border rounded shadow p-2 my-5'>
                  <p> <span className='fw-bold'>Name : {item?.reviewerName}</span> Message : {item?.comment} </p>
                  <p>Rating : {item?.rating} <FontAwesomeIcon icon={faStar} className='text-warning' /> </p>

                </div>
              ))
            }


          </div>

        </div>

      </div>
    </>
  )
}

export default View
