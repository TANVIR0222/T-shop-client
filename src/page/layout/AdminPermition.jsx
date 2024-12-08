import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import isAdmin from "../../utils/IsAdmin";

const AdminPermition = ({children}) => {
    const {user} = useSelector((state) => state.auth);
    return (
        <div>
            {
                isAdmin(user?.role) ? children : <Navigate to="/login" />
            }
        </div>
    );
};

export default AdminPermition;