import React from 'react';
import PropTypes from 'prop-types';

const Cart = ({ product, alertProduct }) => {
  const { name, price, image } = product;

  const cardStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px',
    width: '200px',
    textAlign: 'center',
    cursor: 'pointer',
  };

  return (
    <div style={cardStyle} onClick={() => alertProduct(name)}>
      <img src={image} alt={name} style={{ maxWidth: '100%' }} />
      <h3>{name}</h3>
      <p>{price}</p>
      <a class="btn btn-primary btn-sm " href="#" role="button">Add to cart</a>
    </div>
  );
};

// Default props for Cart
Cart.defaultProps = {
  product: {
    name: 'Default Product',
    price: '0.00MAD',
    image: 'https://th.bing.com/th/id/R.1962a0e630c305dd2d3f94727366682c?rik=aYt8oDydsZXttg&pid=ImgRaw&r=0',
  },
  alertProduct: () => {},
};

// Prop types checking for Cart
Cart.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  alertProduct: PropTypes.func.isRequired,
};
export default Cart;