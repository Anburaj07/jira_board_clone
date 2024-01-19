import React from "react";
import styled from "styled-components";

const Cart = ({ content, onDragStart, title }) => {
  return (
    <CART draggable onDragStart={onDragStart} title={title}>
      <p>{content}</p>
      {title == "done" && "✅"}
    </CART>
  );
};

export default Cart;

const CART = styled.div`
  display: flex;
  cursor: grab;
  background-color: #ffffff;
  color: black;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  min-height: 75px;
  border-radius: 4px;
  p {
    text-decoration: ${(props) =>
      props.title == "done" ? "line-through" : "none"};
  }
  /* text-decoration: line-through; */
`;
