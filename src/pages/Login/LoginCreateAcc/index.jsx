import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledBtnLogin } from '../styles';

const StyledCreateAcc = styled.div`
  width: 50%;
  padding: 6rem var(--space-medium);
  background-color: var(--secondary-shade);

  h3 {
    font-weight: 800;
    margin-bottom: var(--space-small);
  }

  p {
    margin-bottom: 1rem;
    font-size: var(--font-medium);
  }

  ul {
    margin-left: var(--space-medium);
    margin-bottom: 3rem;
  }

  li {
    list-style: initial;
    margin-bottom: 0.5rem;
    padding-left: 1rem;
  }
`;

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
