import { Link } from 'react-router-dom';

import Meta from '../../components/Meta/Meta';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

import Container from '../../components/Container/Container';
import CustomInput from '../../components/CustomInput/CustomInput';

const Signup = () => {
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
              <form className='d-flex flex-column gap-15'>
                  <CustomInput type='text' name='name' placeholder='Name' />
                  <CustomInput type='email' name='email' placeholder='Email' />
                  <CustomInput type='tel' name='mobile' placeholder='Mobile Number' />
                  <CustomInput type='password' name='password' placeholder='Password' />
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