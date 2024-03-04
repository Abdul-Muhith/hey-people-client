import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import moment from "moment";

import Meta from '../../components/Meta/Meta';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

import BlogCard from '../../components/Blog/BlogCard';
import Container from '../../components/Container/Container';
import './Blog.css';

import { getAllBlogs } from "../../features/blog/BlogSlice";

const Blog = () => {
    const dispatch = useDispatch();

    const blogState = useSelector((state) => state.blog?.blogs);

    // console.log('blogstate -> ', blogState);

    // TODO: create here a function that dispatches all blogs and call this function in useEffect

    useEffect(() => {
    dispatch(getAllBlogs());
    //   getBlogsAll();
    }, []);

    return (
        <>
            {/* <div>Blog</div> */}
            <Meta title="DGC | Blogs" />
            <BreadCrumb title="Blogs" />

            <Container class1='home-wrapper-2 py-5 blog-wrapper'>
                <div className='row'>
                    <div className='col-3'>
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Find By Categories</h3>
                            <div>
                                <ul className="ps-0">
                                    <li>Watch</li>
                                    <li>Tv</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col-9'>
                        <div className='row'>
                            {/* <div className='col-6 mb-3'><BlogCard /></div> */}
                            {/* <div className='col-6 mb-3'><BlogCard /></div> */}
                            {/* <div className='col-6 mb-3'><BlogCard /></div> */ }

                            { blogState?.map((item, i) => {
                                return (
                                    <div className='col-6 mb-3' key={i}>
                                        <BlogCard
                                            id={item?._id}
                                            title={item?.title}
                                            author={item?.author}
                                            category={item?.category}
                                            description={item?.description}
                                            createdAt={ moment(item?.createdAt).format('MMMM Do YYYY, h:mm:ss a') }
                                            // March 3rd 2024, 1:07:25 pm
                                            updatedAt={item?.updatedAt}
                                            images={item?.images[0]?.url}
                                            // images={item?.images}
                                            numViews={item?.numViews}
                                            likes={item?.likes}
                                            dislikes={item?.dislikes}
                                        />
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Blog;