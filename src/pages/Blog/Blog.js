import Meta from '../../components/Meta/Meta';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

import BlogCard from '../../components/Blog/BlogCard';
import './Blog.css';

const Blog = () => {
    return (
        <>
            {/* <div>Blog</div> */}
            <Meta title="DGC | Blogs" />
            <BreadCrumb title="Blogs" />

            <div className='home-wrapper-2 py-5 blog-wrapper'>
                <div className='container-xxl'>
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
                                <div className='col-6 mb-3'><BlogCard /></div>
                                <div className='col-6 mb-3'><BlogCard /></div>
                                <div className='col-6 mb-3'><BlogCard /></div>
                                <div className='col-6 mb-3'><BlogCard /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog;