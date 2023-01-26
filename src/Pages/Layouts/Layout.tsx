import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'


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
        </>
    )
}

export default Layout