import { Link } from 'react-router-dom';

import Meta from '../../components/Meta/Meta';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

import Container from '../../components/Container/Container';
import './Auth.css';
import CustomInput from '../../components/CustomInput/CustomInput';

const ResetPassword = () => {
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
              <form className='d-flex flex-column gap-15'>
                <CustomInput type='password' name='password' placeholder='Password' />
                <CustomInput type='password' name='confirmpassword' placeholder='Confirm Password' />
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