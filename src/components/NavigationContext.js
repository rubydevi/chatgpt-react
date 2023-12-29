import React, {
  createContext, useContext, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavigationContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </NavigationContext.Provider>
  );
};

NavigationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useNavigation = () => useContext(NavigationContext);
