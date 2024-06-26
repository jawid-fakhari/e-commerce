import React from "react";
import Container from "../../components/container/Container";
import CartItem from "../../components/cartItem/CartItem";
import Button from "../../components/button/Button";

function Cart() {
  return (
    <Container>
      <div className="">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="">
        <p>Full Price: 1000$</p>
        <p>Discount: 53$</p>
        <p>Price: 947$</p>
      </div>
      <Button className="" variant="success">Order</Button>
    </Container>
  );
}

export default Cart;
