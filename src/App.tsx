import { Route, Routes } from "react-router-dom";

import Store from "./pages/store/Store";
import Layout from "./components/layout/Layout";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Login from "./pages/login/Login";

function App() {
    return (
        <ShoppingCartProvider>
            <Layout>
                {/* Layout contiene Navbar component */}
                <Routes>
                    <Route path="/store" element={<Store />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/login" element={<Login />} />

                    <Route element={<PrivateRoute />}>
                        <Route path="/cart" element={<Cart />} />
                    </Route>
                </Routes>
            </Layout>
        </ShoppingCartProvider>
    );
}

export default App;
