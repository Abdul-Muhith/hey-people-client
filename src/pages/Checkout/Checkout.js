import { Link } from 'react-router-dom';

import { BiArrowBack } from 'react-icons/bi';

import Meta from '../../components/Meta/Meta';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

import Container from '../../components/Container/Container';
import './Checkout.css';

const Checkout = () => {
// const breadcrumbDivider = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8'><path d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='#{$breadcrumb-divider-color}'/></svg>";

  return (
    <>
      {/* <div>Checkout</div> */}

      <Meta title="DGC | Checkout" />
      <BreadCrumb title="Checkout" />

      <Container class1="home-wrapper-2 py-5 checkout-wrapper">
        <div className="row">
          <div className="col-7">
            <div className='checkout-left-data'>
              <h3>DGC</h3>
              <nav style={ {"--bs-breadcrumb-divider": ">"} } aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className='text-dark total-price' to='/cart'>Cart</Link>
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item active total-price" aria-current="page">Information</li>
                  &nbsp; /
                  <li className="breadcrumb-item active total-price" aria-current="page">Shipping</li>
                  &nbsp; /
                  <li className="breadcrumb-item active total-price" aria-current="page">Payment</li>
                </ol>
              </nav>
              <h4 className='title total'>Contact Information</h4>
              <p className='user-details total'>hey people (hey.people.mern@gmail.com)</p>
              <h4 className='mb-3'>Shipping Address</h4>
              <form className='d-flex flex-wrap justify-content-between gap-15'>
                <div className='w-100'>
                  <select className='form-control form-select'>
                    <option value=''>Select Country</option>
                    <option value='' defaultValue='Select Country' disabled>Select Country</option>
                  </select>
                </div>
                <div className='flex-grow-1'>
                  <input type='text' className='form-control' placeholder='First Name' />
                </div>
                <div className='flex-grow-1'>
                  <input type='text' className='form-control' placeholder='Last Name' />
                </div>
                <div className='w-100'>
                  <input type='text' className='form-control' placeholder='Address' />
                </div>
                <div className='w-100'>
                  <input type='text' className='form-control' placeholder='Apartment, suite, etc (optional)' />
                </div>
                <div className='flex-grow-1'>
                  <input type='text' className='form-control' placeholder='City' />
                </div>
                <div className='flex-grow-1'>
                  <select className='form-control form-select'>
                    <option value=''>Select State</option>
                    <option value=''>Dhaka</option>
                  </select>
                </div>
                <div className='flex-grow-1'>
                  <input type='text' className='form-control' placeholder='Zip Code' />
                </div>
                <div className='w-100'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <Link className='text-dark' to='/cart'>
                      <BiArrowBack /> Return to Cart
                    </Link>
                  <Link className='button' to='/our-store'>Continue to Shopping</Link>
                  </div>
                  </div>
                <div></div>
                <div></div>
              </form>
            </div>
          </div>

          <div className="col-5">
            <div className='border-bottom py-4'>
              <div className='d-flex align-items-center gap-10 mb-2'>
                <div className='d-flex gap-10 w-75'>
                  <div className='position-relative w-25'>
                    <span style={{top: "-10px", right: "2px"}} className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>1</span>
                    <img className='img-fluid' src='/images/watch.jpg' alt='product'/>
                  </div>
                  <div>
                    <h5 className='total-price'>title</h5>
                    <p className='total-price'>price</p>
                  </div>
                </div>
                <div className='flex-grow-1'>
                  <h5>$ 100</h5>
                </div>
              </div>
            </div>

            <div className='border-bottom py-4'>
              <div className='d-flex justify-content-between align-items-center'>
                <p className='total'>Subtotal</p>
                <p className='total-price'>$ 1000</p>
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <p className='mb-0 total'>Shipping</p>
                <p className='mb-0 total-price'>$ 1000</p>
              </div>
            </div>

            <div className='border-bottom py-4 d-flex justify-content-between align-items-center'>
              <h4 className='total'>Total</h4>
              <h5 className='total-price'>$ 1000</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Checkout;