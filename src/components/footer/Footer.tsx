import { Link } from "react-router-dom";
import Container from "../container/Container";
import { BsRCircle } from "react-icons/bs";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";

export default function Footer() {
    return (
        <>
            {/* Contact Section */}
            <footer className="bg-gradient-to-r from-blue-50 to-purple-50 py-16 px-10">
                <Container>
                    {/* First Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="flex items-center gap-2 text-5xl font-extrabold italic text-purple-600">
                            Shop<span className="not-italic">IT</span>
                            <BsRCircle className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-[18px] font-semibold text-gray-700 mb-4">
                                Subscribe to our newsletter
                            </h3>
                            <div className="relative border-b-[1px]">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full h-12 px-4 text-gray-700 bg-transparent placeholder-gray-500 focus:outline-none"
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-purple-600 text-[16px] font-medium bg-transparent hover:opacity-75 transition">
                                    <HiArrowLongRight className="size-10" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                        <div>
                            <p className="mb-4 text-gray-600">
                                123 Main St, City, Country
                            </p>
                            <p className="mb-4 text-gray-600">
                                Phone: +1 234 567 890
                            </p>
                            <div className="flex gap-4">
                                <span className="text-gray-500">
                                    <FaCcVisa className="size-8" />
                                </span>
                                <span className="text-gray-500">
                                    <FaCcMastercard className="size-8" />
                                </span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-3">
                                    Shops
                                </h4>
                                <ul className="text-gray-600">
                                    <li>Shop 1</li>
                                    <li>Shop 2</li>
                                    <li>Shop 3</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-3">
                                    Brands
                                </h4>
                                <ul className="text-gray-600">
                                    <li>Brand 1</li>
                                    <li>Brand 2</li>
                                    <li>Brand 3</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-3">
                                    Company
                                </h4>
                                <ul className="text-gray-600">
                                    <li>About Us</li>
                                    <li>Careers</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-3">
                                    Social Media
                                </h4>
                                <ul className="text-gray-600">
                                    <li>Facebook</li>
                                    <li>Twitter</li>
                                    <li>Instagram</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <hr className="border-gray-300 my-2" />

                    {/* Third Row */}
                    <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
                        <p>&copy; 2025 ShopIT. All rights reserved.</p>
                        <div className="flex gap-4 mt-2 sm:mt-0">
                            <Link
                                to="/store"
                                className="hover:text-purple-600 transition"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                to="/store"
                                className="hover:text-purple-600 transition"
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    );
}
