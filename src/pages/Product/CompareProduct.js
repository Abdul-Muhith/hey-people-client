import React from 'react'
import Meta from '../../components/Meta/Meta';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

import ProductColor from '../../components/Product/ProductColor';
import Container from '../../components/Container/Container';
import './Product.css';

const CompareProduct = () => {
  return (
    <>
      {/* <div>CompareProduct</div> */ }

      <Meta title='DGC | Compare Products' />
      <BreadCrumb title='Compare Products' />

      <Container class1='home-wrapper-2 py-5 compare-product-wrapper'>
        <div className='row'>
          <div className='col-3'>
            <div className='compare-product-card position-relative'>
              <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
              <div className='product-card-image'>
                  <img src='images/watch.jpg' alt='watch'/>
              </div>

              <div className='compare-product-details'>
                <h5 className='title'>Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi_3G Tablet</h5>
                <h6 className='price mb-3 mt-3'>$ 100</h6>
                <div>
                  <div className='d-flex justify-content-between align-items-center product-details'>
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </div>

                  <div className='d-flex justify-content-between align-items-center product-details'>
                    <h5>Type:</h5>
                    <p>Watch</p>
                  </div>

                  <div className='d-flex justify-content-between align-items-center product-details'>
                    <h5>Availibility:</h5>
                    <p>In Stock</p>
                  </div>

                  <div className='d-flex justify-content-between align-items-center product-details mb-2 gap-10'>
                    <h5 className='mb-0'>Color:</h5>
                    <ProductColor />
                  </div>

                  <div className='d-flex justify-content-between align-items-center product-details'>
                    <h5>Size:</h5>
                    <div className='d-flex gap-10'>
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-3'>
            <div className='compare-product-card position-relative'>
              <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
              <div className='product-card-image'>
                  <img src='images/watch.jpg' alt='watch'/>
              </div>

              <div className='compare-product-details'>
                <h5 className='title'>Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi_3G Tablet</h5>
                <h6 className='price mb-3 mt-3'>$ 100</h6>
                <div>
                  <div className='d-flex justify-content-between align-items-center product-details'>
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </div>

                  <div className='d-flex justify-content-between align-items-center product-details'>
                    <h5>Type:</h5>
                    <p>Watch</p>
                  </div>

                  <div className='d-flex justify-content-between align-items-center product-details'>
                    <h5>Availibility:</h5>
                    <p>In Stock</p>
                  </div>

                  <div className='d-flex justify-content-between align-items-center product-details mb-2 gap-10'>
                    <h5 className='mb-0'>Color:</h5>
                    <ProductColor />
                  </div>

                  <div className='d-flex justify-content-between align-items-center product-details'>
                    <h5>Size:</h5>
                    <div className='d-flex gap-10'>
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default CompareProduct;