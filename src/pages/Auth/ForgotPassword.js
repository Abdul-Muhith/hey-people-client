import { Link } from 'react-router-dom';

import Meta from '../../components/Meta/Meta';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

import './Auth.css';

const ForgotPassword = () => {
  return (
    <>
      {/* <div>ForgotPassword</div> */}

      <Meta title='DGC | Forgot Password'/>
      <BreadCrumb title='Account / Forgot Password' />

      <div className='home-wrapper-2 py-3 auth-wrapper'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='auth-card'>
                <h3 className='text-center mb-3'>Reset Your Password</h3>
                <p className='text-center'>We will send you an email to reset your password</p>

                <form className='d-flex flex-column gap-15'>
                  <div>
                    <input type='email' name='email' placeholder='Email' className='form-control'/>
                  </div>
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
        </div>
      </div>
    </>
  )
}

export default ForgotPassword;