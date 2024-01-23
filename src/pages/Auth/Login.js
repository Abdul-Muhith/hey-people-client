import { Link } from 'react-router-dom';

import Meta from '../../components/Meta/Meta';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

import Container from '../../components/Container/Container';
import CustomInput from '../../components/CustomInput/CustomInput';
import './Auth.css';

const Login = () => {
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
              <form className='d-flex flex-column gap-15'>
                  <CustomInput type='email' name='email' placeholder='Email' />
                  <CustomInput type='password' name='password' placeholder='Password' />
                <div className='text-end'>
                  <Link to='../account/forgot-password'>Forgot Password</Link>

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