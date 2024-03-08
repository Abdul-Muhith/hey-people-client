import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Meta from '../../components/Meta/Meta';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

import { AiFillDelete } from 'react-icons/ai';

import { toast } from 'react-toastify';

import Container from '../../components/Container/Container';
import './Cart.css';

import { getUserAllOwnCarts, resetState } from '../../features/cart/CartSlice';

const Cart = () => {
  const dispatch = useDispatch();

  const allOwnCartsState = useSelector((state) => state.cart?.userAllOwnCarts);
  console.log('allOwnCartsState', allOwnCartsState);

  useEffect(() => {
    dispatch(resetState());
    dispatch(getUserAllOwnCarts());
  }, [])

  return (
    <>
      {/* <div>Cart</div> */}

      <Meta title="DGC | Cart" />
      <BreadCrumb title="Cart" />

      <Container class1="home-wrapper-2 py-5 cart-wrapper">
          <div className="row">
            <div className="col-12">
              <div className='cart-header py-3 d-flex align-items-center justify-content-between'>
                <h4 className='cart-col-1'>Product</h4>
                <h4 className='cart-col-2'>Price</h4>
                <h4 className='cart-col-3'>Quantity</h4>
                <h4 className='cart-col-4'>Total</h4>
              </div>

              { allOwnCartsState && allOwnCartsState?.map((item, i) => {
                return (
                  <div className='cart-data py-3 mb-2 d-flex align-items-center justify-content-between' key={i}>
                    <div className='cart-col-1'>
                      <div className='d-flex align-items-center gap-15'>
                        <div className='w-25'>
                          <img className='img-fluid' src='/images/watch.jpg' alt='product image'/>
                        </div>
                        <div className='w-75'>
                          <p>{ item?.productId?.title}</p>
                          <p className="d-flex gap-3">
                            Color :
                            <ul className="colors ps-0 list-unstyled mb-0">
                              <li style={{backgroundColor: item?.color?.title}}></li>
                            </ul>
                          </p>
                          <p>size</p>
                        </div>
                      </div>
                    </div>

                    <div className='cart-col-2'>
                      <h5 className='price'>$ {item?.price}</h5>
                    </div>

                    <div className='cart-col-3 d-flex align-items-center gap-15'>
                      <div>
                        <input type='number' className='form-control' min={1} max={10} name='' id='' value={item?.quantity} />
                      </div>
                      <div>
                        <AiFillDelete className='text-danger' />
                      </div>
                    </div>

                    <div className='cart-col-4'>
                      <h5 className='price'>$ {item?.price * item?.quantity}</h5>
                    </div>
                  </div>
                )
              })}
{/*
              <div className='cart-data py-3 mb-2 d-flex align-items-center justify-content-between'>
                <div className='cart-col-1'>
                  <div className='d-flex align-items-center gap-15'>
                    <div className='w-25'>
                      <img className='img-fluid' src='/images/watch.jpg' alt='product image'/>
                    </div>
                    <div className='w-75'>
                      <p>title</p>
                      <p>color</p>
                      <p>size</p>
                    </div>
                  </div>
                </div>

                <div className='cart-col-2'>
                  <h5 className='price'>$ 100</h5>
                </div>

                <div className='cart-col-3 d-flex align-items-center gap-15'>
                  <div>
                    <input type='number' className='form-control' min={1} max={10} name='' id='' />
                  </div>
                  <div>
                    <AiFillDelete className='text-danger' />
                  </div>
                </div>

                <div className='cart-col-4'>
                  <h5 className='price'>$ 100</h5>
                </div>
              </div> */}
            </div>

            <div className='col-12 py-2 mt-4'>
              <div className='d-flex justify-content-between align-items-baseline'>
                <Link className='button' to='/our-store'>Continue to Shopping</Link>
                <div className='d-flex flex-column align-items-end'>
                  <h4>Subtotal: $ 1000</h4>
                  <p>Taxes and shipping calculated at checkout</p>
                  <Link className='button button-next' to='/checkout'>Checkout</Link>
              </div>
              </div>
            </div>
          </div>
        </Container>
    </>
  )
}

export default Cart;