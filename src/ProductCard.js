import React from "react";

export const ProductCard = ({ product, deleteProduct }) => {
   const colorButtonStyle = {
      borderRadius: "50%",
      height: "20px",
      width: "20px",
      border: "1px solid black",
      display: "inline-block",
      background: product.color
   };

   return (
      <div className="productTile">
         <header className="productTitle">
            {product.title}
            <button
               onClick={() => {
                  deleteProduct(product._id);
               }}
               className="btnStyle"
            >
               X
            </button>
         </header>
         <div> Type: {product.type}</div>
         <div>Gender: {product.gender}</div>
         <div>
            Color: <div style={colorButtonStyle}></div>
         </div>
         <div>Price: ${product.price}</div>
         <div>Company: {product.company}</div>
      </div>
   );
};
