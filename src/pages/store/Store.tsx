import React from 'react'
import ProductItem from '../../components/productItem/ProductItem'
import Container from '../../components/container/Container';

function Store() {
  return (
    <>
      <Container>
        <h1 className="text-left my-5 ">Newest Products</h1>
        <div className="grid grid-cols-4 gap-7">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </Container>
    </>
  );
}

export default Store