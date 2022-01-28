
import React from 'react';
import ProductItem from '../components/ProductItem.jsx';
import '../styles/ProductList.scss';

const ProductList = () => { return (
<section className="main-container-productlist">
  <div className="ProductList-productlist">
    <ProductItem />
    <ProductItem />
  </div>
</section>
); }; export default ProductList;