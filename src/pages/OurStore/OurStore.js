import Meta from "../../components/Meta/Meta";
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import ReactStars from "react-rating-stars-component";

import './OurStore.css';

const OurStore = () => {
    return (
        <>
            {/* <div>OurStore</div> */}

            <Meta title='DGC | Our-Store' />
            <BreadCrumb title='Our-Store' />

            <div className="home-wrapper-2 py-5 store-wrapper">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Shop By Categories</h3>
                            </div>

                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Filter By</h3>
                                <div>
                                    <h5 className="sub-title">Availability</h5>
                                    <div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="instock"
                                            />
                                            <label className="form-check-label" htmlFor="instock">In Stock (1)</label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="outofstock"
                                            />
                                            <label className="form-check-label" htmlFor="outofstock">Out of Stock (0)</label>
                                        </div>
                                    </div>

                                    <h5 className="sub-title">Price</h5>
                                    <div className="d-flex align-items-center gap-10">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="from"
                                                id="from"
                                            />
                                            <label htmlFor="from">From</label>
                                        </div>
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="to"
                                                id="to"
                                            />
                                            <label htmlFor="to">To</label>
                                        </div>
                                    </div>

                                    <h5 className="sub-title">Colors</h5>
                                    <div>
                                        <ul className="d-flex flex-wrap gap-10 ps-0 colors">
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>

                                    <h5 className="sub-title">Size</h5>
                                    <div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="size-1"
                                            />
                                            <label className="form-check-label" htmlFor="size-1">S (2)</label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="size-2"
                                            />
                                            <label className="form-check-label" htmlFor="size-2">M (2)</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Product Tags</h3>
                            </div>

                            <div>
                                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphone</span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Mobile</span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Wire</span>
                                </div>
                            </div>

                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Random Product</h3>
                                <div>
                                    <div className="random-products d-flex mb-3">
                                        <div className='w-50'>
                                            <img src="images/watch.jpg" alt="watch" className="img-fluid" />
                                        </div>
                                        <div className='w-50'>
                                            <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>$300</b>
                                        </div>
                                    </div>
                                    <div className="random-products d-flex mb-3">
                                        <div className='w-50'>
                                            <img src="images/watch.jpg" alt="watch" className="img-fluid" />
                                        </div>
                                        <div className='w-50'>
                                            <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>$300</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-9">
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStore;