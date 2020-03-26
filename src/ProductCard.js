import React from "react";

export const ProductCard = ({ product, deleteProduct }) => {
  return (
    <div style={styles.productTile}>
      <header style={styles.productTitle}>
        {product.title}{" "}
        <button
          onClick={() => {
            deleteProduct(product._id);
          }}
          style={styles.btnStyle}>
          X
        </button>
      </header>
      <div> Type: {product.type}</div>
      <div>Gender: {product.gender}</div>
      <div>
        Color: <div style={getColorStyle(product.color)}></div>
      </div>
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
    fontSize: "24px",
    textTransform: "uppercase",
    padding: "5px"
  },
  colorButtonStyles: {
    borderRadius: "50%",
    height: "20px",
    width: "20px",
    border: "1px solid black",
    display: "inline-block"
  },
  btnStyle : {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
  },
  btnAddStyle : {
    background: '#043927',
    color: '#fff',
    border: '1px solid',
    padding: '5px',
    cursor: 'pointer'
  }
};

const getColorStyle = color => {
  return {
    ...styles.colorButtonStyles,
    background: color
  };
};
