import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/CardProduct.css';

function CardProduct({ product }) {
  const { name, urlImage, price, id } = product;
  const [value, setValue] = useState(

  );

  const formatedPrice = (price_) => price_.replace('.', ',');

  return (
    <div>
      <div data-testid={ `customer_products__element-card-price-${id}` }>
        { formatedPrice(price) }
      </div>
      <div>
        <img
          src={ urlImage }
          alt="Bebida"
          data-testid={ `customer_products__img-card-bg-image-${id}` }
        />
      </div>
      <div>
        <span data-testid={ `customer_products__element-card-title-${id}` }>
          { name }
        </span>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          onClick={ () => setValue(value - 1) }
        >
          -
        </button>

        <input
          type="text"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ value }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ () => setValue(value + 1) }
        >
          +
        </button>
      </div>
    </div>
  );
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
  }).isRequired };

export default CardProduct;
