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
            </div>
            <main>
                { props.children }
            </main>
            <div>
            <Footer/>
            </div>
            
        </>
    )
}

export default Layout