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
          <li>Check out mais rápido</li>
          <li>Frete grátis para todo o Brasil</li>
          <li>Acesso ao seu histórico de ordens</li>
          <li>Acompanhe seus pedidos</li>
        </ul>
        <Link to="/signup">
          <StyledBtnLogin>Criar conta</StyledBtnLogin>
        </Link>
      </div>
    </StyledCreateAcc>
  );
}

export default LoginCreateAcc;
