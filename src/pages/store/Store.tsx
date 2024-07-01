import React, { useEffect, useState } from "react";
import ProductItem from "../../components/productItem/ProductItem";
import Container from "../../components/container/Container";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/api";
import { Products } from "../../type/Servers";

//pagina Store che mostra tutti i prodotti nello store

function Store() {
  //con useState settiamo i products, e dentro <Products[]> importiamo il type dei prodotti dal Servers.ts
  const [products, setProducts] = useState<Products[]>([]);

  //all'interno del useEffect importo func getProduct da api.ts e con metodo then prendo dati e setto products dai data ricevuti
  useEffect(() => {
    getProducts().then((result) => {
      setProducts(result);
    });
  }, []);
  
  
  return (
    <>
      <Container>
        <h1 className="text-left my-5 ">Newest Products</h1>
        <div className="grid grid-cols-4 gap-7">
          {products.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`}>
              <ProductItem {...item}/>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Store;
