import { Link, useLocation } from 'react-router-dom';

import ReactStars from "react-rating-stars-component";

// import wish from '../../../public/images/wish.svg';
// import watch from '../../../public/images/watch.jpg';
// import watch2 from '../../../public/images/watch-2.jpg';
// import productCompare from '../../../public/images/productcompare.svg';
// import view from '../../../public/images/view.svg';
// import addcart from '../../../public/images/add-cart.svg';
// import wishList from '../../../public/images/wishlist.svg';

import './ProductCard.css';

// const ProductCard = (props) => {
const ProductCard = ({ grid }) => {
    let location = useLocation();

    // console.log(location);
    // const { grid } = props;

    return (
        <>
            {/* <div className='col-3'> */}

            <div className={`${location.pathname === "/our-store" ? `gr-${grid}` : "col-3"}`}>
                <Link className='product-card position-relative' to='/products/:id'>

                    <div className='wishlist-icon position-absolute'>
                        <button className='border-0 bg-transparent'>
                            <img src='images/wish.svg' alt='wishlist' />
                        </button>
                    </div>

                    <div className='product-image'>
                        <img src='images/watch.jpg' className='img-fluid' alt='product image' />
                        <img src='images/watch-2.jpg' className='img-fluid' alt='product image' />
                    </div>

                    <div className='product-details'>
                        <h6 className='brand'>Havels</h6>
                        <h5 className='product-title'>Kids headphones bulk 10 pack multi colored for students</h5>
                        <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
                        <p className={`description ${grid ===12 ? "d-block" : "d-none"}`}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. similique sunt...</p>
                        <p className='price'>$100.00</p>
                    </div>

                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <button className='border-0 bg-transparent'>
                                <img src='images/prodcompare.svg' alt='compare' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src='images/view.svg' alt='view' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src='images/add-cart.svg' alt='addcart' />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>

            <div className={`${location.pathname === "/our-store" ? `gr-${grid}` : "col-3"}`}>
                <Link className='product-card position-relative' to='/products/:id'>

                    <div className='wishlist-icon position-absolute'>
                        <button className='border-0 bg-transparent'>
                            <img src='images/wish.svg' alt='wishlist' />
                        </button>
                    </div>

                    <div className='product-image'>
                        <img src='images/watch.jpg' className='img-fluid' alt='product image' />
                        <img src='images/watch-2.jpg' className='img-fluid' alt='product image' />
                    </div>

                    <div className='product-details'>
                        <h6 className='brand'>Havels</h6>
                        <h5 className='product-title'>Kids headphones bulk 10 pack multi colored for students</h5>
                        <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
                        <p className={`description ${grid ===12 ? "d-block" : "d-none"}`}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. similique sunt...</p>
                        <p className='price'>$100.00</p>
                    </div>

                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <button className='border-0 bg-transparent'>
                                <img src='images/prodcompare.svg' alt='compare' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src='images/view.svg' alt='view' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src='images/add-cart.svg' alt='addcart' />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
};

export default ProductCard;