import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { BiArrowBack } from 'react-icons/bi';

import Meta from '../../components/Meta/Meta';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

import CustomInput from "../../components/CustomInput/CustomInput";

import { toast } from 'react-toastify';

import * as Yup from 'yup';
import { useFormik, useField } from 'formik';

import Container from '../../components/Container/Container';
import './Checkout.css';

import { getUserAllOwnCarts, resetState } from '../../features/cart/CartSlice';

import axios from "axios";
import { config } from "../../utils/axiosConfig";

const Checkout = () => {
// const breadcrumbDivider = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8'><path d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='#{$breadcrumb-divider-color}'/></svg>";
  const [totalCartAmount, setTotalCartAmount] = useState(0);
  const [shippingAmount, setShippingAmount] = useState(0);
  const [shippingInfo, setShippingInfo] = useState(null);
  const dispatch = useDispatch();
  const allOwnCartsState = useSelector((state) => state.cart?.userAllOwnCarts);
  // console.log('allOwnCartsState', allOwnCartsState);

  let schema = Yup.object().shape({
    firstName: Yup.string().required("First Name is Required"),
    lastName: Yup.string().required("Last Name is Required"),
    address: Yup.string().required("Address Details is Required"),
    pincode: Yup.string().required("Pincode is Required"),
    state: Yup.string().required("State is Required"),
    city: Yup.string().required("City is Required"),
    country: Yup.string().required("Country is Required"),
    other: Yup.string().required("Other is Required"),
  });

  const formik = useFormik({
    // enableReinitialize: true,
    initialValues: {
      firstName: '',
      lastName: '',
      address: '',
      pincode: '',
      state: "",
      city: "",
      country: "",
      other: "",
      // other: cartOther || "",
    },
    validationSchema: schema,
    onSubmit: values => {
      setShippingInfo(values);

      checkoutHandler();

      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    dispatch(resetState());
    dispatch(getUserAllOwnCarts());
  }, [])

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < allOwnCartsState?.length; i++) {
      sum = sum + (Number(allOwnCartsState[i]?.quantity * allOwnCartsState[i]?.price));
      setTotalCartAmount(sum);
    }
  }, [allOwnCartsState])

  // TODO: payment getways

  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;

      script.onload = () => {
        resolve(true);
      }

      script.onerror = () => {
        resolve(false);
      }

      document.body.appendChild(script);
    })
  }

  const checkoutHandler = async () => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      alert("Razorpay SDK failed to Load");
      return;
    }

    // creating a new order
    const result = await axios.post("http://localhost:4000/api/v1/user/cart/order/checkout", "", config);
    // const result = await axios.post("http://localhost:3000/checkout");
    if (!result) {
      alert("Something went wrong");
      return;
    }

    // Getting the order details back
    const { amount, id: order_id, currency } = result.data;

    console.log('Order details -> ', result);

    const options = {
        key: "rzp_test_jk96M1tbCBGW2H", // Enter the Key ID generated from the Dashboard
        amount: amount.toString(),
        currency: currency,
        name: "Hey People",
        description: "Test Transaction",
        image: {  },
        order_id: order_id,
        handler: async function (response) {
            const data = {
                orderCreationId: order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
            };

            const result = await axios.post("http://localhost:4000/api/v1/user/cart/order/payment-verification", data);

            alert(result.data.msg);
        },
        prefill: {
            name: "Hey People",
            email: "hey@people.com",
            contact: "01785478956",
        },
        notes: {
            address: "Hey People Office",
        },
        theme: {
            color: "#61dafb",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  const firstNameError = formik.touched.firstName && formik.errors.firstName && (
    <div className='error'>
        {formik.errors.firstName}
    </div>
  )

  const lastNameError = formik.touched.lastName && formik.errors.lastName && (
    <div className='error'>
        {formik.errors.lastName}
    </div>
  )

  const addressError = formik.touched.address && formik.errors.address && (
    <div className='error'>
        {formik.errors.address}
    </div>
  )

  const pincodeError = formik.touched.pincode && formik.errors.pincode && (
    <div className='error'>
        {formik.errors.pincode}
    </div>
  )

  const stateError = formik.touched.state && formik.errors.state && (
    <div className='error'>
        {formik.errors.state}
    </div>
  )

  const cityError = formik.touched.city && formik.errors.city && (
    <div className='error'>
        {formik.errors.city}
    </div>
  )

  const otherError = formik.touched.other && formik.errors.other && (
    <div className='error'>
        {formik.errors.other}
    </div>
  )

  const countryError = formik.touched.country && formik.errors.country && (
    <div className='error'>
        {formik.errors.country}
    </div>
  )

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
              <form
                onSubmit={ formik.handleSubmit }
                className='d-flex flex-wrap justify-content-between gap-15'
              >
                <div className='w-100'>
                  <select
                    className='form-control form-select'
                    name="country"
                    onChange={ formik.handleChange("country") }
                    onBlur={ formik.handleBlur("country") }
                    value={formik.values.country }
                  >
                    <option value='' disabled selected>Select Country</option>
                    <option value='Bangladesh' defaultValue='Select Country' >Bangladesh</option>
                    <option value='India' >India</option>
                  </select>
                  {countryError}
                </div>

                <div className='flex-grow-1'>
                  {/* <input type='text' className='form-control' placeholder='First Name' /> */}
                  <CustomInput
                    type='text'
                    label='Enter First Name'
                    name='firstName'
                    onChange={ formik.handleChange("firstName") }
                    onBlur={ formik.handleBlur("firstName") }
                    value={formik.values.firstName }
                  />
                  { firstNameError }

                </div>

                <div className='flex-grow-1'>
                  {/* <input type='text' className='form-control' placeholder='Last Name' /> */}
                  <CustomInput
                    type='text'
                    label='Enter Last Name'
                    name='lastName'
                    onChange={ formik.handleChange("lastName") }
                    onBlur={ formik.handleBlur("lastName") }
                    value={formik.values.lastName }
                  />
                  { lastNameError }

                </div>

                <div className='w-100'>
                  {/* <input type='text' className='form-control' placeholder='Address' /> */}
                <CustomInput
                  type='text'
                  label='Enter Address'
                  name='address'
                  onChange={ formik.handleChange("address") }
                  onBlur={ formik.handleBlur("address") }
                  value={formik.values.address }
                />
                { addressError }

                </div>

                <div className='w-100'>
                  {/* <input type='text' className='form-control' placeholder='Apartment, suite, etc (optional)' /> */}
                  <CustomInput
                    type='text'
                    label='Enter Apartment, suite, etc'
                    name='other'
                    onChange={ formik.handleChange("other") }
                    onBlur={ formik.handleBlur("other") }
                    value={formik.values.other }
                  />
                  { otherError }

                </div>

                <div className='flex-grow-1'>
                  {/* <input type='text' className='form-control' placeholder='City' /> */}
                  <CustomInput
                    type='text'
                    label='Enter City'
                    name='city'
                    onChange={ formik.handleChange("city") }
                    onBlur={ formik.handleBlur("city") }
                    value={formik.values.city }
                  />
                  { cityError }

                </div>

                <div className='flex-grow-1'>
                  <div className="d-block mb-1">Select State</div>
                  <select
                    className='form-control form-select'
                    name="state"
                    onChange={ formik.handleChange("state") }
                    onBlur={ formik.handleBlur("state") }
                    value={formik.values.state }
                  >
                    <option disabled selected>Select State</option>
                    <option value='Dhaka' defaultValue='Dhaka' >Dhaka</option>
                    <option value='India' >India</option>
                  </select>

                  {stateError}
                </div>

                <div className='flex-grow-1'>
                  {/* <input type='text' className='form-control' placeholder='Zip Code' /> */}
                  <CustomInput
                    type='text'
                    label='Enter Pin Code'
                    name='pincode'
                    onChange={ formik.handleChange("pincode") }
                    onBlur={ formik.handleBlur("pincode") }
                    value={formik.values.pincode }
                  />
                  { pincodeError }

                </div>

                <div className='w-100'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <Link className='text-dark' to='/cart'>
                      <BiArrowBack /> Return to Cart
                    </Link>
                    <button className="button border-0" type="submit">Place Order</button>
                    <Link className='button button-next' to='/our-store'>Continue to Shopping</Link>
                  </div>
                  </div>
                <div></div>
                <div></div>
              </form>
            </div>
          </div>

          <div className="col-5">
            { allOwnCartsState && allOwnCartsState?.map((item, i) => {
              return (
                <div key={i} className='border-bottom py-4'>
                  <div className='d-flex align-items-center gap-10 mb-2'>
                    <div className='d-flex gap-10 w-75'>
                      <div className='position-relative w-25'>
                        <span
                          style={ { top: "-10px", right: "2px" } }
                          className='badge bg-secondary text-white rounded-circle p-2 position-absolute'
                        >{item?.quantity}</span>
                        <img
                          className='img-fluid'
                          src={item?.productId?.images[0]?.url ? item?.productId?.images[0]?.url : '/images/watch.jpg'}
                          alt='product'
                          width={ 100 }
                          height={100}
                        />
                      </div>
                      <div>
                        <h5 className='total-price'>{item?.productId?.title}</h5>
                        <p className='total-price'>s / {item?.color?.title}</p>
                      </div>
                    </div>
                    <div className='flex-grow-1'>
                      <h5>$ {item?.price * item?.quantity}</h5>
                    </div>
                  </div>
                </div>
              )
            })}

            <div className='border-bottom py-4'>
              <div className='d-flex justify-content-between align-items-center'>
                <p className='total'>Subtotal</p>
                <p className='total-price'>$ {totalCartAmount}</p>
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <p className='mb-0 total'>Shipping</p>
                <p className='mb-0 total-price'>$ {shippingAmount}</p>
              </div>
            </div>

            <div className='border-bottom py-4 d-flex justify-content-between align-items-center'>
              <h4 className='total'>Total</h4>
              <h5 className='total-price'>$ {totalCartAmount + shippingAmount}</h5>
            </div>

          </div>
        </div>
      </Container>
    </>
  )
}

export default Checkout;