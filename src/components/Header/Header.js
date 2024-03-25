import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

import './Header.css';

import { addProductToCart } from "../../features/cart/CartSlice";

const Header = () => {
    const [totalCartAmount, setTotalCartAmount] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const allOwnCartsState = useSelector((state) => state.cart?.userAllOwnCarts);
    const authState = useSelector((state) => state.auth);
    const { isSuccess, isError, isLoading, loggedInUser } = authState;

    useEffect(() => {
        let sum = 0;
        for (let i = 0; i < allOwnCartsState?.length; i++) {
            sum = sum + (Number(allOwnCartsState[i]?.quantity * allOwnCartsState[i]?.price));
            setTotalCartAmount(sum);
        }
    }, [allOwnCartsState])

    useEffect(() => {
        if (isSuccess && loggedInUser) {
            window.location.reload();
        }
    }, [isSuccess, isError, isLoading])

    const handleLogout = () => {
        localStorage.clear();

        setTimeout(() => {
            window.location.reload();
            navigate('/account/login');
        }, 300);
    }

    return (
        <>
            {/* <div>Header</div> */}

            <header className='header-top-strip py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <p className='text-white mb-0'>Free Shipping Over $100 & Free Returns</p>
                        </div>
                        <div className='col-6'>
                            <p className='text-white mb-0 text-end'>
                                Hotline: <a className='text-white' href='tel:+91 8264954234'>+91 8264954234</a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <header className='header-upper py-3'>
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className='col-2'>
                            <h2>
                                <Link className='text-white' to='/'>Hey People</Link>
                            </h2>
                        </div>

                        <div className='col-5'>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-2"
                                    placeholder="Search Product Here..."
                                    aria-label="Search Product Here..."
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text p-3" id="basic-addon2">
                                    <BsSearch className='fs-6' />
                                </span>
                            </div>
                        </div>

                        <div className='col-5'>
                            <div className="header-upper-links d-flex align-items-center justify-content-between">
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white' to='/compare-product'>
                                        <img src='images/compare.svg' alt='compare' />
                                        <p className='mb-0'>Compare <br /> Products</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white' to='/wishlist'>
                                        <img src='images/wishlist.svg' alt='wishlist' />
                                        <p className='mb-0'>Favourite <br /> Wishlist</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        className='d-flex align-items-center gap-10 text-white'
                                        to={ authState?.user === null ? "/account/login" : "/my-profile" }
                                    >
                                        <img src='images/user.svg' alt='user' />
                                        { authState?.user === null
                                            ? <p className='mb-0'>Log in <br /> My Account</p>
                                            : <p className='mb-0'>Welcome <br /> {authState?.user?.email}</p>
                                        }
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white' to='/cart'>
                                        <img src='images/cart.svg' alt='cart' />
                                        <div className='d-flex flex-column gap-10'>
                                            <span className='badge bg-white text-dark'>{ allOwnCartsState?.length ? allOwnCartsState?.length : 0 }</span>
                                            <p className='mb-0'>$ {totalCartAmount}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <header className='header-bottom py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='menu-bottom d-flex align-items-center gap-30'>
                                <div>
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center gap-15"
                                            type="button"
                                            id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <img src='images/menu.svg' alt='menu' />
                                            <span className='me-5 d-inline-block'>Shop Categories</span>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><Link className="dropdown-item text-white" to="#">Action</Link></li>
                                            <li><Link className="dropdown-item text-white" to="#">Another action</Link></li>
                                            <li><Link className="dropdown-item text-white" to="#">Something else here</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='menu-links'>
                                    <div className='d-flex align-items-center gap-15'>
                                        <NavLink to='/'>Home</NavLink>
                                        <NavLink to='/our-store'>Our Store</NavLink>
                                        <NavLink to='/my-orders'>My Orders</NavLink>
                                        <NavLink to='/blogs'>Blogs</NavLink>
                                        <NavLink to='/contact'>Contact</NavLink>
                                        <button
                                            onClick={handleLogout}
                                            className="border border-0 bg-transparent text-white text-uppercase"
                                        >Logout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;