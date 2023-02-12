import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { CartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";

const AddToCart = ({ product }) => {
  const { addToCart } = React.useContext(CartContext);
  const { id, colors, stock } = product;

  const [mainColors, setMainColors] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increaseHandler = () => {
    if (amount <= stock - 1) {
      setAmount(amount + 1);
    } else {
      return;
    }
  };
  const decreaseHandler = () => {
    if (amount <= 1) {
      return;
    } else {
      setAmount(amount - 1);
    }
  };

  return (
    <Wrapper>
      <div className="colors">
        <span>colors:</span>
        <div>
          {colors.map((item, index) => (
            <button
              style={{ background: item }}
              className={`${
                item === mainColors ? " color-btn active" : "color-btn"
              }`}
              key={index}
              onClick={() => setMainColors(item)}
            >
              {mainColors === item ? <FaCheck /> : null}
            </button>
          ))}
        </div>
      </div>
      <div className="btn-ccntainer">
        <AmountButtons
          amount={amount}
          decrease={decreaseHandler}
          increase={increaseHandler}
        />
        <Link
          onClick={() => addToCart(id, mainColors, amount, product)}
          className="btn"
          to="/cart"
        >
          Add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;
export default AddToCart;
