import styled from 'styled-components';
import LoginForm from '../LoginForm';
import LoginCreateAcc from '../LoginCreateAcc';
import { StyledFlex } from '../../../global';

export const StyledLoginContainer = styled.div`
  padding: var(--space-medium) 8rem;
  background-color: var(--main-white);
  color: var(--main-color);
  font-size: var(--font-medium);

  a {
    color: var(--main-color);
  }

  h1 {
    text-align: center;
    font-size: 6rem;
    font-weight: 800;
    padding: var(--space-medium);
  }
`;

const StyledSmallContainer = styled(StyledFlex)``;

export function Login() {
  return (
    <StyledLoginContainer>
      <h1>Login</h1>
      <StyledSmallContainer>
        <LoginForm />
        <LoginCreateAcc />
      </StyledSmallContainer>
    </StyledLoginContainer>
  );
}
