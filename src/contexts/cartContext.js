import { createContext, useState } from "react";

const CartContext = createContext([]);
// {shoesName: , id: , quantity: }

function CartContextComponent(props) {
  const [order, setOrder] = useState([]);

  return (
    <CartContext.Provider value={{ order, setOrder }}>
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContext, CartContextComponent };