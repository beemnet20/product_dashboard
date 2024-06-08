import React from 'react';
import { useSelector } from 'react-redux';

const ProductList = () => {
  const { products, loading, error } = useSelector(state => state.products);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.length > 0 ? (
          products.map(product => (
            <li key={product.id}>
              {product.title}
            </li>
          ))
        ) : (
          <li>No products available</li>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
