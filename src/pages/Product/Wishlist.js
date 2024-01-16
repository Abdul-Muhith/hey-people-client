import React from 'react'
import Meta from '../../components/Meta/Meta';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

import Container from '../../components/Container/Container';
import './Product.css';

const Wishlist = () => {
  return (
    <>
      {/* <div>Wishlist</div> */}

      <Meta title='DGC | Wishlist'/>
      <BreadCrumb title='Wishlist' />

      <Container className='home-wrapper-2 py-5 wishlist-product-wrapper'>
        <div className='row'>

          <div className='col-3'>
            <div className='wishlist-product-card position-relative'>
              <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
              <div className='wishlist-card-image'>
                  <img src='images/watch.jpg' alt='watch' className='img-fluid w-100'/>
              </div>

              <div className='wishlist-product-details py-3 px-3'>
                <h5 className='title'>Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi_3G Tablet</h5>
                <h6 className='price mb-3 mt-3'>$ 100</h6>
              </div>
            </div>
          </div>

          <div className='col-3'>
            <div className='wishlist-product-card position-relative'>
              <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
              <div className='wishlist-card-image'>
                  <img src='images/watch.jpg' alt='watch' className='img-fluid w-100'/>
              </div>

              <div className='wishlist-product-details py-3 px-3'>
                <h5 className='title'>Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi_3G Tablet</h5>
                <h6 className='price mb-3 mt-3'>$ 100</h6>
              </div>
            </div>
          </div>

          <div className='col-3'>
            <div className='wishlist-product-card position-relative'>
              <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
              <div className='wishlist-card-image'>
                  <img src='images/watch.jpg' alt='watch' className='img-fluid w-100'/>
              </div>

              <div className='wishlist-product-details py-3 px-3'>
                <h5 className='title'>Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi_3G Tablet</h5>
                <h6 className='price mb-3 mt-3'>$ 100</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Wishlist;