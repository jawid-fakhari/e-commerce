import React, { useEffect, useState } from "react";
import ProductItem from "../../components/productItem/ProductItem";
import Container from "../../components/container/Container";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/api";

function Store() {
  //con useState settiamo i products
  const [products, setProducts] = useState([]);

  //all'interno del useEffect importo func getProduct da api.ts e con metodo then prendo dati e setto products dai data ricevuti
  useEffect(() =>{
    getProducts().then((result) => {
     setProducts(result);
    })
    
  }, [])

  console.log(products);
  

  return (
    <>
      <Container>
        <h1 className="text-left my-5 ">Newest Products</h1>
        <div className="grid grid-cols-4 gap-7">
          <Link to={`/product/${1}`}>
            <ProductItem />
          </Link>
          <Link to={`/product/${2}`}>
            <ProductItem />
          </Link>
          <Link to={`/product/${3}`}>
            <ProductItem />
          </Link>
          <Link to={`/product/${4}`}>
            <ProductItem />
          </Link>
        </div>
      </Container>
    </>
  );
}

export default Store;
