import styled from 'styled-components';
import { StyledLoginContainer } from '../Login/LoginContainer/styles';
import { StyledBtnLogin } from '../Login/LoginForm/styles';

export const StyledCheckOutBackground = styled(StyledLoginContainer)``;

export const StyledCheckOutContainer = styled.div`
  width: 40%;
  background-color: var(--secondary-shade);
  padding: var(--space-small);

  img {
    width: 30%;
  }

  h2 {
    text-transform: none;
  }

  p {
    font-size: var(--font-medium);
    font-weight: 500;
  }

  .checkout-title {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--main-color);
    align-items: center;
    padding-bottom: 1rem;
  }

  .checkout-main {
    padding: var(--space-small) 0;
  }

  .checkout-main > h3 {
    margin-bottom: var(--space-small);
    text-transform: none;
  }

  .checkout-price > p {
    font-weight: 800;
  }

  .delivery-tax {
    margin-top: 2px;
    color: var(--secondary-color);
  }

  .checkout-cards {
    border-bottom: 1px solid var(--main-color);
  }

  @media (max-width: 600px) {
    width: auto;
  }
`;

export const StyledBtnSmall = styled(StyledBtnLogin)`
  padding: 0.7rem 1rem;
`;

export const StyledBtnsCheckout = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding: var(--space-medium);
`;
