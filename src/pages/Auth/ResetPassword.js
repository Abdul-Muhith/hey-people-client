import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Meta from '../../components/Meta/Meta';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

import Container from '../../components/Container/Container';
import CustomInput from '../../components/CustomInput/CustomInput';

import './Auth.css';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import { toast } from 'react-toastify';

import { resetOwnPasswordByToken } from '../../features/auth/AuthSlice';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const getPasswordResetToken = location.pathname.split('/')[3];
  // console.log('getPasswordResetToken', getPasswordResetToken);

  let schema = Yup.object().shape({
    password: Yup.string().required("Password is Required"),
    confirmPassword: Yup.string().required("Confirm Password is Required"),
  });

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: schema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));

      if (values.confirmPassword !== values.password) {
        toast.error("Password Doesn't Matched!")

        formik.resetForm();
      } else {
        const data = {
          token: getPasswordResetToken,
          password: values.password
        }

        dispatch(resetOwnPasswordByToken(data));

        setTimeout(() => {
          navigate('/account/login');
        }, 300)
      };
    },
  });

  const passwordError = formik.touched.password && formik.errors.password && (
    <div className='error'>
        {formik.errors.password}
    </div>
  )

  const confirmPasswordError = formik.touched.confirmPassword && formik.errors.confirmPassword && (
    <div className='error'>
        {formik.errors.confirmPassword}
    </div>
  )

  return (
    <>
      {/* <div>ResetPassword</div> */}

      <Meta title='DGC | Reset Password'/>
      <BreadCrumb title='Account / Reset Password' />

      <Container class1='home-wrapper-2 py-3 auth-wrapper'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Reset Password</h3>
              <form className='d-flex flex-column gap-15' onSubmit={ formik.handleSubmit }>
                <CustomInput
                  type='password'
                  name='password'
                  placeholder='Enter Your Password'
                  label='Strong Password'
                  value={formik.values.password }
                  onChange={ formik.handleChange("password") }
                  onBlur={ formik.handleBlur("password") }
                />
                {passwordError}

                <CustomInput
                  type='password'
                  name='confirmPassword'
                  placeholder='Confirm Your Password'
                  label='Confirm Password'
                  value={formik.values.confirmPassword }
                  onChange={ formik.handleChange("confirmPassword") }
                  onBlur={ formik.handleBlur("confirmPassword") }
                />
                {confirmPasswordError}

                <div>
                  <div className='d-flex flex-column justify-content-center align-items-center gap-15 mt-3'>
                    <button className='button border-0' type='submit'>OK</button>
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

export default ResetPassword;