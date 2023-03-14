/* eslint-disable no-unused-vars */
import { useContext, useRef, useEffect, useState } from 'react';
import { StyledContainerCart, OverlayStyle } from './styles';
import ShoeCardSmall from '../../ShoeCardSmall';
import { CartContext } from '../../../contexts/cartContext';

function CartModal({ modalCart, setModalCart }) {
  const { order, setOrder } = useContext(CartContext);
  const modalRef = useRef(null);
  const [modalInitialized, setModalInitialized] = useState(false);

  function handleClickOutside(e) {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setModalCart(false);
      setModalInitialized(false);
      document.removeEventListener('click', handleClickOutside);
    }
  }

  useEffect(() => {
    if (modalCart) {
      setModalInitialized(true);
    }
  }, [modalCart]);

  useEffect(() => {
    if (modalInitialized) {
      document.addEventListener('click', handleClickOutside);
    }
  }, [modalInitialized]);

  return (
    <>
      {modalCart ? <OverlayStyle /> : null}
      <StyledContainerCart modalCart={modalCart} ref={modalRef}>
        <div className="main-container">
          <div className="container-title">
            <h2>Carrinho</h2>
            <ion-icon name="close-outline" />
          </div>
          <div>
            {order.map((element) => {
              const index = order.indexOf(element);
              return (
                <ShoeCardSmall
                  key={index}
                  element={element}
                  index={index}
                  order={order}
                  setOrder={setOrder}
                />
              );
            })}
          </div>
        </div>
      </StyledContainerCart>
    </>
  );
}

export default CartModal;
