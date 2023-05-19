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
        <div className='container-fluid'>
            <div className="row">
                <div className='col-4'>
                    <AdminSidebar page={location.pathname} />
                </div>

                <div className='col-8'>
                    <main>
                        {props.children ? props.children : <Outlet />}
                    </main>
                </div>
            </div>
        </div>
    )
}

export default AdminLayout