import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Meta from '../../components/Meta/Meta';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Container from '../../components/Container/Container';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import { FiEdit } from 'react-icons/fi';

import { updateOwnProfile } from '../../features/profile/ProfileSlice';

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  let profileSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is Required"),
    lastName: Yup.string().required("Last Name is Required"),
    email: Yup.string().email("Email Should be Valid").required("Email Address is Required"),
    mobile: Yup.string().required("Mobile is Required"),
    role: Yup.string().required("Role is Required"),
    password: Yup.string().required("Password is Required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      role: '',
      password: '',
    },
    validationSchema: profileSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));

      if (edit === true) {
        dispatch(updateOwnProfile(values));
        // formik.resetForm();
      }
        // setEdit(false);
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

  const roleError = formik.touched.role && formik.errors.role && (
    <div className='error'>
        {formik.errors.role}
    </div>
  )

  const passwordError = formik.touched.password && formik.errors.password && (
    <div className='error'>
        {formik.errors.password}
    </div>
  )

  return (
        <>
      <Meta title="DGC | Profiles" />
      <BreadCrumb title="My Profile" />

      <Container class1="home-wrapper-2 py-5 profile-wrapper">
        <div className='row'>
          <div className='col-12'>
            <div className='d-flex justify-content-center gap-3 align-items-center'>
              <h3 className='text-center'>{ edit ? "Update Profile" : "Your Profile" }</h3>
                <FiEdit
                className='fs-4'
                style={{cursor: 'pointer'}}
                  onClick={ () => setEdit(!edit) }
                  />
            </div>
          </div>

          { edit &&
            <div className='col-12'>
              <form onSubmit={ formik.handleSubmit }>
                <div className="mt-3">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    className="form-control"
                    value={ formik.values.firstName }
                    onChange={ formik.handleChange("firstName") }
                    onBlur={ formik.handleBlur("firstName") }
                  />
                </div>
                { firstNameError }

                <div className="mt-3">
                  <label htmlFor="lastName" className="form-label" >Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    className="form-control"
                    value={ formik.values.lastName }
                    onChange={ formik.handleChange("lastName") }
                    onBlur={ formik.handleBlur("lastName") }
                  />
                </div>
                { lastNameError }

                <div className="mt-3">
                  <label htmlFor="mobile" className="form-label">Mobile</label>
                  <input
                    id="mobile"
                    type="number"
                    className="form-control"
                    value={ formik.values.mobile }
                    onChange={ formik.handleChange("mobile") }
                    onBlur={ formik.handleBlur("mobile") }
                  />
                </div>
                { mobileError }

                <div className="mt-3">
                  <label htmlFor="role" className="form-label">Role</label>
                  <input
                    id="role"
                    type="text"
                    className="form-control"
                    value={ formik.values.role }
                    onChange={ formik.handleChange("role") }
                    onBlur={ formik.handleBlur("role") }
                  />
                </div>
                { roleError }

                <div className="mt-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    value={ formik.values.email }
                    onChange={ formik.handleChange("email") }
                    onBlur={ formik.handleBlur("email") }
                  />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                { emailError }

                <div className="mt-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={ formik.values.password }
                    onChange={ formik.handleChange("password") }
                    onBlur={ formik.handleBlur("password") }
                  />
                </div>
                { passwordError }

                <div className="mt-3 text-center">
                  <button type="submit" className="btn btn-primary">Save</button>
                </div>
              </form>
            </div>
          }
        </div>
      </Container>
    </>
  )
}

export default Profile;