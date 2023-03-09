import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { InputWrapper } from '../../../global';
import { AuthContext } from '../../../contexts/authContext';
import { api } from '../../../api/api';
import { StyledForm, StyledContainerBtn, StyledBtnLogin } from '../styles';

function LoginForm() {
  const navigate = useNavigate();
  const { setLoggedInUser } = useContext(AuthContext);

  const [formLogin, setFormLogin] = useState({
    email: '',
    password: '',
  });

  const [emailMsg, setEmailMsg] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');

  function handleChange(e) {
    setFormLogin({ ...formLogin, [e.target.name]: e.target.value });
  }

  function checkEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formLogin.email === '') {
      setEmailMsg('Campo obrigatório.');
      return;
    }
    if (!emailRegex.test(formLogin.email)) {
      setEmailMsg('Email incorreto.');
    }
  }

  function checkPassword() {
    const passwordRegex = /^(?=.*\d).{4,10}$/gm;
    if (formLogin.password === '') {
      setPasswordMsg('Campo obrigatório.');
      return;
    }
    if (!passwordRegex.test(formLogin.password)) {
      setPasswordMsg('Password incorreto.');
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    checkEmail();
    checkPassword();
    if (emailMsg !== '' || passwordMsg !== '') return;

    try {
      const res = await api.post('/user/login', formLogin);
      setLoggedInUser({ ...res.data });
      localStorage.setItem('loggedInUser', JSON.stringify(res.data));
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledForm>
      <InputWrapper>
        <label htmlFor="inputEmail">
          Endereço de Email:
          <input
            id="inputEmail"
            // type="password"
            type="text"
            name="email"
            onChange={handleChange}
            value={formLogin.email}
            required
          />
        </label>
        <span>{emailMsg}</span>
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="inputPassword">
          Password:
          <input
            id="inputPassword"
            type="text"
            name="password"
            onChange={handleChange}
            value={formLogin.password}
            required
          />
        </label>
        <span>{passwordMsg}</span>
      </InputWrapper>
      <StyledContainerBtn>
        <StyledBtnLogin type="submit" onClick={handleSubmit}>
          Login
        </StyledBtnLogin>
        <Link to={''}>Esqueceu seu password?</Link>
      </StyledContainerBtn>
    </StyledForm>
  );
}

export default LoginForm;
