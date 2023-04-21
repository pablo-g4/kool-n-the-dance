import { Outlet } from 'react-router-dom'
import AdminSidebar from "../../Components/AdminSidebar/AdminSidebar"

const AdminLayout = (props: any) => {
    return (
        <>
            <div className="d-flex">
                    <AdminSidebar page="planning" />
                <main 
                    style={{
                        width: "100%"
                    }}
                >
                    {props.children ? props.children : <Outlet />}
                </main>
            </div>
        </>
    )
}

export default AdminLayout