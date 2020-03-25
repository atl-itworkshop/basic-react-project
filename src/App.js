import React, { useState, useEffect } from 'react';
import axios from "axios";

const App = () => {

  let [data, setData] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:5001/api/v1/products")
    .then(resp => {
        return resp.data;
    })
    .then(response => {
        // data = response.data;
        setData(response.data)
    })
  }, [data])

  return (
    <div>
      Basic React Application with Node
      <div>
        {JSON.stringify(data)}
      </div>
    </div>
  );
}

export default App;
