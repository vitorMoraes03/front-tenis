/* eslint-disable no-unused-vars */
import { useContext, useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledContainerCart, OverlayStyle } from './styles';
import ShoeCardSmall from '../../ShoeCardSmall';
import { CartContext } from '../../../contexts/cartContext';
import { StyledBtnLogin } from '../../../pages/Login/styles';

function CartModal({ modalCart, setModalCart }) {
  const { order, setOrder } = useContext(CartContext);
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const [modalInitialized, setModalInitialized] = useState(false);

  function handleClickOutside(e) {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setModalCart(false);
      setModalInitialized(false);
      document.removeEventListener('click', handleClickOutside);
    }
  }

  function closeModal(){
    setModalCart(false);
    setModalInitialized(false);
    document.removeEventListener('click', handleClickOutside);
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

  const handleCheckout = () => {
    setModalCart(false);
    setModalInitialized(false);
    document.removeEventListener('click', handleClickOutside);
    navigate('/checkout');
  };

  return (
    <>
      {modalCart ? <OverlayStyle /> : null}
      <StyledContainerCart modalCart={modalCart} ref={modalRef}>
        <div className="main-container">
          <div className="container-title">
            <h2>Carrinho</h2>
            <ion-icon name="close-outline" onClick={closeModal}/>
          </div>
          <div>
            {order.map((element) => (
                <ShoeCardSmall
                  key={`${element.idCart}-modal`}
                  element={element}
                  order={order}
                  setOrder={setOrder}
                />
              ))}
          </div>
          <div className="container-button">
            <StyledBtnLogin onClick={handleCheckout}>
              Finalizar Compra
            </StyledBtnLogin>
          </div>
        </div>
      </StyledContainerCart>
    </>
  );
}

export default CartModal;
