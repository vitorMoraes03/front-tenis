import styled from 'styled-components';
import { StyledLoginContainer } from '../Login/LoginContainer';
import { StyledBtnLogin } from '../Login/styles';

export const StyledSignUpContainer = styled(StyledLoginContainer)`
  h1 {
    padding: var(--space-medium);
  }

  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  small {
    text-transform: uppercase;
    font-size: 1rem;
    color: var(--main-shade);
  }

  form {
    max-width: 50rem;
    margin: 0 auto;
  }

  input[type='date'] {
    font-family: inherit;
  }
`;

export const StyledBtnSignUp = styled(StyledBtnLogin)`
  display: block;
  margin: var(--space-medium) auto;
`;
