// src/components/PlantCard.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const PlantCard = ({ plant }) => {
  const { addToCart, cartItems } = useContext(CartContext);
  
  // Check if the plant is already in the cart
  const inCart = cartItems.some(item => item.id === plant.id);

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p className="description">{plant.description}</p>
      <p className="price">Price: Ksh {plant.price}</p>
      <button 
        onClick={() => addToCart(plant)} 
        disabled={inCart}>
        {inCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default PlantCard;
