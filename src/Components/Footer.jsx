import React from 'react'
import { FaTruckFast } from "react-icons/fa6";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

function Footer() {
  return (
    <div style={{ backgroundColor: '#365f83', height: "330px" }} className='container-fluid text-light p-5'>
      <div className='row'>
        {/* First Column */}
        <div className='col-lg-5'>
          <h3 className='mb-2 text-white'>
            <FaTruckFast /> DailyCart</h3>
          <p> Designed and built with all the love in the world by the <br />
            Luminar team with the help of our contributors. </p>
          <p>Code licensed Luminar, docs CC BY 3.0.</p>
          <p>Currently v5.3.2.</p>
        </div>

        {/* Second Column */}
        <div className='col-lg-2'>
          <h3 className='mb-2 text-white'>Links</h3>
          <p className='mb-1'>Home</p>
          <p className='mb-1'>Wishlist</p>
          <p className='mb-1'>Cart</p>
        </div>

        {/* Third Column */}
        <div className='col-lg-2'>
          <h3 className='mb-2 text-white'>Guides</h3>
          <p className='mb-1'>React</p>
          <p className='mb-1'>React Bootstrap</p>
          <p className='mb-1'>React Router</p>
        </div>

        {/* Fourth Column */}
        <div className='col-lg-3'>
          <h3 className='mb-2 text-white'>Contact Us</h3>
          <div className='d-flex mb-4'>
            <input type="email" className='form-control' placeholder='Email Here' />
            <button className='btn text-light'>
              <IoIosArrowRoundForward className='fs-2' />
            </button>
          </div>

          <div className='d-flex justify-content-between fs-5'>
            <FaFacebookF />
            <FaTwitter />
            <FaWhatsapp />
            <FaInstagram />
            <FaEnvelope />
            <FaPhone />
          </div>

        </div>

      </div>

      <div className='row mt-5'>
        <div className='col-12 text-center'>
          <h6 className='text-white'>
            Copyright © August 2025 Batch, Daily Cart.
            Built with React Redux.
          </h6>
        </div>
      </div>

    </div>
  )
}

export default Footer