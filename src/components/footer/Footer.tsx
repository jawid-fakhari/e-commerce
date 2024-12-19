import { Link } from "react-router-dom";
import Container from "../container/Container";

export default function Footer() {
    return (
        <>
            {/* Contact Section */}
            <footer className="bg-gray-100 mt-20 py-10">
                <Container>
                    {/* First Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                        <div className="text-4xl font-bold">LOGO</div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Subscribe to our newsletter
                            </h3>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-2 w-full mb-2"
                            />
                            <button className="bg-blue-500 text-white p-2 w-full">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                        <div>
                            <p className="mb-4">123 Main St, City, Country</p>
                            <p className="mb-4">Phone: +1 234 567 890</p>
                            <div className="flex gap-4">
                                <span>Visa Icon</span>
                                <span>Mastercard Icon</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div>
                                <h4 className="font-semibold mb-2">Shops</h4>
                                <ul>
                                    <li>Shop 1</li>
                                    <li>Shop 2</li>
                                    <li>Shop 3</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Brands</h4>
                                <ul>
                                    <li>Brand 1</li>
                                    <li>Brand 2</li>
                                    <li>Brand 3</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Company</h4>
                                <ul>
                                    <li>About Us</li>
                                    <li>Careers</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">
                                    Social Media
                                </h4>
                                <ul>
                                    <li>Facebook</li>
                                    <li>Twitter</li>
                                    <li>Instagram</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Third Row */}
                    <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
                        <p>&copy; 2025 ShopIT. All rights reserved.</p>
                        <div className="flex gap-4 mt-2 sm:mt-0">
                            <Link to="/store">Privacy Policy</Link>
                            <Link to="/store">Terms of Service</Link>
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    );
}
