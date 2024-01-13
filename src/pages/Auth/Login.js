import { Link } from 'react-router-dom';

import Meta from '../../components/Meta/Meta';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

import './Auth.css';

const Login = () => {
  return (
    <>
      {/* <div>Login</div> */}

      <Meta title='DGC | Login'/>
      <BreadCrumb title='Account / Login' />

      <div className='home-wrapper-2 py-3 auth-wrapper'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='auth-card'>
                <h3 className='text-center mb-3'>Login</h3>
                <form className='d-flex flex-column gap-15'>
                  <div>
                    <input type='email' name='email' placeholder='Email' className='form-control'/>
                  </div>
                  <div>
                    <input type='password' name='password' placeholder='Password' className='form-control'/>
                  </div>
                  <div>
                    <Link to='../account/forgot-password' className='text-end d-block'>Forgot Password</Link>

                    <div className='d-flex justify-content-center align-items-center gap-15 mt-3'>
                      <button className='button border-0' type='submit'>Login</button>
                      <Link to='../account/signup' className='button button-next'>Sign Up</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;