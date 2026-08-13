import { Outlet } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Sidebar from './Sidebar';
function ProtectedLayout() {
    return (
        <ProtectedRoute>
            <div className="layout">
                <Sidebar />
                <Outlet />
            </div>
        </ProtectedRoute>
    );
}

export default ProtectedLayout;