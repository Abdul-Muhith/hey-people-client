import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { HiOutlineArrowLeft } from 'react-icons/hi';

import Meta from '../../components/Meta/Meta';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

// import blog from '../../../public/images/blog-1.jpg';

import Container from '../../components/Container/Container';
import './Blog.css';

import { getSingleBlog, resetState } from "../../features/blog/BlogSlice";

const SingleBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const getBlogId = (location.pathname.split('/')[2]);

  const singleBlog = useSelector((state) => state.blog?.singleBlog);

  // console.log('location: ', location);
  // console.log('getBlogId: ', getBlogId);
  // console.log('singleBlog: ', singleBlog?.images);

  useEffect(() => {
    if (getBlogId !== undefined) {
      dispatch(resetState());
      dispatch(getSingleBlog(getBlogId));
    } else {
      dispatch(resetState());
    }
  }, [getBlogId]);

  return (
    <>
      {/* <div>SingleBlog</div> */}

      {/* <Meta title="DGC | Dynamic Blog Name" /> */}
      {/* <BreadCrumb title="Blogs / Dynamic Blog Name" /> */}
      <Meta title={`DGC | ${singleBlog?.title}`} />
      <BreadCrumb title={`Blogs / ${singleBlog?.title}`} />

      <Container class1='home-wrapper-2 py-5 blog-wrapper'>
        <div className='row'>
          <div className='col-12'>
            <div className='single-blog-card'>
              <Link to='/blogs' className='d-flex align-items-center gap-10'>
                <HiOutlineArrowLeft className='fs-4' />
                Go Back to Blogs
              </Link>

              <h3>{singleBlog?.title}</h3>

              <img
                alt='blog'
                className='img-fluid w-100 my-4'
                // src={(singleBlog?.images[0]?.url) ? (singleBlog?.images[0]?.url) : 'images/blog-1.jpg'}
                src={ singleBlog?.images ? singleBlog?.images : 'images/blog-1.jpg' }
                // src='images/blog-1.jpg'
              />

              <p
                  dangerouslySetInnerHTML={ { __html: singleBlog?.description } }
              >
              </p>
            </div>

            {/* <div className='single-blog-card'>
              <Link to='/blogs' className='d-flex align-items-center gap-10'>
                <HiOutlineArrowLeft className='fs-4' />
                Go Back to Blogs
              </Link>

              <h3>A Beautiful Sunday Morning Renaissance</h3>
              <img src='images/blog-1.jpg' className='img-fluid w-100 my-4' alt='blog' />
              <p>You're only as good as your last collection, which is an enormous pressure. I think there is something about luxury it's not something people need, but it's what they want. It really pulls at their heart. I have a fantastic relationship with money. Sceleriswue sociosqu ullamcorper urna nisl mollis vestibulum pretium commodo inceptos cum condimentum placerat diam venenatis blandit hac eget dis lacus a parturient a accumsan nisl ante vestibulum.</p>
            </div> */}
          </div>
        </div>
      </Container>
    </>
  )
}

export default SingleBlog;