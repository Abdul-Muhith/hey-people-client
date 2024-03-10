import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Meta from '../../components/Meta/Meta';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

import { AiFillDelete } from 'react-icons/ai';

import { toast } from 'react-toastify';

import Container from '../../components/Container/Container';
import './Cart.css';

import { getUserAllOwnCarts, removeProductFromOwnCart, updateProductQuantityFromOwnCart, resetState } from '../../features/cart/CartSlice';

const Cart = () => {
  const [productQuantity, setProductQuantity] = useState(null);
  const [productId, setProductId] = useState(null);
  const [productForm, setProductForm] = useState(null);
  const [totalCartAmount, setTotalCartAmount] = useState(0);
  const dispatch = useDispatch();

  const allOwnCartsState = useSelector((state) => state.cart?.userAllOwnCarts);
  // console.log('allOwnCartsState', allOwnCartsState);

  const deleteProduct = (id) => {
    dispatch(removeProductFromOwnCart(id));

    setTimeout(() => {
      dispatch(getUserAllOwnCarts());
    }, 200);
  }

  const updateProductQuantity = (cartItemId, quantity) => {
    dispatch(updateProductQuantityFromOwnCart({
      cartItemId,
      quantity
    }));

    setTimeout(() => {
      dispatch(getUserAllOwnCarts());
    }, 200);
  };

  const handleChange = (id, e) => {
    console.log('quantity -> ', e.target.value);
    console.log('product ID -> ', id);
    // console.log('handleChange -> ', e.target.name);
    // setProductQuantity(e.target.value);
    // setProductId(product);
    setProductForm({
      cartItemId: id,
      quantity: e.target.value
    });
  };

  useEffect(() => {
    dispatch(resetState());
    dispatch(getUserAllOwnCarts());
  }, [])

  useEffect(() => {
    if (productForm !== null) {
      dispatch(updateProductQuantityFromOwnCart({
        cartItemId: productForm?.cartItemId,
        quantity: productForm?.quantity
      }));
    }

      setTimeout(() => {
        dispatch(getUserAllOwnCarts());
        setProductForm(null);
      }, 200);
  }, [productForm])

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < allOwnCartsState?.length; i++) {
      sum = sum + (Number(allOwnCartsState[i]?.quantity * allOwnCartsState[i]?.price));
      setTotalCartAmount(sum);
    }
  }, [allOwnCartsState])

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
                        <input
                          type='number'
                          className='form-control'
                          min={ 1 }
                          max={ 10 }
                          name={item?._id}
                          id=''
                          // value={ productForm?.quantity ? productForm.quantity : item?.quantity }
                          value={ item?.quantity }
                          onChange={ (e) => setProductForm({
                            cartItemId: item?._id,
                            quantity: e.target.value
                          }) }
                        />
                      </div>
                      <div>
                        <AiFillDelete
                          className='text-danger'
                          onClick={() => deleteProduct(item?._id)}
                        />
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
                  <h4>Subtotal: $ {totalCartAmount}</h4>
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