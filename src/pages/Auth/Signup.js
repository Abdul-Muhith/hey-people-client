import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Meta from '../../components/Meta/Meta';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

import Container from '../../components/Container/Container';
import CustomInput from '../../components/CustomInput/CustomInput';

// AFTER FEATURE CREATION

import * as Yup from 'yup';
import { useFormik } from 'formik';

import { userRegistration } from '../../features/auth/AuthSlice';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    if (authState?.registeredUser !== null && authState?.isError === false) {
      // navigate("/");
    }
  }, [authState])

  let registrationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is Required"),
    lastName: Yup.string().required("Last Name is Required"),
    email: Yup.string().email("Email Should be Valid").required("Email Address is Required"),
    mobile: Yup.string().required("Mobile is Required"),
    password: Yup.string().required("Password is Required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      password: '',
    },
    validationSchema: registrationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));

      dispatch(userRegistration(values));
      formik.resetForm();
    },
  });

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

  const emailError = formik.touched.email && formik.errors.email && (
    <div className='error'>
        {formik.errors.email}
    </div>
  )

  const mobileError = formik.touched.mobile && formik.errors.mobile && (
    <div className='error'>
        {formik.errors.mobile}
    </div>
  )

  const passwordError = formik.touched.password && formik.errors.password && (
    <div className='error'>
        {formik.errors.password}
    </div>
  )

  return (
    <>
      {/* <div>Signup</div> */}

      <Meta title='DGC | Signup'/>
      <BreadCrumb title='Account / Signup' />

      <Container class1='home-wrapper-2 py-3 auth-wrapper'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Sign Up</h3>

              <form className='d-flex flex-column gap-15' onSubmit={ formik.handleSubmit } >
                <CustomInput
                  type='text'
                  name='firstname'
                  placeholder='Type First Name'
                  label='First Name'
                  value={formik.values.firstname }
                  onChange={ formik.handleChange("firstName") }
                  onBlur={ formik.handleBlur("firstName") }
                />
                {firstNameError}

                <CustomInput
                  type='text'
                  name='lastname'
                  placeholder='Type Last Name'
                  label='Last Name'
                  value={formik.values.lastname }
                  onChange={ formik.handleChange("lastName") }
                  onBlur={ formik.handleBlur("lastName") }
                />
                {lastNameError}

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
                  type='tel'
                  name='mobile'
                  placeholder='Mobile Number'
                  label='Mobile Number'
                  value={formik.values.mobile }
                  onChange={ formik.handleChange("mobile") }
                  onBlur={ formik.handleBlur("mobile") }
                />
                {mobileError}

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

                <div>
                  <div className='d-flex flex-column justify-content-center align-items-center gap-15 mt-3'>
                    <button className='button border-0' type='submit'>Signup</button>
                    <Link to='../account/login' >Cancel</Link>
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

export default Signup;