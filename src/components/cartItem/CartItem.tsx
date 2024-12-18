import { useEffect, useState } from "react";
import Button from "../button/Button";
import { getProduct } from "../../services/api";
import { IProduct } from "../../type/Servers";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { Link } from "react-router-dom";

interface ICartItem {
    id: number;
    quantity: number;
}
function CartItem({ id, quantity }: ICartItem) {
    const [product, setProduct] = useState<IProduct>();

    const {
        handleIncreaseProductQty,
        handleDecreaseProductQty,
        handleRemoveItemFromCart,
    } = useShoppingCartContext();

    useEffect(() => {
        getProduct(id).then((data) => {
            setProduct(data);
        });
    });

    return (
        <div className="flex items-start gap-x-6 my-6 border-b pb-4">
            <Link to={`/product/${id}`} className="block">
                <img
                    className="rounded-lg w-fit h-24 object-cover"
                    src={product?.image}
                    alt={product?.title}
                />
            </Link>
            <div className="flex-1">
                <h1 className="font-semibold text-lg text-gray-800">
                    {product?.title}
                </h1>
                <div className="mt-3 space-y-2">
                    <Button
                        className="w-full py-2 font-medium rounded-md transition"
                        variant="primary"
                        onClick={() => handleIncreaseProductQty(id)}
                    >
                        +
                    </Button>
                    <Button
                        className="w-full py-2 font-medium rounded-md transition"
                        variant="secondary"
                        onClick={() => handleDecreaseProductQty(id)}
                    >
                        -
                    </Button>
                    <Button
                        className="w-full py-2 font-medium rounded-md transition"
                        variant="warning"
                        onClick={() => handleRemoveItemFromCart(id)}
                    >
                        🗑️
                    </Button>
                </div>
                <div className="w-full px-4 py-2 mt-3 border-t text-center font-medium text-gray-700">
                    Quantity: {quantity}
                </div>
            </div>
        </div>
    );
}

export default CartItem;
