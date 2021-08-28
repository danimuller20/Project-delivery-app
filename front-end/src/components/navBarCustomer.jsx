import React from 'react';
import PropTypes from 'prop-types';

function NavBarCustomer(props) {
  const { textProp } = props;

  function setOrders() {
    if (
      textProp === 'produtos'
      || textProp === 'pedidos'
      || textProp === 'checkout'
      || textProp === 'detalhes'
    ) {
      return (
        <div className="navbar_pedidos">
          <a
            href="/customer/orders"
            data-testid="customer_products__element-navbar-link-orders"
          >
            MEUS PEDIDOS
          </a>
        </div>
      );
    }
  }

  function setNavbar() {
    return (
      <nav className="navbar">
        <div className="left_side">
          <div
            className="navbar_produtos"
          >
            <a
              data-testid="customer_products__element-navbar-link-products"
              href="/customer/products"
            >
              PRODUTOS
            </a>
          </div>

          { setOrders() }

        </div>

        <div className="right_side">
          <div
            className="navbar_nome"
            data-testid="customer_products__element-navbar-user-full-name"
          >
            Nome do usuário
          </div>

          <div className="navbar_sair">
            <a
              href="/login"
              data-testid="customer_products__element-navbar-link-logout"
            >
              Sair
            </a>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <>
      { setNavbar() }
    </>
  );
}

NavBarCustomer.propTypes = {
  textProp: PropTypes.string.isRequired,
};

export default NavBarCustomer;