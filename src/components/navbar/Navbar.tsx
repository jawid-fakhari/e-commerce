import { Link } from "react-router-dom";
import Container from "../container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import Button from "../button/Button";
import { BsRCircle } from "react-icons/bs";

function Navbar() {
    const { getCartItemsQty, handleLogout } = useShoppingCartContext();
    return (
        <div className="h-16 border-b bg-gradient-to-r from-blue-50 to-purple-50 flex items-center">
            <Container>
                <div className="flex justify-between items-center gap-6">
                    <div className="left-side flex  w-full">
                        <ul className="flex gap-6 items-center">
                            <p className="font-mono italic font-bold text-lg text-purple-600 flex">
                                Shop
                                <span className="not-italic">IT</span>
                                <BsRCircle className="w-3" />
                            </p>
                            <li>
                                <Link
                                    className="text-gray-700 hover:text-purple-600 font-medium transition"
                                    to="/store"
                                >
                                    Store
                                </Link>
                            </li>
                        </ul>
                        <div className="search-input mx-8">
                            <form className="">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg
                                            className="w-4 h-4 text-gray-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type="search"
                                        id="default-search"
                                        className="block w-full h-8 pl-10 text-sm text-gray-800 border border-gray-300 rounded-lg bg-white focus:ring-purple-500 focus:border-purple-500"
                                        placeholder="Search..."
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-500 text-white h-6 px-3 rounded-md hover:bg-purple-600 transition"
                                    >
                                        Search
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button
                            className="bg-purple-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-600 transition"
                            onClick={handleLogout}
                        >
                            Logout
                        </Button>
                        <Link to={"/cart"} className="relative">
                            <button className="text-2xl text-gray-800 hover:text-purple-600 transition">
                                🛒
                            </button>
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
