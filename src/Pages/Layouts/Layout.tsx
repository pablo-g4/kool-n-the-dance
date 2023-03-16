import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'


const Layout = (props: any) => {
    
    return (
        <>
            <div>
                <Navbar />
            </div>
            <main>
                {props.children ? props.children : <Outlet />}
            </main>
            <div>
                <Footer />
            </div>

        </>
    )
}

export default Layout