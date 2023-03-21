import { useNavigate } from 'react-router-dom';
import { useContext, useState, useRef } from 'react';
import { StyledSignUpContainer, StyledBtnSignUp } from './styles';
import api from '../../api/api';
import { AuthContext } from '../../contexts/authContext';
import { Input } from '../../components/Input';
import PopUp from '../../components/Modals/PopUp';
import { allRegex } from '../../global';

function SignUp() {
  const navigate = useNavigate();
  const { setLoggedInUser } = useContext(AuthContext);
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    birthday: '',
    // '1990-03-20'
  });
  const [emailMsg, setEmailMsg] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');
  const [confirmPasswordMsg, setConfirmPasswordMsg] = useState('');
  const [firstNameMsg, setFirstNameMsg] = useState('');
  const [lastNameMsg, setLastNameMsg] = useState('');
  const [birthdayMsg, setBirthdayMsg] = useState('');
  const startingRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
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
    if (regex?.test(input) === false) {
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
    checkInput(form.lastName, surNameRegex, setLastNameMsg);
    checkInput(form.birthday, null, setBirthdayMsg);
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
        />
        <Input
          field="Password"
          text="Password"
          value={form.password}
          span={passwordMsg}
          type="string" // password
          handler={handleChange}
          placeholder="Deve conter um digíto numérico"
        />
        <Input
          field="ConfirmPassword"
          text="Confirme o password"
          value={form.confirmPassword}
          span={confirmPasswordMsg}
          type="string" // password
          handler={handleChange}
          placeholder="Deve conter um digíto numérico"
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
        <button type="button" onClick={() => setModalOpen(!modalOpen)}>
          teste modal
        </button>
        {modalOpen ? <PopUp>teste</PopUp> : null}
      </form>
    </StyledSignUpContainer>
  );
}

export default SignUp;
