import { useNavigate } from 'react-router-dom';
import { useContext, useState, useRef } from 'react';
import { StyledSignUpContainer, StyledBtnSignUp } from './styles';
import api from '../../api/api';
import { AuthContext } from '../../contexts/authContext';
import { Input } from '../../components/Input';
import { allRegex } from '../../global';

function SignUp({ setPromoText }) {
  const navigate = useNavigate();
  const { setLoggedInUser } = useContext(AuthContext);
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    birthday: '',
  });
  const [emailMsg, setEmailMsg] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');
  const [confirmPasswordMsg, setConfirmPasswordMsg] = useState('');
  const [firstNameMsg, setFirstNameMsg] = useState('');
  const startingRef = useRef(null);
  let submitOk = true;
  const { emailRegex, passwordRegex, confirmPasswordRegex, surNameRegex } =
    allRegex;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const checkInput = (input, regex, setMsg) => {
    if (input === '') {
      setMsg('Campo Obrigatório.');
      submitOk = false;
      return;
    }
    const newRegex = regex;
    if (!newRegex.test(input)) {
      setMsg('Preencher corretamente.');
      submitOk = false;
      return;
    }
    setMsg('');
  };

  const checkPasswordEquality = () => {
    if (form.password !== form.confirmPassword) {
      setConfirmPasswordMsg('Devem ser iguais.');
      setPasswordMsg('Devem ser iguais.');
      submitOk = false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    checkInput(form.email, emailRegex, setEmailMsg);
    checkInput(
      form.confirmPassword,
      confirmPasswordRegex,
      setConfirmPasswordMsg
    );
    checkInput(form.password, passwordRegex, setPasswordMsg);
    checkInput(form.firstName, surNameRegex, setFirstNameMsg);
    checkPasswordEquality();

    if (submitOk === false) {
      startingRef.current.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    try {
      const res = await api.post('/user/signup', form);
      setLoggedInUser({ ...res.data });
      localStorage.setItem('loggedInUser', JSON.stringify(res.data));
      setForm({ ...form, password: '', confirmPassword: '' });
      setPromoText('Usuário criado com sucesso.');
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledSignUpContainer>
      <h1 ref={startingRef}>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <Input
          field="Email"
          text="Email"
          value={form.email}
          span={emailMsg}
          type="text"
          handler={handleChange}
          small="Obrigatório"
        />
        <Input
          field="Password"
          text="Password"
          value={form.password}
          span={passwordMsg}
          type="password"
          handler={handleChange}
          placeholder="Deve conter um digíto numérico..."
          small="Obrigatório"
        />
        <Input
          field="ConfirmPassword"
          text="Confirme o password"
          value={form.confirmPassword}
          span={confirmPasswordMsg}
          type="password"
          handler={handleChange}
          small="Obrigatório"
        />
        <Input
          field="FirstName"
          text="Nome de usuário"
          value={form.firstName}
          span={firstNameMsg}
          type="text"
          handler={handleChange}
          small="Obrigatório"
        />
        <Input
          field="Birthday"
          text="Data de nascimento"
          value={form.birthday}
          type="date"
          handler={handleChange}
          small="Opcional"
        />
        <StyledBtnSignUp>Criar Conta</StyledBtnSignUp>
      </form>
    </StyledSignUpContainer>
  );
}

export default SignUp;
