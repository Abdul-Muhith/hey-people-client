import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";

import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";

import { toast } from 'react-toastify';

import Meta from '../../components/Meta/Meta';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import ProductCard from '../../components/Product/ProductCard';
import ProductColor from "../../components/Product/ProductColor";

import Container from "../../components/Container/Container";
import './Product.css';

import { getSingleProduct, resetState, getAllProducts, rateProduct } from "../../features/product/ProductSlice";
import { addProductToCart, getUserAllOwnCarts } from "../../features/cart/CartSlice";

const SingleProduct = () => {
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [alreadyAddedToCart, setAlreadyAddedToCart] = useState(false);
  const [orderedProduct, setOrderedProduct] = useState(true);
  const [propularProducts, setPopularProducts] = useState([]);
  const [productStar, setProductStar] = useState(null);
  const [productComment, setProductComment] = useState(null);
  const [writeReview, setWriteReview] = useState(false);

  // console.log('quantity: ', quantity);
  // console.log('color: ', color);
  // console.log('propularProducts: ', propularProducts);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log('location', location.pathname.split("/")[2]);

  const getProductId = location.pathname.split("/")[2];

  const singleProductState = useSelector((state) => state.product?.singleProduct);
  const allOwnCartsState = useSelector((state) => state.cart?.userAllOwnCarts);
  const productState = useSelector((state) => state.product?.products);
  // console.log('singleProductState', singleProductState);
  // console.log('productState', productState);

  const props = {
    with: 400,
    height: 500,
    zoomWidth: 500,
    img: singleProductState?.images[0]?.url
      ? singleProductState?.images[0]?.url
      : "https://media.istockphoto.com/id/1359180038/photo/wristwatch.webp?s=2048x2048&w=is&k=20&c=-z2ouAL6uyFVy9Qm4puO5MWTo8_eI3KiIcxTaFRsQnc="
  };

  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }

  const uploadCart = () => {
  // alert('Upload Cart', color, quantity);
  // console.log('quantity: ', quantity);
  // console.log('color: ', color);
    // if (color === null) toast.error("Please Choose a color"); // TODO: amr kora

    // console.log('single color -> ', singleProductState?.color);

    if (singleProductState?.color !== undefined && color === null) {
      toast.error("Please Choose a color");
      return false;
    } else {
      dispatch(addProductToCart({
        productId: getProductId,
        color,
        quantity,
        price: singleProductState?.price
      }));
    }
  }

  useEffect(() => {
    for (let i = 0; i < allOwnCartsState?.length; i++) {
      if (getProductId === allOwnCartsState[i]?.productId?._id) {
        setAlreadyAddedToCart(true);
      }
    }
  }, []);

  useEffect(() => {
    // dispatch(resetState());
    dispatch(getSingleProduct(getProductId));
    dispatch(getUserAllOwnCarts());
  }, [getProductId])

    useEffect(() => {
      let data = [];

      for (let i = 0; i < productState?.length; i++) {
        if (productState[i]?.tags === 'popular') data.push(productState[i]);
      }

      setPopularProducts(data);
    }, [productState])

  useEffect(() => {
    dispatch(getAllProducts());
  }, [])

  const addRatingToProduct = () => {
    if (productStar === null) toast.info("Please add Star Rating");
    if (productComment === null) toast.info("Please add Comment Rating");

    if (productStar !== null && productComment !== null) {
      dispatch(rateProduct(
        {
          star: productStar,
          comment: productComment,
          prodId: getProductId
        }
      ));

      setWriteReview(false);
    }
  }

  // const customerReviewInfo = (text) => {
  //   for (let index = 0; index < productState?.length; index++) {
  //     // console.log('product ratings', productState[index]?.ratings);
  //     // console.log('product ratings length -> ', productState[index]?.ratings.length);
  //     if (productState[index]?.ratings.length > 0) {
  //       // console.log('product ratings', productState[index]?.ratings);
  //       productState[index]?.ratings?.map((item, index) => {
  //         return (<>
  //           {console.log('text', text)}
  //           { console.log('item', item.star) }
  //           <div className="review" key={ index }>
  //             <div className="d-flex align-items-center gap-10">
  //               <h6 className="mb-0">{ item?.postedBy }</h6>
  //               <ReactStars
  //                 count={ 5 }
  //                 size={ 24 }
  //                 // value={ 3 }
  //                 value={ item?.star }
  //                 edit={ true }
  //                 activeColor="#ffd700"
  //               />
  //             </div>
  //             <p className="mt-3">{ item.comment }</p>

  //           </div>
  //         </>)
  //       })
  //     }
  //   }
  // }

  return (
    <>
      {/* <Meta title="DGC | Single Product Name" /> */}
      {/* <BreadCrumb title="Single Product Name" /> */}
      <Meta title={`DGC | ${singleProductState?.title}`} />
      <BreadCrumb title={singleProductState?.title} />

      <Container class1='home-wrapper-2 py-5 main-product-wrapper'>
        <div className='row'>
          <div className='col-6'>
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>

            <div className="other-product-images d-flex flex-wrap gap-15">
              { singleProductState?.images?.map((item, i) => {
                // console.log('url -> ', item);
                return (
                  <>
                    <div key={i}>
                      <img
                        alt="image"
                        className="img-fluid"
                        src={ item?.url
                          ? item.url
                          : "https://media.istockphoto.com/id/1359180038/photo/wristwatch.webp?s=2048x2048&w=is&k=20&c=-z2ouAL6uyFVy9Qm4puO5MWTo8_eI3KiIcxTaFRsQnc="
                        }
                      />
                    </div>
{/*
                    <div>
                      <img className="img-fluid" src="https://media.istockphoto.com/id/1359180038/photo/wristwatch.webp?s=2048x2048&w=is&k=20&c=-z2ouAL6uyFVy9Qm4puO5MWTo8_eI3KiIcxTaFRsQnc=" alt="image" />
                    </div>

                    <div>
                      <img className="img-fluid" src="https://media.istockphoto.com/id/1359180038/photo/wristwatch.webp?s=2048x2048&w=is&k=20&c=-z2ouAL6uyFVy9Qm4puO5MWTo8_eI3KiIcxTaFRsQnc=" alt="image" />
                    </div>

                    <div>
                      <img className="img-fluid" src="https://media.istockphoto.com/id/1359180038/photo/wristwatch.webp?s=2048x2048&w=is&k=20&c=-z2ouAL6uyFVy9Qm4puO5MWTo8_eI3KiIcxTaFRsQnc=" alt="image" />
                    </div> */}
                  </>
                  )
                })}
            </div>
          </div>

          <div className='col-6'>
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">{ singleProductState?.title }</h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$ { singleProductState?.price }</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={ 5 }
                    size={ 24 }
                    value={ (singleProductState !== undefined) && (singleProductState?.totalRating.toString() == 0) ? 5 : singleProductState?.totalRating.toString() }
                    edit={ false }
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">( 2 Reviews )</p>
                </div>
                <a className="review-btn" href="#review">Write a Review</a>
              </div>

              <div className="border-bottom py-3">
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="mb-0 product-heading">Type : </h3>
                  <p className="mb-0 product-data">{ singleProductState?.category }</p>
                </div>

                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="mb-0 product-heading">Brand : </h3>
                  <p className="mb-0 product-data">{ singleProductState?.brand }</p>
                </div>

                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="mb-0 product-heading">Category : </h3>
                  <p className="mb-0 product-data">{ singleProductState?.category }</p>
                </div>

                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="mb-0 product-heading">Tags: </h3>
                  <p className="mb-0 product-data">{ singleProductState?.tags }</p>
                </div>

                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="mb-0 product-heading">Availibility : </h3>
                  <p className="mb-0 product-data">In Stock</p>
                </div>

                <div className="d-flex flex-column gap-10 mt-2 mb-3">
                  <h3 className="mb-0 product-heading">Size : </h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge bg-white border border-1 text-dark border-secondary">S</span>
                    <span className="badge bg-white border border-1 text-dark border-secondary">M</span>
                    <span className="badge bg-white border border-1 text-dark border-secondary">XL</span>
                    <span className="badge bg-white border border-1 text-dark border-secondary">XXL</span>
                  </div>
                </div>

                { alreadyAddedToCart === false && <>
                  <div className="d-flex flex-column gap-10 mt-2 mb-3">
                    <h3 className="mb-0 product-heading">Color : </h3>
                    <ProductColor
                      setColor={ setColor }
                      productColor={ singleProductState?.color }
                    />
                  </div>
                </> }

                <div className="d-flex flex-row align-items-center gap-15 mt-2 mb-3">

                  { alreadyAddedToCart === false && <>
                    <h3 className="mb-0 product-heading">Quantity : </h3>
                    <div className="me-5">
                      <input
                        type="number"
                        id=""
                        name=""
                        min={ 1 }
                        max={ 10 }
                        className="form-control"
                        style={ { width: "70px" } }
                        onChange={ (e) => setQuantity(e.target.value) }
                        value={ quantity }
                      />
                      </div>
                  </> }

                  <div className="d-flex align-items-center gap-30">
                    <button
                      className="button border-0"
                      type='submit'
                      onClick={() => alreadyAddedToCart ? navigate('/cart') : uploadCart()}
                      // data-bs-toggle="modal"
                      // data-bs-target="#staticBackdrop"
                    >
                      {alreadyAddedToCart ? "Got to Cart" : "Add to Cart"}
                    </button>

                    <button className="button button-next border-0" type='submit'>Buy It Now</button>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href=""><TbGitCompare className="fs-5 me-2" /> Add To Compare</a>
                  </div>
                  <div>
                    <a href=""><AiOutlineHeart className="fs-5 me-2" /> Add To Wishlist</a>
                  </div>
                </div>

                <div className="d-flex flex-column gap-10 my-3">
                  <h3 className="product-heading">Shipping and Returns : </h3>
                  <p className="product-data">Free Shipping and Returns Available on all orders! <br /> we ship all US domestic orders within <b>5-10 business days</b></p>
                </div>

                <div className="d-flex align-items-center gap-10 my-3">
                  <h3 className="mb-0 product-heading">Product Link : </h3>
                  <a
                    href="javascript:void(0);"
                    // onClick={ () => { copyToClipboard("https://media.istockphoto.com/id/1359180038/photo/wristwatch.webp?s=2048x2048&w=is&k=20&c=-z2ouAL6uyFVy9Qm4puO5MWTo8_eI3KiIcxTaFRsQnc=") } }
                    onClick={ () => { copyToClipboard(window.location.href) } }
                  >
                    Copy Product Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1='home-wrapper-2 py-5 description-wrapper'>
        <div className='row'>
          <div className='col-12'>
            <h4>Description</h4>
            <div className='bg-white p-3'>
              <p
                dangerouslySetInnerHTML={ {
                  __html:
                    singleProductState?.description?.substr(0, 70)
                    + ((singleProductState?.description?.length > 70) ? "..." : " ")
                } }
              ></p>
            </div>
          </div>
        </div>
      </Container>

      <Container class1='home-wrapper-2 reviews-wrapper'>
        <div className='row'>
          <div className='col-12'>
            <h4 id="review">Reviews</h4>
            <div className="review-inner-wrapper">
              <div className='review-head d-flex justify-content-between align-items-end'>
                <div>
                  <h4 className='mb-2'>Customer Reviews</h4>
                  <div className='d-flex align-items-center gap-10'>
                    <ReactStars count={ 5 } size={ 24 } value={ 3 } edit={ false } activeColor="#ffd700" />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>

                { orderedProduct && (
                  <div>
                    <a
                      href="#writerivew"
                      className="text-dark text-decoration-underline"
                      onClick={() => setWriteReview(!writeReview)}
                    >Write a Review</a>
                  </div>
                )}
              </div>

              { writeReview && (
                <div className="review-form py-4">
                  <h4 id="writerivew" className='mb-2'>Write a Reviews</h4>
                  <form className='d-flex flex-column gap-15'>
                    <div>
                      <ReactStars
                        count={ 5 }
                        size={ 24 }
                        value={ 0 }
                        edit={ true }
                        activeColor="#ffd700"
                        onChange={(e) => setProductStar(e)}
                      />
                    </div>
                    <div>
                      <textarea
                        name=''
                        id=''
                        cols='30'
                        rows='4'
                        className='w-100 p-2'
                        placeholder='Type Here Your Valuable Review'
                        onChange={(e) => setProductComment(e.target.value)}
                      />
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                      <button
                        type="button"
                        className='button border-0'
                        onClick={ addRatingToProduct }
                      >Submit Review</button>
                    </div>
                  </form>
                </div>
              )}

              <div className="reviews mt-4">
                { productState && productState?.map((item, i) => {
                  // console.log('rating -> ', item?.ratings?.length > 0 ? item.ratings : "no Data");

                  if (item?.ratings?.length > 0) {
                    // console.log('hey -> ', item.ratings);
                    // console.log('rating -> ', item?.ratings?.star +  " no Data -> " + item?.ratings?.comment);

                    return (
                      <>
                        <div className="review" key={ i }>
                          <div className="d-flex align-items-center gap-10">
                            <h6 className="mb-0">{ item?.ratings?.postedBy }</h6>
                            <ReactStars
                              count={ 5 }
                              size={ 24 }
                              // value={ 3 }
                              value={ item?.ratings?.star }
                              edit={ true }
                              activeColor="#ffd700"
                            />
                          </div>
                            <p className="mt-3">{ item.comment }</p>
                        </div>
                    </>
                    )
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1='home-wrapper-2 py-5 d-block popular-wrapper'>
        <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
        </div>

        <div className='row'>
          <ProductCard data={propularProducts} />
        </div>
      </Container>
    </>
  )
}

export default SingleProduct;

      // <Container class1='home-wrapper-2 py-5 main-product-wrapper'>
      //   <div className='row'>
      //     <div className='col-6'>
      //       <div className="main-product-image">
      //         <div>
      //           <ReactImageZoom {...props} />
      //         </div>
      //       </div>

      //       <div className="other-product-images d-flex flex-wrap gap-15">
      //         <div>
      //           <img className="img-fluid" src="https://media.istockphoto.com/id/1359180038/photo/wristwatch.webp?s=2048x2048&w=is&k=20&c=-z2ouAL6uyFVy9Qm4puO5MWTo8_eI3KiIcxTaFRsQnc=" alt="image" />
      //         </div>
      //         <div>
      //           <img className="img-fluid" src="https://media.istockphoto.com/id/1359180038/photo/wristwatch.webp?s=2048x2048&w=is&k=20&c=-z2ouAL6uyFVy9Qm4puO5MWTo8_eI3KiIcxTaFRsQnc=" alt="image" />
      //         </div>
      //         <div>
      //           <img className="img-fluid" src="https://media.istockphoto.com/id/1359180038/photo/wristwatch.webp?s=2048x2048&w=is&k=20&c=-z2ouAL6uyFVy9Qm4puO5MWTo8_eI3KiIcxTaFRsQnc=" alt="image" />
      //         </div>
      //         <div>
      //           <img className="img-fluid" src="https://media.istockphoto.com/id/1359180038/photo/wristwatch.webp?s=2048x2048&w=is&k=20&c=-z2ouAL6uyFVy9Qm4puO5MWTo8_eI3KiIcxTaFRsQnc=" alt="image" />
      //         </div>
      //       </div>
      //     </div>

      //     <div className='col-6'>
      //       <div className="main-product-details">
      //         <div className="border-bottom">
      //           <h3 className="title">Kids Headphones Bulk 10 Pack Multi Colored For Students</h3>
      //         </div>
      //         <div className="border-bottom py-3">
      //           <p className="price">$ 100</p>
      //           <div className="d-flex align-items-center gap-10">
      //               <ReactStars count={ 5 } size={ 24 } value={ 4 } edit={ false } activeColor="#ffd700" />
      //               <p className="mb-0 t-review">( 2 Reviews )</p>
      //           </div>
      //           <a className="review-btn" href="#review">Write a Review</a>
      //         </div>

      //         <div className="border-bottom py-3">
      //           <div className="d-flex align-items-center gap-10 my-2">
      //             <h3 className="mb-0 product-heading">Type : </h3>
      //             <p className="mb-0 product-data">Watch</p>
      //           </div>

      //           <div className="d-flex align-items-center gap-10 my-2">
      //             <h3 className="mb-0 product-heading">Brand : </h3>
      //             <p className="mb-0 product-data">Havels</p>
      //           </div>

      //           <div className="d-flex align-items-center gap-10 my-2">
      //             <h3 className="mb-0 product-heading">Category : </h3>
      //             <p className="mb-0 product-data">Watch</p>
      //           </div>

      //           <div className="d-flex align-items-center gap-10 my-2">
      //             <h3 className="mb-0 product-heading">Tags: </h3>
      //             <p className="mb-0 product-data">Watch</p>
      //           </div>

      //           <div className="d-flex align-items-center gap-10 my-2">
      //             <h3 className="mb-0 product-heading">Availibility : </h3>
      //             <p className="mb-0 product-data">In Stock</p>
      //           </div>

      //           <div className="d-flex flex-column gap-10 mt-2 mb-3">
      //             <h3 className="mb-0 product-heading">Size : </h3>
      //             <div className="d-flex flex-wrap gap-15">
      //               <span className="badge bg-white border border-1 text-dark border-secondary">S</span>
      //               <span className="badge bg-white border border-1 text-dark border-secondary">M</span>
      //               <span className="badge bg-white border border-1 text-dark border-secondary">XL</span>
      //               <span className="badge bg-white border border-1 text-dark border-secondary">XXL</span>
      //             </div>
      //           </div>

      //           <div className="d-flex flex-column gap-10 mt-2 mb-3">
      //             <h3 className="mb-0 product-heading">Color : </h3>
      //             <ProductColor />
      //           </div>

      //           <div className="d-flex flex-row align-items-center gap-15 mt-2 mb-3">
      //             <h3 className="mb-0 product-heading">Quantity : </h3>
      //             <div className="">
      //               <input type="number" id="" name="" min={1} max={10} style={{width: "70px"}} className="form-control" />
      //             </div>
      //             <div className="d-flex align-items-center gap-30 ms-5">
      //               <button className="button border-0" type='submit'>Add to Cart</button>
      //               <button className="button button-next border-0" type='submit'>Buy It Now</button>
      //             </div>
      //           </div>

      //           <div className="d-flex align-items-center gap-15">
      //             <div>
      //               <a href=""><TbGitCompare className="fs-5 me-2" /> Add To Compare</a>
      //             </div>
      //             <div>
      //               <a href=""><AiOutlineHeart className="fs-5 me-2" /> Add To Wishlist</a>
      //             </div>
      //           </div>

      //           <div className="d-flex flex-column gap-10 my-3">
      //             <h3 className="product-heading">Shipping and Returns : </h3>
      //             <p className="product-data">Free Shipping and Returns Available on all orders! <br /> we ship all US domestic orders within <b>5-10 business days</b></p>
      //           </div>

      //           <div className="d-flex align-items-center gap-10 my-3">
      //             <h3 className="mb-0 product-heading">Product Link : </h3>
      //             <a href="javascript:void(0);" onClick={ () => { copyToClipboard("https://media.istockphoto.com/id/1359180038/photo/wristwatch.webp?s=2048x2048&w=is&k=20&c=-z2ouAL6uyFVy9Qm4puO5MWTo8_eI3KiIcxTaFRsQnc=") } }>
      //               Copy Product Link
      //             </a>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </Container>

      // <Container class1='home-wrapper-2 py-5 description-wrapper'>
      //   <div className='row'>
      //     <div className='col-12'>
      //       <h4>Description</h4>
      //       <div className='bg-white p-3'>
      //         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur nisi similique illum aut perferendis voluptas, quisquam obcaecati qui nobis officia. Voluptatibus in harum deleniti labore maxime officia esse eos? Repellat?</p>
      //       </div>
      //     </div>
      //   </div>
      // </Container>

      // <Container class1='home-wrapper-2 reviews-wrapper'>
      //   <div className='row'>
      //     <div className='col-12'>
      //       <h4 id="review">Reviews</h4>
      //       <div className="review-inner-wrapper">
      //         <div className='review-head d-flex justify-content-between align-items-end'>
      //           <div>
      //             <h4 className='mb-2'>Customer Reviews</h4>
      //             <div className='d-flex align-items-center gap-10'>
      //               <ReactStars count={ 5 } size={ 24 } value={ 3 } edit={ false } activeColor="#ffd700" />
      //               <p className="mb-0">Based on 2 Reviews</p>
      //             </div>
      //           </div>

      //           { orderedProduct && (
      //             <div>
      //               <a href="#" className="text-dark text-decoration-underline">Write a Review</a>
      //             </div>
      //           )}
      //         </div>

      //         <div className="review-form py-4">
      //             <h4 className='mb-2'>Write a Reviews</h4>
      //           <form className='d-flex flex-column gap-15'>
      //             <div>
      //               <ReactStars count={ 5 } size={ 24 } value={ 3 } edit={ true } activeColor="#ffd700" />
      //             </div>
      //             <div>
      //                 <textarea name='' id='' cols='30' rows='4' className='w-100 p-2' placeholder='Review' />
      //             </div>
      //             <div className="d-flex justify-content-end">
      //               <button className='button border-0'>Submit Review</button>
      //             </div>
      //           </form>
      //         </div>

      //         <div className="reviews mt-4">
      //           <div className="review">
      //             <div className="d-flex align-items-center gap-10">
      //               <h6 className="mb-0">Heypeople</h6>
      //               <ReactStars count={ 5 } size={ 24 } value={ 3 } edit={ true } activeColor="#ffd700" />
      //             </div>
      //               <p className="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur nisi similique illum aut perferendis voluptas, quisquam obcaecati qui nobis officia. Voluptatibus in harum deleniti labore maxime officia esse eos? Repellat?</p>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </Container>

      // <Container class1='home-wrapper-2 py-5 d-block popular-wrapper'>
      //   <div className='row'>
      //       <div className='col-12'>
      //         <h3 className='section-heading'>Our Popular Products</h3>
      //       </div>
      //   </div>

      //   <div className='row'>
      //     <ProductCard />
      //   </div>
      // </Container>

