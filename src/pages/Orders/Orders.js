import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Meta from '../../components/Meta/Meta';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Container from '../../components/Container/Container';

import { getAllOwnOrders, resetState } from '../../features/orders/OrdersSlice';

const Orders = () => {
  const dispatch = useDispatch();

  const ownOrderState = useSelector((state) => state.order?.ownOrders);
  console.log('ownOrderState', ownOrderState);

  useEffect(() => {
    // dispatch(resetState());
    dispatch(getAllOwnOrders());
  }, []);

  return (
    <>
      <Meta title="DGC | My Orders" />
      <BreadCrumb title="My Orders" />

      <Container class1="home-wrapper-2 py-5 cart-wrapper">
        <div className='row'>
          <div className='col-12'>
            <div className='row'>
              <div className='col-3'>
                <h5>Order Id</h5>
              </div>
              <div className='col-3'>
                <h5>Total Amount</h5>
              </div>
              <div className='col-3'>
                <h5>Total Amount After Discount</h5>
              </div>
              <div className='col-3'>
                <h5>Status</h5>
              </div>
            </div>
          </div>

          <div className='col-12 mt-3'>
            { ownOrderState && ownOrderState?.map((item, index) => {
              return (
              <div className='row pt-3' style={{backgroundColor: "#febd69"}} key={index}>
                <div className='col-3'>
                  <p>{item?._id}</p>
                </div>
                <div className='col-3'>
                  <p>{item?.totalPrice}</p>
                </div>
                <div className='col-3'>
                  <p>{ item?.totalAfterDiscount }</p>
                </div>
                <div className='col-3'>
                  <p>{item?.orderStatus}</p>
                </div>

                <div className='col-12'>
                  <div className='row p-3' style={{backgroundColor: "#232f3e"}}>
                    <div className='col-3'>
                      <h6 className='text-white'>Product Name</h6>
                    </div>
                    <div className='col-3'>
                      <h6 className='text-white'>Quantity</h6>
                    </div>
                    <div className='col-3'>
                      <h6 className='text-white'>Price</h6>
                    </div>
                    <div className='col-3'>
                      <h6 className='text-white'>Color</h6>
                    </div>

                      { item?.products?.map((item, i) => {
                        return (
                          <div className='col-12' key={i}>
                            <div className='row'>
                              <div className='col-3'>
                                <p className='mb-0 text-white'>{item?.product?.title}</p>
                              </div>
                              <div className='col-3'>
                                <p className='mb-0 text-white'>{item?.count}</p>
                              </div>
                              <div className='col-3'>
                                <p className='mb-0 text-white'>{item?.product?.price}</p>
                              </div>
                              <div className='col-3'>
                                <p className='mb-0 text-white'>
                                  <ul className="colors ps-0 list-unstyled mb-0">
                                    <li style={{backgroundColor: item?.color}}></li>
                                  </ul>
                                </p>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                  </div>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </Container>
    </>
  )
}

export default Orders;