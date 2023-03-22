import LoginForm from '../LoginForm';
import LoginCreateAcc from '../LoginCreateAcc';
import { StyledLoginContainer, StyledSmallContainer } from './styles';

function Login() {
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

export default Login;
