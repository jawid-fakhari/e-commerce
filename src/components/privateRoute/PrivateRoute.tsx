import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
    const { isLogin } = useShoppingCartContext();
    return <>{isLogin ? <Outlet /> : <Navigate to="/login" />}</>;
}
