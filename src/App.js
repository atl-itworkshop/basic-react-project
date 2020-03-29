import React, { useState, useEffect } from "react";
import axios from "axios";

import { ProductCard } from "./ProductCard";

import "./App.css";

const App = () => {
   let [data, setData] = useState([]);

   // Add your hosted URL here...
   /* let baseUrl =
      process.env.NODE_ENV !== "production"
         ? "http://localhost:5000"
         : "https://tranquil-headland-85776.herokuapp.com"; */

   const baseUrl = process.env.HOSTED_URL || "http://localhost:5000";

   const deleteProduct = async id => {
      console.log("product deleted..." + id);

      const res = await axios.delete(`${baseUrl}/api/v1/products/${id}`);
      setData(res.data.data);
   };

   const addProduct = async () => {
      console.log("product added..");

      const res = await axios.post(`${baseUrl}/api/v1/products`, {
         price: 10000,
         color: "green",
         type: "T-Shirt",
         gender: "male",
         title: "Long Bottom",
         company: "ABC Inc.",
         about: "Lets Buy"
      });

      setData(res.data.data);
   };

   useEffect(() => {
      const getProducts = async () => {
         const res = await axios.get(`${baseUrl}/api/v1/products`);
         setData(res.data.data);
      };

      getProducts();

      //eslint-disable-next-line
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
         <div>
            <button onClick={addProduct} className="btnAddStyle">
               Add a Product
            </button>
         </div>
      </div>
   );
};

export default App;
