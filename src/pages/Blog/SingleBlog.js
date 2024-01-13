import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';

import Meta from '../../components/Meta/Meta';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

import './Blog.css';

const SingleBlog = () => {
  return (
    <>
      {/* <div>SingleBlog</div> */}

      <Meta title="DGC | Dynamic Blog Name" />
      <BreadCrumb title="Blogs / Dynamic Blog Name" />

      <div className='home-wrapper-2 py-5 blog-wrapper'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='single-blog-card'>
                <Link to='/blogs' className='d-flex align-items-center gap-10'>
                  <HiOutlineArrowLeft className='fs-4' />
                  Go Back to Blogs
                </Link>

                <h3>A Beautiful Sunday Morning Renaissance</h3>
                <img src='images/blog-1.jpg' className='img-fluid w-100 my-4' alt='blog' />
                <p>You're only as good as your last collection, which is an enormous pressure. I think there is something about luxury it's not something people need, but it's what they want. It really pulls at their heart. I have a fantastic relationship with money. Sceleriswue sociosqu ullamcorper urna nisl mollis vestibulum pretium commodo inceptos cum condimentum placerat diam venenatis blandit hac eget dis lacus a parturient a accumsan nisl ante vestibulum.</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleBlog;