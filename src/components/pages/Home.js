import React, { useState, useEffect, Fragment } from "react";
import { ProductCard } from "./ProductCard";

import axios from "axios";

const Home = () => {
   let [data, setData] = useState([]);

   const baseUrl = process.env.REACT_APP_HOSTED_URL || "http://localhost:5000";

   useEffect(() => {
      const getProducts = async () => {
         const res = await axios.get(`${baseUrl}/api/v2/products`);
         setData(res.data.data);
      };

      getProducts();

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const config = {
      headers: { Authorization: `Bearer ${localStorage.token}` },
   };

   const deleteProduct = async (id) => {
      console.log("product deleted..." + id);

      const res = await axios.delete(`${baseUrl}/api/v2/products/${id}`, config);
      setData(res.data.data);
   };

   const addProduct = async () => {
      console.log("product added..");

      const res = await axios.post(`${baseUrl}/api/v2/products`, {
         price: 10000,
         color: "green",
         type: "T-Shirt",
         gender: "male",
         title: "Long Bottom",
         company: "ABC Inc.",
         about: "Lets Buy",
      }, config);

      setData(res.data.data);
   };

   return (
      <Fragment>
         <div>
            {data.map((product) => {
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
      </Fragment>
   );
};

export default Home;
