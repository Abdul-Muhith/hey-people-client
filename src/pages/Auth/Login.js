import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Meta from '../../components/Meta/Meta';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

import Container from '../../components/Container/Container';
import CustomInput from '../../components/CustomInput/CustomInput';
import './Auth.css';

// AFTER FEATURE CREATION

import * as Yup from 'yup';
import { useFormik } from 'formik';

import { userLogin } from '../../features/auth/AuthSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const authState = useSelector((state) => state.auth);

  let loginSchema = Yup.object().shape({
    email: Yup.string().email("Email Should be Valid").required("Email Address is Required"),
    password: Yup.string().required("Password is Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));

      dispatch(userLogin(values));
      // formik.resetForm();
    },
  });

  useEffect(() => {
    if (authState?.user !== null && authState?.isError === false) {
      navigate('/');
    }
  }, [authState])

  const emailError = formik.touched.email && formik.errors.email && (
    <div className='error'>
        {formik.errors.email}
    </div>
  )

  const passwordError = formik.touched.password && formik.errors.password && (
    <div className='error'>
        {formik.errors.password}
    </div>
  )

  return (
    <>
      {/* <div>Login</div> */}

      <Meta title='DGC | Login'/>
      <BreadCrumb title='Account / Login' />

      <Container class1='home-wrapper-2 py-3 auth-wrapper'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Login</h3>
              <form className='d-flex flex-column gap-15' onSubmit={ formik.handleSubmit } >

                <CustomInput
                  type='email'
                  name='email'
                  placeholder='Enter Your Email'
                  label='Email Address'
                  value={formik.values.email }
                  onChange={ formik.handleChange("email") }
                  onBlur={ formik.handleBlur("email") }
                />
                {emailError}

                <CustomInput
                  type='password'
                  name='password'
                  placeholder='Password'
                  label='Strong Password'
                  value={formik.values.password }
                  onChange={ formik.handleChange("password") }
                  onBlur={ formik.handleBlur("password") }
                />
                {passwordError}

                <div className='text-end'>
                  <Link to='../account/forgot-password'>Forgot Password?</Link>

                  <div className='d-flex justify-content-center align-items-center gap-15 mt-3'>
                    <button className='button border-0' type='submit'>Login</button>
                    <Link to='../account/signup' className='button button-next'>Sign Up</Link>
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

export default Login;