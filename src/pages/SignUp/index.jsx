import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { StyledSignUpContainer, StyledBtnSignUp } from './styles';
import api from '../../api/api';
import { AuthContext } from '../../contexts/authContext';
import { Input } from '../../components/Input';

function SignUp() {
  const navigate = useNavigate();
  const { setLoggedInUser } = useContext(AuthContext);

  const [form, setForm] = useState({
    // Criar um objeto igual para as msgs?
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    birthday: '',
  });

  const [emailMsg, setEmailMsg] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');
  const [confirmPasswordMsg, setConfirmPasswordMsg] = useState('');
  const [firstNameMsg, setFirstNameMsg] = useState('');
  const [lastNameMsg, setLastNameMsg] = useState('');
  const [birthdayMsg, setBirthdayMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const checkEmail = () => {
    if (form.email === '') {
      setEmailMsg('Campo Obrigatório.');
      return;
    }
    const regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm;
    if (!regex.test(form.email)) setEmailMsg('Preencher corretamente.');
  };

  const checkPassword = () => {
    if (form.password === '') {
      setPasswordMsg('Campo Obrigatório.');
      return;
    }
    const regex = /^(?=.*\d).{4,10}$/gm;
    if (!regex.test(form.password)) setPasswordMsg('Preencher corretamente.');
  };

  const checkConfirmPassword = () => {
    if (form.confirmPassword === '') {
      setConfirmPasswordMsg('Campo Obrigatório.');
      return;
    }
    const regex = /^(?=.*\d).{4,10}$/gm;
    if (!regex.test(form.password))
      setConfirmPasswordMsg('Preencher corretamente.');
  };

  const checkFirstName = () => {
    if (form.firstName === '') {
      setFirstNameMsg('Campo Obrigatório.');
      return;
    }
    const regex = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/;
    if (!regex.test(form.firstName)) setFirstNameMsg('Preencher corretamente.');
  };

  const checkLastName = () => {
    if (form.lastName === '') {
      setLastNameMsg('Campo Obrigatório.');
      return;
    }
    const regex = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/;
    if (!regex.test(form.firstName)) setLastNameMsg('Preencher corretamente.');
  };

  const checkBirthday = () => {
    if (form.birthday === '') {
      setBirthdayMsg('Campo Obrigatório.');
    }
  };

  const birthdayFormat = () => {
    const date = new Date(form.birthday);
    // eslint-disable-next-line no-unused-vars
    const formattedDate = date.toLocaleDateString('pt-BR');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    checkEmail();
    checkPassword();
    checkConfirmPassword();
    checkFirstName();
    checkLastName();
    checkBirthday();
    birthdayFormat();

    try {
      const res = await api.post('/user/signup', form);
      setLoggedInUser({ ...res.data });
      localStorage.setItem('loggedInUser', JSON.stringify(res.data));
      setForm({ ...form, password: '', confirmPassword: '' });
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledSignUpContainer>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <Input
          field="Email"
          text="Email"
          value={form.email}
          span={emailMsg}
          type="text"
          handler={handleChange}
        />
        <Input
          field="Password"
          text="Password"
          value={form.password}
          span={passwordMsg}
          type="string" // password
          handler={handleChange}
        />
        <Input
          field="ConfirmPassword"
          text="Confirme o password"
          value={form.confirmPassword}
          span={confirmPasswordMsg}
          type="string" // password
          handler={handleChange}
        />
        <Input
          field="FirstName"
          text="Primeiro Nome"
          value={form.firstName}
          span={firstNameMsg}
          type="text"
          handler={handleChange}
        />
        <Input
          field="LastName"
          text="Sobrenome"
          value={form.lastName}
          span={lastNameMsg}
          type="text"
          handler={handleChange}
        />
        <Input
          field="Birthday"
          text="Data de nascimento"
          value={form.birthday}
          span={birthdayMsg}
          type="date"
          handler={handleChange}
        />
        <StyledBtnSignUp>Criar Conta</StyledBtnSignUp>
      </form>
    </StyledSignUpContainer>
  );
}

export default SignUp;
