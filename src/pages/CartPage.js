import React from "react";
import styled from "styled-components";
import { CartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";

const CartPage = () => {
  const { cart } = React.useContext(CartContext);
  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h1>Your cart is empty</h1>
          <Link className="btn" to="/products">
            Fill it
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <PageHero title="cart" />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
