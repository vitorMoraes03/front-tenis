import { createContext, useState, useMemo, useEffect } from 'react';

const CartContext = createContext([]);
// {shoesName: , id: , quantity: }

function CartContextComponent({ children }) {
  const [order, setOrder] = useState([]);

  const cartContextValue = useMemo(
    () => ({ order, setOrder }),
    [order, setOrder]
  );

  useEffect(() => {
    const getOrder = localStorage.getItem('storedOrder');
    setOrder(JSON.parse(getOrder || '""'));
  }, []);

  // A idéia é tirar o SetItem baseado em Order,
  // e passar para o momento mais específico
  // de criação da order.
  // addShoes no ShoeCard, deleteItem no ShoeCardSmall
  // localStorage.setItem('storedOrder', JSON.stringify(order));

  // useEffect(() => {
  //   if (order.length === 0) return;
  //   localStorage.setItem('storedOrder', JSON.stringify(order));
  // }, [order]);

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartContextComponent };
