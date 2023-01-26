import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'


export interface LayoutProps  { 
    children: React.ReactNode
 }
 

const Layout = (props: LayoutProps) => {
    return (
        <>
            <div>
                <Navbar/>
                <div>sides</div>
                <div>Backdrop</div>
                <Footer/>
            </div>
            <main>
                { props.children }
            </main>
        </>
    )
}

export default Layout