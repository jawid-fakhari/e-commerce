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
        <div className="flex items-start gap-6 my-6 pb-6 ">
            <Link to={`/product/${id}`} className="block">
                <img
                    className="rounded-md w-40 h-48"
                    src={product?.image}
                    alt={product?.title}
                />
            </Link>
            <div className="flex-auto">
                <p className="font-semibold text-xl text-gray-800">
                    {product?.title}
                </p>
                <div className="flex flex-col mt-4 gap-y-3">
                    <Button
                        variant="primary"
                        className="w-1/3 py-2 font-medium rounded-md "
                        onClick={() => handleIncreaseProductQty(id)}
                    >
                        +
                    </Button>
                    <Button
                        variant="primary"
                        className="w-1/3 py-2 font-medium rounded-md"
                        onClick={() => handleDecreaseProductQty(id)}
                    >
                        -
                    </Button>
                    <Button
                        variant="warning"
                        className="w-1/3 py-2 font-medium rounded-md "
                        onClick={() => handleRemoveItemFromCart(id)}
                    >
                        🗑️
                    </Button>
                    <div className="w-full mt-4 text-start font-medium text-gray-700">
                        Quantity: {quantity}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
