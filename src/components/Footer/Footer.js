import { NavLink, Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

// import newsletter from '../../../public/images/newsletter.png';

import './Footer.css';

const Footer = () => {
    return (
        <>
            {/* <div>Footer</div> */}
            <footer className='py-3'>
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className='col-5'>
                            <div className='footer-top-data d-flex gap-30 align-items-center'>
                                <img src='images/newsletter.png' alt='newsletter' />
                                <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
                            </div>
                        </div>
                        <div className='col-7'>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-2"
                                    placeholder="Your Email Address..."
                                    aria-label="Your Email Address..."
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text p-2" id="basic-addon2">Subscribe</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <footer className='py-4'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-4'>
                            <h4 className='text-white mb-4'>Contact US</h4>
                            <div>
                                <address className='text-white fs-6'>Hno : 277 Near Vill Chopal, <br /> Sonipat, Haryana <br /> PrinCode: 131103</address>
                                <a href='tel:+91 8264954234' className='mt-3 d-block mb-1 text-white'>+91 8264954234</a>
                                <a href='mailto:heypeople.mern@gmail.com' className='mt-2 d-block mb-0 text-white'>heypeople.mern@gmail.com</a>
                                <div className='social_icons d-flex align-items-center gap-30 mt-4'>
                                    <a href='#'><BsLinkedin className='text-white fs-4' /></a>
                                    <a href='#'><BsInstagram className='text-white fs-4' /></a>
                                    <a href='#'><BsGithub className='text-white fs-4' /></a>
                                    <a href='#'><BsYoutube className='text-white fs-4' /></a>
                                </div>
                            </div>
                        </div>

                        <div className='col-3'>
                            <h4 className='text-white mb-4'>Information</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link to='privacy-policy' className='text-white py-2 mb-1'>Privacy Policy</Link>
                                <Link to='refound-policy' className='text-white py-2 mb-1'>Refound Policy</Link>
                                <Link to='shipping-policy' className='text-white py-2 mb-1'>Shipping Policy</Link>
                                <Link to='terms-conditions' className='text-white py-2 mb-1'>Terms Of Service</Link>
                                <Link to='blogs' className='text-white py-2 mb-1'>Blogs</Link>
                            </div>
                        </div>

                        <div className='col-3'>
                            <h4 className='text-white mb-4'>Account</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link to='' className='text-white py-2 mb-1'>Search</Link>
                                <Link to='' className='text-white py-2 mb-1'>About US</Link>
                                <Link to='' className='text-white py-2 mb-1'>Faq</Link>
                                <Link to='contact' className='text-white py-2 mb-1'>Contact</Link>
                                <Link to='' className='text-white py-2 mb-1'>Size Chart</Link>
                            </div>
                        </div>

                        <div className='col-2'>
                            <h4 className='text-white mb-4'>Quick Links</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link to='' className='text-white py-2 mb-1'>Accessories</Link>
                                <Link to='' className='text-white py-2 mb-1'>Laptops</Link>
                                <Link to='' className='text-white py-2 mb-1'>Headphones</Link>
                                <Link to='' className='text-white py-2 mb-1'>Smart Watches</Link>
                                <Link to='' className='text-white py-2 mb-1'>Tablets</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <footer className='py-4'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <p className='text-center mb-0 text-white'>
                                Copyright &copy; {new Date().getFullYear()}; Powered by HEY PEOPLE. All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;