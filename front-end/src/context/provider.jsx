import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './index';
import Light from '../theme/light';

const DEFAULT_FORM = {
  email: '',
  password: '',
  name: '',
  redirect: false,
};

function Provider({ children }) {
  const [form, setForm] = useState(DEFAULT_FORM);
  const [register, setRegister] = useState(false);
  const [theme, setTheme] = useState(Light);
  const [enableButton, setEnableButton] = useState(false);
  const [totalValueCart, setTotalValueCart] = useState(0);

  const contextValue = {
    form,
    setForm,
    register,
    setRegister,
    theme,
    setTheme,
    enableButton,
    setEnableButton,
    totalValueCart,
    setTotalValueCart,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;