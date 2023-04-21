import React from 'react'
import AdminSidebar from "../../Components/AdminSidebar/AdminSidebar"
import {
    Outlet, Routes,
    Route,
    useSearchParams,
    BrowserRouter,
    useLocation
} from 'react-router-dom'

const AdminLayout = (props: any) => {

    const location = useLocation()

    return (
        <>
            <div className="d-flex flex-column- ">
                    <AdminSidebar page={location.pathname} />
                <main style={{
                    width: '100%'
                }}>
                    {props.children ? props.children : <Outlet />}
                </main>
            </div>
        </>
    )
}

export default AdminLayout