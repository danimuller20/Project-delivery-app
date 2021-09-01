import React, { useContext, useEffect } from 'react';
import ProductsContext from '../context/ProductsContext';

function SellerSelect() {
  const { allSellers, setSelectedSeller } = useContext(ProductsContext);

  useEffect(() => {
    setSelectedSeller(allSellers[0].name);
  }, []);
  return (
    <select
      data-testid="customer_checkout__select-seller"
      onChange={ (e) => setSelectedSeller(e.target.value) }
    >
      Pessoa Vendedora Responsável:
      { allSellers.map((seller) => (
        <option value={ seller.name } key={ seller.id }>{ seller.name }</option>
      ))}
    </select>
  );
}

export default SellerSelect;