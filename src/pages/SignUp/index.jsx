import { useNavigate } from 'react-router-dom';
import { useContext, useState, useRef } from 'react';
import { StyledSignUpContainer, StyledBtnSignUp } from './styles';
import api from '../../api/api';
import { AuthContext } from '../../contexts/authContext';
import { Input } from '../../components/Input';

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
 
  let submitOk = true;

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

  const regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm;
  const regexPassword = /^(?=.*\d).{4,10}$/gm;
  const regexConfirmPassword = /^(?=.*\d).{4,10}$/gm;
  const regexSurname = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/;

  const checkPasswordEquality = () => {
    if (form.password !== form.confirmPassword) {
      setConfirmPasswordMsg('Devem ser iguais.');
      setPasswordMsg('Devem ser iguais.');
      submitOk = false;
    }
  };

  // const checkEmail = () => {
  //   if (form.email === '') {
  //     setEmailMsg('Campo Obrigatório.');
  //     submitOk = false;
  //     return;
  //   };
  //   const regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm;
  //   if (!regex.test(form.email)) {
  //     setEmailMsg('Preencher corretamente.');
  //     submitOk = false;
  //     return;
  //   }
  //   setEmailMsg('');
  // };

  // const checkPassword = () => {
  //   if (form.password === '') {
  //     setPasswordMsg('Campo Obrigatório.');
  //     submitOk = false;
  //     return;
  //   }
  //   const regex = /^(?=.*\d).{4,10}$/gm;
  //   if (!regex.test(form.password)) {
  //     setPasswordMsg('Preencher corretamente.')
  //     submitOk = false;
  //     return;
  //   };
  //   setPasswordMsg('');
  // };

  // const checkConfirmPassword = () => {
  //   if (form.confirmPassword === '') {
  //     setConfirmPasswordMsg('Campo Obrigatório.');
  //     submitOk = false;
  //     return;
  //   }
  //   const regex = /^(?=.*\d).{4,10}$/gm;
  //   if (!regex.test(form.password)) {
  //     setConfirmPasswordMsg('Preencher corretamente.');
  //     submitOk = false;
  //     return;
  //   }
  //   if(!checkPasswordEquality()) setConfirmPasswordMsg('');;
  // };

  // const checkFirstName = () => {
  //   if (form.firstName === '') {
  //     setFirstNameMsg('Campo Obrigatório.');
  //     submitOk = false;
  //     return;
  //   }
  //   const regex = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/;
  //   if (!regex.test(form.firstName)) {
  //     setFirstNameMsg('Preencher corretamente.')
  //     submitOk = false;
  //     return;
  //   };
  //   setFirstNameMsg('');
  // };

  // const checkLastName = () => {
  //   if (form.lastName === '') {
  //     setLastNameMsg('Campo Obrigatório.');
  //     submitOk = false;
  //     return;
  //   }
  //   const regex = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/;
  //   if (!regex.test(form.firstName)) {
  //     setLastNameMsg('Preencher corretamente.')
  //     submitOk = false;
  //     return;
  //   };
  //   setLastNameMsg('');
  // };

  // const checkBirthday = () => {
  //   if (form.birthday === '') {
  //     setBirthdayMsg('Campo Obrigatório.');
  //     submitOk = false;
  //     return;
  //   }
  //   setBirthdayMsg('');
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    checkInput(form.email, regexEmail, setEmailMsg);
    checkInput(
      form.confirmPassword,
      regexConfirmPassword,
      setConfirmPasswordMsg
    );
    checkInput(form.password, regexPassword, setPasswordMsg);
    checkInput(form.firstName, regexSurname, setFirstNameMsg);
    checkInput(form.lastName, regexSurname, setLastNameMsg);
    checkInput(form.birthday, null, setBirthdayMsg);
    checkPasswordEquality();
    startingRef.current.scrollIntoView({ behavior: "smooth" });
    
    if (submitOk === false) return;

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
