/* eslint-disable no-unused-vars */
import { useContext, useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledContainerCart, OverlayStyle } from './styles';
import ShoeCardSmall from '../ShoeCardSmall';
import { CartContext } from '../../contexts/cartContext';
import { StyledBtnLogin } from '../../pages/Login/LoginForm/styles';

function CartModal({ modalCart, setModalCart }) {
  const { order, setOrder } = useContext(CartContext);
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const [modalInitialized, setModalInitialized] = useState(false);
  const [emptyCart, setEmptyCart] = useState(false);

  function handleClickOutside(e) {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setModalInitialized(false);
      setModalCart(false);
      document.removeEventListener('click', handleClickOutside);
    }
  }

  function closeModal() {
    setModalInitialized(false);
    setModalCart(false);
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

  useEffect(
    () => (order.length === 0 ? setEmptyCart(true) : setEmptyCart(false)),
    [order]
  );

  const handleCheckout = () => {
    setModalInitialized(false);
    setModalCart(false);
    document.removeEventListener('click', handleClickOutside);
    navigate('/checkout');
  };

  const handleShopMore = () => {
    setModalInitialized(false);
    setModalCart(false);
    document.removeEventListener('click', handleClickOutside);
    navigate('/shop');
  };

  return (
    <>
      {modalCart ? <OverlayStyle /> : null}
      <StyledContainerCart modalCart={modalCart} ref={modalRef}>
        <div className="main-container">
          <div className="container-title">
            <h2>{emptyCart ? 'Carrinho vazio' : 'Carrinho'}</h2>
            <ion-icon name="close-outline" onClick={closeModal} />
          </div>
          <div>
            {order
              ? order.map((element) => (
                  <ShoeCardSmall
                    key={`${element.idCart}-modal`}
                    element={element}
                    order={order}
                    setOrder={setOrder}
                  />
                ))
              : null}
          </div>
          <div className="container-button">
            {emptyCart ? null : (
              <StyledBtnLogin onClick={handleCheckout}>Checkout</StyledBtnLogin>
            )}
            <StyledBtnLogin onClick={handleShopMore}>Voltar</StyledBtnLogin>
          </div>
        </div>
      </StyledContainerCart>
    </>
  );
}

export default CartModal;
