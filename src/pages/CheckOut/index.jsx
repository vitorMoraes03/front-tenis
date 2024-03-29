/* eslint-disable import/no-extraneous-dependencies */
import { useContext, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  StyledCheckOutBackground,
  StyledBtnsCheckout,
  StyledCheckOutContainer,
  StyledBtnSmall,
} from './styles';
import { StyledBtnLogin } from '../Login/LoginForm/styles';
import { CartContext } from '../../contexts/cartContext';
import { AuthContext } from '../../contexts/authContext';
import api from '../../api/api';
import ShoeCardSmall from '../../components/ShoeCardSmall';

function CheckOut({ setPromoText }) {
  const { t } = useTranslation();
  const { order, setOrder } = useContext(CartContext);
  const { loggedInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [emptyCart, setEmptyCart] = useState(false);

  useEffect(
    () => (order.length === 0 ? setEmptyCart(true) : setEmptyCart(false)),
    [order]
  );

  useEffect(() => {
    if (!loggedInUser) {
      navigate('/login');
      window.scrollTo(0, 0);
      setPromoText(t('Você precisa estar logado para finalizar sua compra.'));
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function priceTotal() {
    const sum = order.reduce((acum, element) => acum + element.price, 0);
    return sum.toFixed(2);
  }

  const checkOutCart = async () => {
    try {
      const shoes = order.map((element) => ({
        id: element.id,
        size: element.size,
      }));

      const finalOrder = {
        priceTotal: priceTotal(order),
        shoes,
      };

      await api.post('/order/create', finalOrder);
      setOrder([]);
      setPromoText('Compra realizada com sucesso.');
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledCheckOutBackground>
      <StyledCheckOutContainer>
        <div className="checkout-title">
          <h2>{t('Resumo da Compra')}</h2>
          <Link to="/shop">
            <StyledBtnSmall>{t('Voltar')}</StyledBtnSmall>
          </Link>
        </div>
        <div className="checkout-main">
          <h3>
            {order.length}
            {order.length > 1 ? ' Itens' : ' Item'}
          </h3>
          <div className="checkout-cards">
            {order.map((element) => (
              <ShoeCardSmall
                key={element.idCart}
                element={element}
                order={order}
                setOrder={setOrder}
              />
            ))}
          </div>
        </div>
        <div>
          <div>
            <p className="total-price">{t('Preço total')}</p>
            <p>R${priceTotal()}</p>
          </div>
          <div className="delivery-tax">
            <p>{t('Frete Grátis')}</p>
          </div>
        </div>
      </StyledCheckOutContainer>
      <StyledBtnsCheckout>
        {emptyCart ? null : (
          <StyledBtnLogin onClick={checkOutCart}>
            {t('Finalizar compra')}
          </StyledBtnLogin>
        )}
      </StyledBtnsCheckout>
    </StyledCheckOutBackground>
  );
}

export default CheckOut;
