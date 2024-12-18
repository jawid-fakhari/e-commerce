import Container from "../../components/container/Container";
import CartItem from "../../components/cartItem/CartItem";
import Button from "../../components/button/Button";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Cart() {
    const { cartItems } = useShoppingCartContext();

    return (
        <Container>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md mt-5">
                <div className="space-y-4">
                    {cartItems.map((item) => (
                        <CartItem key={item.id} {...item} />
                    ))}
                </div>
                <div className="mt-6 border-t pt-4 text-gray-800">
                    <p className="text-lg font-medium">
                        <span className="text-gray-600">Full Price:</span> 1000$
                    </p>
                    <p className="text-lg font-medium text-red-600">
                        <span className="text-gray-600">Discount:</span> 53$
                    </p>
                    <p className="text-lg font-bold text-green-600">
                        <span className="text-gray-600">Price:</span> 947$
                    </p>
                </div>
                <Button
                    className="mt-6 w-1/5 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
                    variant="success"
                >
                    Order
                </Button>
            </div>
        </Container>
    );
}

export default Cart;
