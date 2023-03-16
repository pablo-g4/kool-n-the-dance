import React from 'react'
import AdminSidebar from "../../Components/AdminSidebar/AdminSidebar"
import { Outlet } from 'react-router-dom'

const AdminLayout = (props: any) => {
    return (
        <>
            <div className="d-flex flex-column- ">
                    <AdminSidebar page="planning" />
                <main>
                    {props.children ? props.children : <Outlet />}
                </main>
            </div>
        </>
    )
}

export default AdminLayout