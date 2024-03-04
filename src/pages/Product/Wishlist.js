import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import Meta from '../../components/Meta/Meta';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

import Container from '../../components/Container/Container';
import './Product.css';

import { getAllOwnWishlists, addProductToWishlist } from "../../features/wishlist/WishlistSlice";

const Wishlist = () => {
  const dispatch = useDispatch();

  // const wishlistState = useSelector((state) => state.wishlist);
  // const ownWishlists = wishlistState?.allOwnWishlists;
  // const { allOwnWishlists } = wishlistState;
  const ownWishlists = useSelector((state) => state.wishlist?.allOwnWishlists?.wishlist);

  // console.log('wishlist state', wishlistState);
  // console.log('allOwnWishlists', allOwnWishlists);
  // console.log('ownWishlists', ownWishlists);

  const getOwnAllWishlistsFromDB = () => {
    dispatch(getAllOwnWishlists());
  }

  const removeFromWishlist = (id) => {
    dispatch(addProductToWishlist(id));

    setTimeout(() => {
      dispatch(getAllOwnWishlists());
    }, 300)
  }

  useEffect(() => {
    getOwnAllWishlistsFromDB();
  }, []);

  return (
    <>
      {/* <div>Wishlist</div> */}

      <Meta title='DGC | Wishlist'/>
      <BreadCrumb title='Wishlist' />

      <Container className='home-wrapper-2 py-5 wishlist-product-wrapper'>
        <div className='row'>

            {
            (ownWishlists !== undefined && ownWishlists.length !== 0)
              ? ownWishlists?.map((item, i) => {
                return (

                  <div key={i} className='col-3'>
                    <div className='wishlist-product-card position-relative'>
                      <img
                        alt='cross'
                        src='images/cross.svg'
                        className='position-absolute cross img-fluid'
                        onClick={() => removeFromWishlist(item?._id)}
                      />

                      {/* <div className='wishlist-card-image'> */ }
                      <div className='wishlist-card-image bg-white'>
                          {/* <img src='images/watch.jpg' alt='watch' className='img-fluid w-100' /> */}
                        <img
                          alt='watch'
                          width={160}
                          className='img-fluid d-block mx-auto'
                          src={ item?.images[0]?.url ? item?.images[0]?.url : "images/watch.jpg" }
                        />
                      </div>

                      <div className='wishlist-product-details py-3 px-3'>
                        <h5 className='title'>{ item?.title }</h5>
                        <h6 className='price mb-3 mt-3'>$ { item?.price }</h6>
                      </div>
                    </div>
                  </div>

                )
              })
              : <div className="text-center text-danger mb-4 fs-3">No Data Available !</div>
            }

          {/* <div className='col-3'>
            <div className='wishlist-product-card position-relative'>
              <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
              <div className='wishlist-card-image'>
                  <img src='images/watch.jpg' alt='watch' className='img-fluid w-100'/>
              </div>

              <div className='wishlist-product-details py-3 px-3'>
                <h5 className='title'>Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi_3G Tablet</h5>
                <h6 className='price mb-3 mt-3'>$ 100</h6>
              </div>
            </div>
          </div>

          <div className='col-3'>
            <div className='wishlist-product-card position-relative'>
              <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
              <div className='wishlist-card-image'>
                  <img src='images/watch.jpg' alt='watch' className='img-fluid w-100'/>
              </div>

              <div className='wishlist-product-details py-3 px-3'>
                <h5 className='title'>Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi_3G Tablet</h5>
                <h6 className='price mb-3 mt-3'>$ 100</h6>
              </div>
            </div>
          </div> */}

        </div>
      </Container>
    </>
  )
}

export default Wishlist;