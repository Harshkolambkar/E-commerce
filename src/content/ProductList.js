import React from 'react';

const products = [
  {
    id: 1,
    name: 'Product 1',
    image: '../images/magnifying-glass-icon.png',
    price: 10.99
  },
  {
    id: 2,
    name: 'Product 2',
    image: '../images/magnifying-glass-icon.png',
    price: 10.99
  },
  {
    id: 3,
    name: 'Product 3',
    image: '../images/magnifying-glass-icon.png',
    price: 10.99
  },
  {
    id: 4,
    name: 'Product 4',
    image: '../images/magnifying-glass-icon.png',
    price: 10.99
  },
  {
    id: 5,
    name: 'Product 5',
    image: '../images/magnifying-glass-icon.png',
    price: 10.99
  },
  {
    id: 6,
    name: 'Product 6',
    image: '../images/magnifying-glass-icon.png',
    price: 10.99
  },

];

function ProductList() {
  return (
    <div className="product-container">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.price.toFixed(2)}</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
