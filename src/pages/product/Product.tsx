import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { getProduct } from "../../services/api";
import { useEffect, useState } from "react";
import { IProduct } from "../../type/Servers";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Product() {
  // uso del useParams per prendere l'id dalla url per richiamare il prodotto corretto dal server
  const params = useParams<{id:string}>();
  // uso dello useState per inizializzare il prodotto con il dato ricevuto dal server usando useEffect (per richiamare la funzione getProduct quando il componente viene montato)  e setto il prodotto nello stato quando viene ricevuto il dato dal server
  // il type del product è quello che abbiamo dichiarato per Products nel server, e qui perche abbiamo solo un prodotto non mettiamo [] come l'abbiamo fatto nello store
  const [product, setProduct] = useState<IProduct>();

  const {  handleIncreaseProductQty, cartItems } = useShoppingCartContext();

  useEffect(() => {
    // Casting the 'id' property of 'params' object to string type with params.id as string
    getProduct(params.id as string).then((data) => {
      setProduct(data);
    });
  }, []);

  console.log(cartItems);
  

  return (
    <div>
      <Container>
        <div className="h-auto shadow mt-4 grid grid-cols-12">
          <div className="col-span-4 p-4">
            <img
              src={product?.image}
              alt=""
            />
            <Button
              onClick={() => handleIncreaseProductQty(parseInt(params.id as string))}
              className="mt-2 w-full ip-4"
              variant="primary" //uso di variant nel nostro componente che lo passa come props
            >
              Add to Cart
            </Button>
          </div>
          <div className="col-span-8 py-2">
            <h1 className="text-xl font-semibold">{product?.title}</h1>
            <div>
              <p>{product?.price}</p>
              <p>{product?.description}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;
