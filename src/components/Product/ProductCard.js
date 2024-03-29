import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ReactStars from "react-rating-stars-component";

// import wish from '../../../public/images/wish.svg';
// import watch from '../../../public/images/watch.jpg';
// import watch2 from '../../../public/images/watch-2.jpg';
// import productCompare from '../../../public/images/productcompare.svg';
// import view from '../../../public/images/view.svg';
// import addcart from '../../../public/images/add-cart.svg';
// import wishList from '../../../public/images/wishlist.svg';

import './ProductCard.css';

// import { addProductToWishlist } from '../../features/product/ProductSlice';
import { addProductToWishlist } from '../../features/wishlist/WishlistSlice';

// const ProductCard = (props) => {
// const ProductCard = ({ grid }) => {
const ProductCard = ({ grid, data }) => {
    const [productId, setProductId] = useState();
    const dispatch = useDispatch();
    let location = useLocation();

    // const { grid } = props;

    const addToWishlist = (id) => {
        // location.pathname = '/product'
        console.log('addToWishlist ID -> ', id);
        setProductId(id);
        // if(location.pathname !== '/our-store') productId = undefined;
        dispatch(addProductToWishlist(id));
    }

    // console.log(location.pathname);
    // console.log('product ID ', productId);
    // console.log('product -> ', data);

    return (
        <>
            {/* <div className='col-3'> */ }

            {
                data?.map((item, i) => {
                    return (
                        <div
                            key={ i }
                            className={ `${location.pathname === "/our-store" ? `gr-${grid}` : "col-3"}` }
                        >
                            {/* <Link */}
                            <div
                                className='product-card position-relative'
                                // to={productId !== undefined ?  "/our-store" : "/products/:id"}
                            >

                            {/* <Link
                                className='product-card position-relative'
                                to={ `${location.pathname == "/"
                                    ? "/products/:id"
                                    : location.pathname == "products/:id"
                                        ? "/products/:id"
                                        : ":id"
                                }` }
                            > */}

                                <div className='wishlist-icon position-absolute'>
                                    <button
                                        className='border-0 bg-transparent'
                                        onClick={ (e) => addToWishlist(item?._id) }
                                    >
                                        <img src='images/wish.svg' alt='wishlist' />
                                    </button>
                                </div>

                                <div className='product-image'>
                                    <img
                                        alt='product image'
                                        src='images/watch.jpg'
                                        className='img-fluid mx-auto'
                                        width={160}
                                        />
                                    <img
                                        alt='product image'
                                        src='images/watch-2.jpg'
                                        className='img-fluid mx-auto'
                                        width={160}
                                    />
                                </div>

                                <div className='product-details'>
                                    <h6 className='brand'>{ item?.brand }</h6>
                                    <h5 className='product-title'>{ item?.title }</h5>

                                    <ReactStars
                                        count={ 5 }
                                        size={ 24 }
                                        value={ 3 }
                                        edit={ false }
                                        activeColor="#ffd700"
                                    />

                                    <p
                                        className={ `description ${grid === 12 ? "d-block" : "d-none"}` }
                                        dangerouslySetInnerHTML={ { __html: item?.description?.substr(0, 70) + "..." } }
                                    ></p>

                                    <p className='price'>${ item?.price }</p>
                                </div>

                                <div className='action-bar position-absolute'>
                                    <div className='d-flex flex-column gap-15'>
                                        <button className='border-0 bg-transparent'>
                                            <img
                                                src='images/prodcompare.svg'
                                                alt='compare'
                                            />
                                        </button>
                                        <Link
                                            to={ `/products/` + item?._id }
                                            className='border-0 bg-transparent'
                                        >
                                            <img
                                                src='images/view.svg'
                                                alt='view'
                                            />
                                        </Link>
                                        <button className='border-0 bg-transparent'>
                                            <img src='images/add-cart.svg' alt='addcart' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
};

export default ProductCard;



            // <div className={`${location.pathname === "/our-store" ? `gr-${grid}` : "col-3"}`}>
            //     <Link className='product-card position-relative' to='/products/:id'>
            //     {/* <Link className='product-card position-relative' to={`${location.pathname === "/" ? "/products/:id" : "/:id"}`}> */}

            //         <div className='wishlist-icon position-absolute'>
            //             <button className='border-0 bg-transparent'>
            //                 <img src='images/wish.svg' alt='wishlist' />
            //             </button>
            //         </div>

            //         <div className='product-image'>
            //             <img src='images/watch.jpg' className='img-fluid' alt='product image' />
            //             <img src='images/watch-2.jpg' className='img-fluid' alt='product image' />
            //         </div>

            //         <div className='product-details'>
            //             <h6 className='brand'>Havels</h6>
            //             <h5 className='product-title'>Kids headphones bulk 10 pack multi colored for students</h5>
            //             <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
            //             <p className={`description ${grid ===12 ? "d-block" : "d-none"}`}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. similique sunt...</p>
            //             <p className='price'>$100.00</p>
            //         </div>

            //         <div className='action-bar position-absolute'>
            //             <div className='d-flex flex-column gap-15'>
            //                 <button className='border-0 bg-transparent'>
            //                     <img src='images/prodcompare.svg' alt='compare' />
            //                 </button>
            //                 <button className='border-0 bg-transparent'>
            //                     <img src='images/view.svg' alt='view' />
            //                 </button>
            //                 <button className='border-0 bg-transparent'>
            //                     <img src='images/add-cart.svg' alt='addcart' />
            //                 </button>
            //             </div>
            //         </div>
            //     </Link>
            // </div>


            // <div className={`${location.pathname === "/our-store" ? `gr-${grid}` : "col-3"}`}>
            //     <Link className='product-card position-relative' to='/products/:id'>
            //     {/* <Link className='product-card position-relative' to={`${location.pathname === "/" ? "/products/:id" : "/:id"}`}> */}

            //         <div className='wishlist-icon position-absolute'>
            //             <button className='border-0 bg-transparent'>
            //                 <img src='images/wish.svg' alt='wishlist' />
            //             </button>
            //         </div>

            //         <div className='product-image'>
            //             <img src='images/watch.jpg' className='img-fluid' alt='product image' />
            //             <img src='images/watch-2.jpg' className='img-fluid' alt='product image' />
            //         </div>

            //         <div className='product-details'>
            //             <h6 className='brand'>Havels</h6>
            //             <h5 className='product-title'>Kids headphones bulk 10 pack multi colored for students</h5>
            //             <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
            //             <p className={`description ${grid ===12 ? "d-block" : "d-none"}`}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. similique sunt...</p>
            //             <p className='price'>$100.00</p>
            //         </div>

            //         <div className='action-bar position-absolute'>
            //             <div className='d-flex flex-column gap-15'>
            //                 <button className='border-0 bg-transparent'>
            //                     <img src='images/prodcompare.svg' alt='compare' />
            //                 </button>
            //                 <button className='border-0 bg-transparent'>
            //                     <img src='images/view.svg' alt='view' />
            //                 </button>
            //                 <button className='border-0 bg-transparent'>
            //                     <img src='images/add-cart.svg' alt='addcart' />
            //                 </button>
            //             </div>
            //         </div>
            //     </Link>
            // </div>