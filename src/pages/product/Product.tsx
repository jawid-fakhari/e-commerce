import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { getProduct } from "../../services/api";
import { useEffect, useState } from "react";
import { IProduct } from "../../type/Servers";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Product() {
    // uso del useParams per prendere l'id dalla url per richiamare il prodotto corretto dal server
    const params = useParams<{ id: string }>();

    // uso dello useState per inizializzare il prodotto con il dato ricevuto dal server usando useEffect (per richiamare la funzione getProduct quando il componente viene montato)  e setto il prodotto nello stato quando viene ricevuto il dato dal server
    // il type del product è quello che abbiamo dichiarato per Product nel server, e qui perche abbiamo solo un prodotto non mettiamo [] come l'abbiamo fatto nello store
    const [product, setProduct] = useState<IProduct>();

    const {
        handleIncreaseProductQty,
        cartItems,
        handleDecreaseProductQty,
        getProductQty,
        handleRemoveItemFromCart,
    } = useShoppingCartContext();

    useEffect(() => {
        // quando il componente viene montato, richiamiamo la funzione getProduct con il params.id come argomento
        getProduct(params.id as string)
            // quando ritorniamo un async func (api.ts) ci da un promis allora bisogna usare .then
            .then((data) => {
                setProduct(data);
            });
    }, []);

    return (
        <div className="bg-gray-50 py-6">
            <Container>
                <div className="h-auto shadow-md mt-4 grid grid-cols-12 bg-white rounded-lg overflow-hidden">
                    <div className="col-span-4 p-6 flex flex-col items-center">
                        <img
                            className="w-full h-64 object-cover rounded-lg"
                            src={product?.image}
                            alt={product?.title}
                        />
                        {getProductQty(parseInt(params.id as string)) === 0 ? (
                            <Button
                                className="mt-4 w-full py-2  font-medium rounded-md transition"
                                variant="primary"
                                onClick={() =>
                                    handleIncreaseProductQty(
                                        parseInt(params.id as string)
                                    )
                                }
                            >
                                Add to Cart
                            </Button>
                        ) : (
                            <>
                                <div className="grid grid-cols-3 gap-2 w-full mt-4">
                                    <Button
                                        className="py-2 font-medium rounded-md transition"
                                        variant="primary"
                                        onClick={() =>
                                            handleIncreaseProductQty(
                                                parseInt(params.id as string)
                                            )
                                        }
                                    >
                                        +
                                    </Button>
                                    <span className="flex justify-center items-center font-semibold text-gray-800">
                                        {getProductQty(
                                            parseInt(params.id as string)
                                        )}
                                    </span>
                                    <Button
                                        className="py-2 font-medium rounded-md transition"
                                        variant="primary"
                                        onClick={() =>
                                            handleDecreaseProductQty(
                                                parseInt(params.id as string)
                                            )
                                        }
                                    >
                                        -
                                    </Button>
                                </div>
                                <Button
                                    className="mt-4 w-full py-2 font-medium rounded-md transition"
                                    variant="warning"
                                    onClick={() =>
                                        handleRemoveItemFromCart(
                                            parseInt(params.id as string)
                                        )
                                    }
                                >
                                    Remove from Cart
                                </Button>
                            </>
                        )}
                    </div>
                    <div className="col-span-8 p-6">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">
                            {product?.title}
                        </h1>
                        <div className="text-lg text-gray-600">
                            <p className="text-blue-600 font-semibold mb-2">
                                ${product?.price}
                            </p>
                            <p>{product?.description}</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Product;
