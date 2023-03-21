import { useContext, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  StyledCheckOutBackground,
  StyledBtnsCheckout,
  StyledCheckOutContainer,
  StyledBtnSmall,
} from './styles';
import { StyledBtnLogin } from '../Login/LoginForm/styles';
import { CartContext } from '../../contexts/cartContext';
import api from '../../api/api';
import ShoeCardSmall from '../../components/ShoeCardSmall';

function CheckOut({ setPromoText }) {
  const { order, setOrder } = useContext(CartContext);
  const navigate = useNavigate();
  const [emptyCart, setEmptyCart] = useState(false);

  useEffect(
    () => (order.length === 0 ? setEmptyCart(true) : setEmptyCart(false)),
    [order]
  );

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
      alert('erro na compra');
    }
  };

  return (
    <StyledCheckOutBackground>
      <StyledCheckOutContainer>
        <div className="checkout-title">
          <h2>Resumo da Compra:</h2>
          <Link to="/shop">
            <StyledBtnSmall>Continuar Compra</StyledBtnSmall>
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
            <p className="total-price">Preço total</p>
            <p>R${priceTotal()}</p>
          </div>
          <div className="delivery-tax">
            <p>Frete</p>
            <p>Grátis</p>
          </div>
        </div>
      </StyledCheckOutContainer>
      <StyledBtnsCheckout>
        {emptyCart ? null : (
          <StyledBtnLogin onClick={checkOutCart}>
            Finalizar Compra
          </StyledBtnLogin>
        )}
      </StyledBtnsCheckout>
    </StyledCheckOutBackground>
  );
}

export default CheckOut;
