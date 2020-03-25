import React from "react";

export const ProductCard = ({ product }) => {
  return (
    <div style={styles.productTile}>
    <header style={styles.productTitle}>{product.title}</header>
      <div> Type: {product.type}</div>
      <div>Gender: {product.gender}</div>
      <div>Color: <div style={getColorStyle(product.color)}></div></div>
      <div>Price: ${product.price}</div>
      <div>Company: {product.company}</div>
    </div>
  );
};

const styles = {
  productTile: {
    border: "1px solid grey",
    display: "inline-block",
    background: "pink",
    margin: "10px",
    fontSize: "24px",
    width: "300px"
  },
  productTitle: {
      background: "yellow",
      fontSize: "36px",
      textTransform: "uppercase",
      padding: "5px"
  },
  colorButtonStyles: {
    borderRadius: "50%",
    height: "20px",
    width: "20px",
    border: "1px solid black",
    display: "inline-block"
  }
};

const getColorStyle = (color) => {
    return {
        ...styles.colorButtonStyles,
        background: color
    }
}