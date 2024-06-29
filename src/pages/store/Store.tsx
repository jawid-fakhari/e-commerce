import React from "react";
import ProductItem from "../../components/productItem/ProductItem";
import Container from "../../components/container/Container";
import { Link } from "react-router-dom";

function Store() {
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
