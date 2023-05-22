import React, { useEffect } from 'react'
import AdminSidebar from "../../Components/AdminSidebar/AdminSidebar"
import {
    Outlet,
    useLocation,
    useNavigate
} from 'react-router-dom'

import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from '../../db/firebase';

const AdminLayout = (props: any) => {

    const [user, loading, error] = useAuthState(auth)

    const location = useLocation()

    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            return
        }
        if (!user) navigate("/login")
    }, [user, loading])

    return (
        <div className='d-flex'>

            <AdminSidebar page={location.pathname} />
            <main className="col-10 flex-grow-1">
                {props.children ? props.children : <Outlet />}
            </main>
        </div>
    )
}

export default AdminLayout