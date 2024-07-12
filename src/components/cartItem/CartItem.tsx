import { useEffect, useState } from "react";
import Button from "../button/Button";
import { getProduct } from "../../services/api";
import { IProduct } from "../../type/Servers";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { useParams } from "react-router-dom";

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
    <div className="flex items-start gap-x-7 my-5">
      <img className="rounded w-1/4" src={product?.image} alt="" />
      <div className="">
        <h1 className="font-semibold">{product?.title}</h1>
        <Button
          className="w-full my-1"
          variant="primary"
          onClick={() =>
            handleIncreaseProductQty(id)
          }
        >
          +
        </Button>
        <Button
          className="w-full my-1"
          variant="secondary"
          onClick={() =>
            handleDecreaseProductQty(id)
          }
        >
          -
        </Button>
        <Button
          className="w-full my-1"
          variant="pashmak"
          onClick={() =>
            handleRemoveItemFromCart(id)
          }
        >
          🗑️
        </Button>
        <div className=" w-full px-10 border-b-2 my-2">{quantity}</div>
      </div>
    </div>
  );
}

export default CartItem;
