import React, { useState, useEffect } from "react";
import axios from "axios";

import { ProductCard } from "./ProductCard";

const App = () => {
  let [data, setData] = useState([]);

  const deleteProduct = id => {
    console.log("product deleted..."+id);
    axios
      .delete(`http://localhost:5001/api/v1/products/${id}`)
      .then(resp => {
        return resp.data;
      })
      .then(response => {
        setData(response.data);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/v1/products")
      .then(resp => {
        return resp.data;
      })
      .then(response => {
        setData(response.data);
      });
  }, []);

  return (
    <div>
      <div>
        {data.map(product => {
          return (
            <ProductCard
              key={product._id}
              product={product}
              deleteProduct={deleteProduct}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
