import { Link } from 'react-router-dom';
import { StyledBtnLogin } from '../LoginForm/styles';
import StyledCreateAcc from './styles';

function LoginCreateAcc() {
  return (
    <StyledCreateAcc>
      <h3>Cliente novo?</h3>
      <div>
        <p>Crie um conta e você será capaz de:</p>
        <ul>
          <li>Finalizar seus pedidos</li>
          <li>Frete gratuito para todo o Brasil</li>
          <li>Promoções exclusivas</li>
          <li>Editar o seu perfil</li>
        </ul>
        <Link to="/signup">
          <StyledBtnLogin>Criar conta</StyledBtnLogin>
        </Link>
      </div>
    </StyledCreateAcc>
  );
}

export default LoginCreateAcc;
