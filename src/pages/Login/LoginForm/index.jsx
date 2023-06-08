/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { InputWrapper } from '../../../global';
import { AuthContext } from '../../../contexts/authContext';
import { CartContext } from '../../../contexts/cartContext';
import api from '../../../api/api';
import { StyledForm, StyledContainerBtn, StyledBtnLogin } from './styles';

function LoginForm({ promoText }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setLoggedInUser } = useContext(AuthContext);
  const { order } = useContext(CartContext);
  const [formLogin, setFormLogin] = useState({
    email: '',
    password: '',
  });
  const [emailMsg, setEmailMsg] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');
  const [goToCheckout, setGoToCheckout] = useState(false);

  function handleChange(e) {
    setFormLogin({ ...formLogin, [e.target.name]: e.target.value });
  }

  function checkEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formLogin.email === '') {
      setEmailMsg('Campo obrigatório.');
      return false;
    }
    if (!emailRegex.test(formLogin.email)) {
      setEmailMsg('Email incorreto.');
      return false;
    }
    setEmailMsg('');
    return true;
  }

  function checkPassword() {
    const passwordRegex = /^(?=.*\d).{4,10}$/gm;
    if (formLogin.password === '') {
      setPasswordMsg('Campo obrigatório.');
      return false;
    }
    if (!passwordRegex.test(formLogin.password)) {
      setPasswordMsg('Password incorreto.');
      return false;
    }
    setPasswordMsg('');
    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!checkEmail()) return;
    if (!checkPassword()) return;

    try {
      const res = await api.post('/user/login', formLogin);
      setLoggedInUser({ ...res.data });
      localStorage.setItem('loggedInUser', JSON.stringify(res.data));
      if (goToCheckout) {
        navigate('/checkout');
        return;
      }
      navigate('/');
    } catch (err) {
      console.log(err);
      if (err.response.status === 401) {
        setPasswordMsg('Password incorreto.');
      }
      if (err.response.status === 404) {
        setPasswordMsg('Email ou password inválidos.');
        setEmailMsg('Email ou password inválidos.');
      }
    }
  };

  useEffect(() => {
    if (order.length === 0) {
      setGoToCheckout(false);
      return;
    }
    if (promoText === 'Você precisa estar logado para finalizar sua compra.');
    setGoToCheckout(true);
  }, [promoText, order]);

  return (
    <StyledForm>
      <InputWrapper>
        <label htmlFor="inputEmail">
          {t('Endereço de Email')}:
          <input
            id="inputEmail"
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
            type="password"
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
          {t('Login')}
        </StyledBtnLogin>
      </StyledContainerBtn>
    </StyledForm>
  );
}

export default LoginForm;
