import React from "react";
import styled from "styled-components";

const Cart = ({ content }) => {
  return (
    <CART>
      <p>{content}</p>
    </CART>
  );
};

export default Cart;

const CART = styled.div`
  background-color: #ffffff;
  color: black;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  min-height: 75px;
`;
