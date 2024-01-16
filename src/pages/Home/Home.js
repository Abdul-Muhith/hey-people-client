import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";

import BlogCard from '../../components/Blog/BlogCard';
import ProductCard from '../../components/Product/ProductCard';
import SpecialProduct from '../../components/Product/SpecialProduct';

import Container from '../../components/Container/Container';
import { services } from '../../utils/Data';
import './Home.css';

const Home = () => {
    return (
        <>
            {/* <div>Home</div> */ }

            <Container class1="home-wrapper-1 py-5">
                <div className='row'>
                    <div className='col-6'>
                        <div className='main-banner position-relative'>
                            <img src='images/main-banner-1.jpg' className='img-fluid rounded-3' alt='main-banner' />
                            <div className='main-banner-content position-absolute'>
                                <h4>SUPERCHARGED FOR PROS.</h4>
                                <h5>iPad S13+ Pro.</h5>
                                <p>From $999.00 or $41.62/mo.</p>
                                <Link className='button'>Buy now</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='d-flex flex-wrap justify-content-between align-items-center gap-10'>
                            <div className='small-banner position-relative'>
                                <img src='images/catbanner-01.jpg' className='img-fluid rounded-3' alt='small-banner' />
                                <div className='small-banner-content position-absolute'>
                                    <h4>SUPERCHARGED FOR PROS.</h4>
                                    <h5>iPad S13+ Pro.</h5>
                                    <p>From $999.00 <br /> or $41.62/mo.</p>
                                </div>
                            </div>
                            <div className='small-banner position-relative'>
                                <img src='images/catbanner-02.jpg' className='img-fluid rounded-3' alt='small-banner' />
                                <div className='small-banner-content position-absolute'>
                                    <h4>SUPERCHARGED FOR PROS.</h4>
                                    <h5>iPad S13+ Pro.</h5>
                                    <p>From $999.00 <br /> or $41.62/mo.</p>
                                </div>
                            </div>
                            <div className='small-banner position-relative'>
                                <img src='images/catbanner-03.jpg' className='img-fluid rounded-3' alt='small-banner' />
                                <div className='small-banner-content position-absolute'>
                                    <h4>Best Sake.</h4>
                                    <h5>iPad S13+ Pro.</h5>
                                    <p>From $999.00 <br /> or $41.62/mo.</p>
                                </div>
                            </div>
                            <div className='small-banner position-relative'>
                                <img src='images/catbanner-04.jpg' className='img-fluid rounded-3' alt='small-banner' />
                                <div className='small-banner-content position-absolute'>
                                    <h4>NEW ARRIVAL</h4>
                                    <h5>But IPad Air</h5>
                                    <p>From $999.00 <br /> or $41.62/mo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="home-wrapper-2 py-5">
                <div className='row'>
                    <div className='col-12'>
                        <div className='service d-flex align-items-center justify-content-between'>
                            { services.map((i, j) => {
                                return (
                                <div className='d-flex align-items-center gap-15' key={j}>
                                    <img src={i.image} alt='services' />
                                    <div>
                                            <h6>{ i.title }</h6>
                                            <p className='mb-0'>{ i.tagline}</p>
                                    </div>
                                </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="home-wrapper-2 py-5">
                <div className='row'>
                    <div className='col-12'>
                        <div className='categories card-wrapper d-flex flex-wrap justify-content-between align-items-center'>
                            <div className='d-flex align-items-center'>
                                <div>
                                    <h6>Music & Gaming</h6>
                                    <p>10 items</p>
                                </div>
                                <img src='images/camera.jpg' alt='music and gaming' />
                            </div>
                            <div className='d-flex align-items-center'>
                                <div>
                                    <h6>Cameras</h6>
                                    <p>10 items</p>
                                </div>
                                <img src='images/camera.jpg' alt='camera' />
                            </div>
                            <div className='d-flex align-items-center'>
                                <div>
                                    <h6>Smart Tv</h6>
                                    <p>10 items</p>
                                </div>
                                <img src='images/tv.jpg' alt='tv' />
                            </div>
                            <div className='d-flex align-items-center'>
                                <div>
                                    <h6>Smart Watches</h6>
                                    <p>10 items</p>
                                </div>
                                <img src='images/headphone.jpg' alt='watch' />
                            </div>
                            <div className='d-flex align-items-center'>
                                <div>
                                    <h6>Music & Gaming</h6>
                                    <p>10 items</p>
                                </div>
                                <img src='images/camera.jpg' alt='music and gaming' />
                            </div>
                            <div className='d-flex align-items-center'>
                                <div>
                                    <h6>Cameras</h6>
                                    <p>10 items</p>
                                </div>
                                <img src='images/camera.jpg' alt='camera' />
                            </div>
                            <div className='d-flex align-items-center'>
                                <div>
                                    <h6>Smart Tv</h6>
                                    <p>10 items</p>
                                </div>
                                <img src='images/tv.jpg' alt='tv' />
                            </div>
                            <div className='d-flex align-items-center gap-30'>
                                <div>
                                    <h6>Smart Watches</h6>
                                    <p>10 items</p>
                                </div>
                                <img src='images/headphone.jpg' alt='watch' />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1='home-wrapper-2 py-5 d-block featured-wrapper'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='section-heading'>Featured Collection</h3>
                    </div>

                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </Container>

            <Container class1='home-wrapper-2 py-5 d-block famous-wrapper'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='famous-card position-relative bg-dark'>
                            <img src='images/watch-2.png' alt='famous' className='img-fluid' />
                            <div className='famous-content position-absolute'>
                                <h5>Big Screen</h5>
                                <h6>Smart Watch Series 7</h6>
                                <p>From $399or $16.62/mo. for 24 mo.*</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='famous-card position-relative'>
                            <img src='images/watch-2.jpg' alt='famous' className='img-fluid' />
                            <div className='famous-content position-absolute'>
                                <h5 className='text-dark'>Studio Display</h5>
                                <h6 className='text-dark'>600 nits of brightness.</h6>
                                <p className='text-dark'>27-inch 5k Retina display</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='famous-card position-relative'>
                            <img src='images/watch-2.png' alt='famous' className='img-fluid' />
                            <div className='famous-content position-absolute'>
                                <h5 className='text-dark'>Big Screen</h5>
                                <h6 className='text-dark'>Smart Watch Series 7</h6>
                                <p className='text-dark'>Now in Green, From $999.00 or $41.62/mo for 24 mo Footnote*</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='famous-card position-relative'>
                            <img src='images/watch-2.jpg' alt='famous' className='img-fluid' />
                            <div className='famous-content position-absolute'>
                                <h5 className='text-dark'>Home Speakers</h5>
                                <h6 className='text-dark'>Rooom-filling sound</h6>
                                <p className='text-dark'>From $699 or $116.58/mo. fro 12mo *</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1='home-wrapper-2 py-5 d-block special-wrapper'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='section-heading'>Special Products</h3>
                    </div>
                </div>
                <div className='row'>
                    <SpecialProduct />
                    <SpecialProduct />
                    <SpecialProduct />
                    <SpecialProduct />
                </div>
            </Container>

            <Container class1='home-wrapper-2 py-5 d-block popular-wrapper'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='section-heading'>Our Popular Products</h3>
                    </div>

                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </Container>

            <Container class1='home-wrapper-2 py-5 d-block marquee-wrapper'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='marquee-inner-wrapper card-wrapper'>
                            <Marquee className='d-flex'>
                                <div className='mx-4 w-25'><img src='images/brand-01.png' alt='brand' /></div>
                                <div className='mx-4 w-25'><img src='images/brand-02.png' alt='brand' /></div>
                                <div className='mx-4 w-25'><img src='images/brand-03.png' alt='brand' /></div>
                                <div className='mx-4 w-25'><img src='images/brand-04.png' alt='brand' /></div>
                                <div className='mx-4 w-25'><img src='images/brand-05.png' alt='brand' /></div>
                                <div className='mx-4 w-25'><img src='images/brand-06.png' alt='brand' /></div>
                                <div className='mx-4 w-25'><img src='images/brand-07.png' alt='brand' /></div>
                                <div className='mx-4 w-25'><img src='images/brand-08.png' alt='brand' /></div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1='home-wrapper-2 py-5 d-block blog-wrapper'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='section-heading'>Our Latest Blogs</h3>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-3'><BlogCard /></div>
                    <div className='col-3'><BlogCard /></div>
                    <div className='col-3'><BlogCard /></div>
                    <div className='col-3'><BlogCard /></div>
                </div>
            </Container>
        </>
    )
}

export default Home;