import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetails = () => {
  const { id } = useParams(); 
  const { products} = useSelector((state) => state.products);
  const product = products.find(p => p.id === id)

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
