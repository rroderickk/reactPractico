import React, { useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';
import '../styles/ProductList.scss';                   /*@styles*/ //! (@) => @styles


const ProductList =()=> { 
  const API = "https://api.escuelajs.co/api/v1/products";
  // try{	
    // const [products, setProducts] = useState([]);
  // const API = "https://api.escuelajs.co/api/v1/products";
  //   const fetchApi = async () => {
  //     await fetch(API)
  //       .then((response) => response.json())
  //       .then((data) => setProducts(data));
  //   };
  //   useEffect(() => {
  //     fetchApi();
  //   }, []);
  // } catch(e) {	
  //   console.error(e.stack,'\n[*] '+e.name,'\n[*] '+e.message)
  // };
  
  // const products = useGetProducts(API);  //! Si funciona
  return (
  <section className="main-container-productlist">
    <div className="ProductList-productlist">
    {products.map(product => (
      <ProductItem product={product} key={product.id}/>
    ))}
    </div>
  </section>
  ); 
}; export default ProductList;