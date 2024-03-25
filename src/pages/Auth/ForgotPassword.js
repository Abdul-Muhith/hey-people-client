import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Meta from '../../components/Meta/Meta';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

import './Auth.css';

import Container from '../../components/Container/Container';
import CustomInput from '../../components/CustomInput/CustomInput';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import { forgotPasswordToken } from '../../features/auth/AuthSlice';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  let schema = Yup.object().shape({
    email: Yup.string().email("Email Should be Valid").required("Email Address is Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: schema,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));

      dispatch(forgotPasswordToken(values));
      formik.resetForm();

      setTimeout(() => {
          // navigate('/');
      }, 300)
    },
  });

  const emailError = formik.touched.email && formik.errors.email && (
    <div className='error'>
        {formik.errors.email}
    </div>
  )

  return (
    <>
      {/* <div>ForgotPassword</div> */}

      <Meta title='DGC | Forgot Password'/>
      <BreadCrumb title='Account / Forgot Password' />

      <Container class1='home-wrapper-2 py-3 auth-wrapper'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Forgot Your Password?</h3>
              <p className='text-center'>We will send you an email to reset your password</p>

              <form className='d-flex flex-column gap-15' onSubmit={ formik.handleSubmit } >
                <CustomInput
                  type='email'
                  name='email'
                  placeholder='Enter Your Email Used During Registration'
                  label='Email Address'
                  value={formik.values.email }
                  onChange={ formik.handleChange("email") }
                  onBlur={ formik.handleBlur("email") }
                />
                {emailError}

                <div>
                  <div className='d-flex flex-column justify-content-center align-items-center gap-15 mt-3'>
                    <button className='button border-0' type='submit'>Submit</button>
                    <Link to='../account/login'>Cancel</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ForgotPassword;