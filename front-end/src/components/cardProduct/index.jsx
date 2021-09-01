import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import context from '../../context';
// import formatPrice from '../../services/formatPrice';

const CardProduct = ({ image, name, price, id }) => {
  const { totalValueCart, setTotalValueCart } = useContext(context);
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    if (quantity === 0) return null;
    setQuantity(quantity - 1);
    setTotalValueCart((parseFloat(totalValueCart) - parseFloat(price)).toFixed(2));
  };

  return (
    <div>
      <span data-testid={ `customer_products__element-card-price-${id}` }>
        R$
        { price }
      </span>
      <img
        src={ image }
        alt={ `bebida: ${image}` }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <span data-testid={ `customer_products__element-card-title-${id}` }>{ name }</span>
      <button
        type="button"
        onClick={ () => {
          increaseQuantity();
        } }
        data-testid={ `customer_products__button-card-rm-item-${id}` }
      >
        -
      </button>
      <span data-testid={ `customer_products__input-card-quantity-${id}` }>
        { quantity }
      </span>
      <button
        type="button"
        onClick={ () => {
          setQuantity(quantity + 1);
          setTotalValueCart((parseFloat(totalValueCart) + parseFloat(price)).toFixed(2));
        } }
        data-testid={ `customer_products__button-card-add-item-${id} ` }
      >
        +
      </button>
    </div>
  );
};

CardProduct.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default CardProduct;