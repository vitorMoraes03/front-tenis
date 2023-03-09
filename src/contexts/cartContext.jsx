import { createContext, useState, useMemo } from 'react';

const CartContext = createContext([]);
// {shoesName: , id: , quantity: }

function CartContextComponent({ children }) {
  const [order, setOrder] = useState([]);

const cartContextValue = useMemo(() =>
  ({ order, setOrder }), [order, setOrder]
)

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartContextComponent };
