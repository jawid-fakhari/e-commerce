import { Link } from "react-router-dom";
import Container from "../container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import Button from "../button/Button";

function Navbar() {
    const { getCartItemsQty, handleLogout } = useShoppingCartContext();
    return (
        <div className="h-16 border-b shadow-md bg-white flex items-center">
            <Container>
                <div className="flex justify-between items-center gap-6">
                    <ul className="flex gap-6">
                        <li>
                            <Link
                                className="text-gray-800 hover:text-blue-600 font-medium transition"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-gray-800 hover:text-blue-600 font-medium transition"
                                to="/store"
                            >
                                Store
                            </Link>
                        </li>
                    </ul>
                    <div className="flex items-center gap-4">
                        <Button
                            className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
                            onClick={handleLogout}
                        >
                            Logout
                        </Button>
                        <Link to={"/cart"} className="relative">
                            <button className="text-2xl">🛒</button>
                            {getCartItemsQty > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {getCartItemsQty}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Navbar;
