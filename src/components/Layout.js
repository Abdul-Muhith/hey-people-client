import { Outlet } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = () => {
    return (
        <>
            {/* <div>Layout</div> */}
            <Header />
            <Outlet />
            <Footer/>
        </>
    )
}

export default Layout;