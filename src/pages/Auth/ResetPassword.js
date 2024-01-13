import { Link } from 'react-router-dom';

import Meta from '../../components/Meta/Meta';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

import './Auth.css';

const ResetPassword = () => {
  return (
    <>
      {/* <div>ResetPassword</div> */}

      <Meta title='DGC | Reset Password'/>
      <BreadCrumb title='Account / Reset Password' />

      <div className='home-wrapper-2 py-3 auth-wrapper'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='auth-card'>
                <h3 className='text-center mb-3'>Reset Password</h3>
                <form className='d-flex flex-column gap-15'>
                  <div>
                    <input type='password' name='password' placeholder='Password' className='form-control'/>
                  </div>
                  <div>
                    <input type='password' name='confirmpassword' placeholder='Confirm Password' className='form-control'/>
                  </div>
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
        </div>
      </div>
    </>
  )
}

export default ResetPassword;