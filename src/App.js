import React from 'react';
import axios from "axios";

axios
    .get("http://localhost:5001/api/v1/products")
    .then(resp => {
        return resp.data;
    })
    .then(response => {
        console.log(response.data);
    })

const App = () => {
  return (
    <div>
      Basic React Application with Node
    </div>
  );
}

export default App;
