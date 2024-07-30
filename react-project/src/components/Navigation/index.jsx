import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom';

function Navigation() {
    return (
        <>
            <Navbar />

            <Outlet /> 

            <Footer />
        </>
    );
}

export default Navigation;