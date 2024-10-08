import React from 'react'
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";

const SpecialProduct = ({ id, title, brand, totalRating, price, quantity, sold }) => {

    // console.log('Special Product _', quantity / quantity + sold * 100 + "%");
    // console.log('Special Product _', sold / (quantity + sold) * 100 + "%");

    return (
        <>
            {/* <div>SpecialProduct</div> */}
            <div className='col-6 mb-3'>
                <div className='special-product-card'>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <img src='images/watch.jpg' alt='watch' className='img-fluid' />
                        </div>
                        <div className='special-product-content'>
                            <h5 className='brand'>{brand}</h5>
                            <h6 className='title'>{ title }</h6>

                            <ReactStars
                                count={5}
                                size={24}
                                // value={4}
                                value={(totalRating == 0) ? 5 : totalRating}
                                edit={false}
                                activeColor="#ffd700"
                            />

                            <p className='price'>
                                <span className='red-p'>${ price }</span>
                                &nbsp;
                                <strike>$200</strike>
                            </p>

                            {/* <div className='discount-title d-flex align-items-center gap-10'>
                                <p className='mb-0'>
                                    <b>5 days</b>
                                </p>

                                <div className='d-flex gap-10 align-items-center'>
                                    <span className='badge rounded-circle bg-danger'>1</span>:
                                    <span className='badge rounded-circle bg-danger'>1</span>:
                                    <span className='badge rounded-circle bg-danger'>1</span>
                                </div>
                            </div> */}

                            <div className='prod-count my-3'>
                                <p>Products: {quantity}</p>
                                <div className='progress'>
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{width: sold / (quantity + sold) * 100 + "%"}}
                                        aria-valuenow={sold / (quantity + sold) * 100}
                                        aria-valuemin={ quantity }
                                        aria-valuemax={ quantity + sold }
                                        // style={{width: "25%"}}
                                        // aria-valuenow={quantity / (quantity + sold) * 100}
                                        // aria-valuenow="25"
                                        // aria-valuemin="0"
                                        // aria-valuemax="100"
                                    >
                                    </div>
                                </div>
                            </div>
                            <Link className='button' to={ `/products/` + id }>View</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='col-6 mb-3'>
                <div className='special-product-card'>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <img src='images/watch.jpg' alt='watch' className='img-fluid' />
                        </div>
                        <div className='special-product-content'>
                            <h5 className='brand'>Habels</h5>
                            <h6 className='title'>Samsung Galaxy Note-10+ Mobile Phone; Sim...</h6>

                            <ReactStars
                                count={5}
                                size={24}
                                value={4}
                                edit={false}
                                activeColor="#ffd700"
                            />

                            <p className='price'>
                                <span className='red-p'>$100</span> &nbsp; <strike>$200</strike>
                            </p>

                            <div className='discount-title d-flex align-items-center gap-10'>
                                <p className='mb-0'>
                                    <b>5 days</b>
                                </p>

                                <div className='d-flex gap-10 align-items-center'>
                                    <span className='badge rounded-circle bg-danger'>1</span>:
                                    <span className='badge rounded-circle bg-danger'>1</span>:
                                    <span className='badge rounded-circle bg-danger'>1</span>
                                </div>
                            </div>

                            <div className='prod-count my-3'>
                                <p>Products: 5</p>
                                <div className='progress'>
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{width: "25%"}}
                                        aria-valuenow="25"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                    </div>
                                </div>
                            </div>
                            <Link className='button'>Add to Cart</Link>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default SpecialProduct;