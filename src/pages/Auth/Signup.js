import { Link } from 'react-router-dom';

import Meta from '../../components/Meta/Meta';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

const Signup = () => {
  return (
    <>
      {/* <div>Signup</div> */}

      <Meta title='DGC | Signup'/>
      <BreadCrumb title='Account / Signup' />

      <div className='home-wrapper-2 py-3 auth-wrapper'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='auth-card'>
                <h3 className='text-center mb-3'>Sign Up</h3>
                <form className='d-flex flex-column gap-15'>
                  <div>
                    <input type='text' name='name' placeholder='Name' className='form-control'/>
                  </div>
                  <div>
                    <input type='email' name='email' placeholder='Email' className='form-control'/>
                  </div>
                  <div>
                    <input type='tel' name='mobile' placeholder='Mobile Number' className='form-control'/>
                  </div>
                  <div>
                    <input type='password' name='password' placeholder='Password' className='form-control'/>
                  </div>
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
        </div>
      </div>
    </>
  )
}

export default Signup;