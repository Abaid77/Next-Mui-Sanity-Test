import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

// const [productList, setProductList] = useState([]);

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const products = await client.fetch('*[_type == "product"]');

//       setState({ ...state, products });
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   fetchData();
// }, []);

const service = {
  getData: () => {
    return new Promise((resolve, reject) => {
      resolve({
        count: product.length,
        data: products,
      });
    });
  },
};

export default service;
