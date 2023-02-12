import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = (props) => {
  const { star, reviews } = props;
  return (
    <Wrapper>
      <div className="stars">
        <span>
          {star >= 1 ? (
            <BsStarFill />
          ) : star >= 0.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        <span>
          {star >= 2 ? (
            <BsStarFill />
          ) : star >= 1.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        <span>
          {star >= 3 ? (
            <BsStarFill />
          ) : star >= 2.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        <span>
          {star >= 4 ? (
            <BsStarFill />
          ) : star >= 3.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        <span>
          {star === 5 ? (
            <BsStarFill />
          ) : star >= 4.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
      </div>
      <p className="reviews">({reviews} customer reviews)</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;
