import Container from "../../components/container/Container";
import CartItem from "../../components/cartItem/CartItem";
import Button from "../../components/button/Button";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Cart() {
    const { cartItems } = useShoppingCartContext();

    return (
        <Container>
            <div className="bg-white p-6 rounded-lg shadow-lg mt-6 w-1/2 mx-auto">
                <div className="space-y-4">
                    {cartItems.map((item) => (
                        <CartItem key={item.id} {...item} />
                    ))}
                </div>
                <div className="mt-6 border-t pt-4 text-gray-800">
                    <p className="text-lg font-medium flex justify-between">
                        <span className="text-gray-600">Full Price:</span>
                        <span>1000$</span>
                    </p>
                    <p className="text-lg font-medium flex justify-between text-red-600">
                        <span className="text-gray-600">Discount:</span>
                        <span>53$</span>
                    </p>
                    <p className="text-lg font-bold flex justify-between text-green-600">
                        <span className="text-gray-600">Price:</span>
                        <span>947$</span>
                    </p>
                </div>
                <Button
                    className="mt-6 w-1/6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
                    variant="success"
                >
                    Order
                </Button>
            </div>
        </Container>
    );
}

export default Cart;
