import { useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  StyledCheckOutBackground,
  StyledBtnsCheckout,
  StyledCheckOutContainer,
  StyledBtnSmall,
} from './styles';
import { StyledBtnLogin } from '../Login/styles';
import { CartContext } from '../../contexts/cartContext';
import { api } from '../../api/api';
import ShoeCardSmall from '../../components/ShoeCardSmall';

function CheckOut() {
  const { order, setOrder } = useContext(CartContext);
  const navigate = useNavigate();

  function priceTotal() {
    const sum = order.reduce((acum, element) => acum + element.price);

    return sum.toFixed(2);
  }

  useEffect(() => {
    if (order.length === 0) {
      navigate('/shop');
      alert('Nada no carrinho'); // double render, ver como vai ficar com o modal
    }
  }, [order]);

  const checkOutCart = async () => {
    try {
      const shoes = order.map((element) => ({
        id: element.id,
        size: element.size,
      }));

      const finalOrder = {
        priceTotal: priceTotal(),
        shoes,
      };

      await api.post('/order/create', finalOrder);
      setOrder([]);
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
            {order.map((element) => {
              const index = order.indexOf(element);
              return (
                <ShoeCardSmall
                  key={index}
                  props={[element, index, order, setOrder]}
                />
              );
            })}
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
        <StyledBtnLogin onClick={checkOutCart}>Comprar</StyledBtnLogin>
      </StyledBtnsCheckout>
    </StyledCheckOutBackground>
  );
}

export default CheckOut;
