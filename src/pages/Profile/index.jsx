import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/api';
import { AuthContext } from '../../contexts/authContext';
import { CartContext } from '../../contexts/cartContext';
import { StyledBtnLogin } from '../Login/LoginForm/styles';
import { Input } from '../../components/Input';
import { StyledProfileContainer } from './style';
import { allRegex } from '../../global';

function Profile() {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
  const { user } = loggedInUser;
  const { setOrder } = useContext(CartContext);
  const navigate = useNavigate();
  const [edition, setEdition] = useState({
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    birthday: user.birthday.slice(0, 10),
  });
  const [emailMsg, setEmailMsg] = useState('');
  const [firstNameMsg, setFirstNameMsg] = useState('');
  const [lastNameMsg, setLastNameMsg] = useState('');
  const [birthdayMsg, setBirthdayMsg] = useState('');
  const { emailRegex, surNameRegex } = allRegex;

  const handleChange = (e) => {
    setEdition({ ...edition, [e.target.name]: e.target.value });
  };

  const logOut = async () => {
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('storedOrder');
    setOrder([]);
    setLoggedInUser(null);
    navigate('/');
  };

  const deleteAcc = async () => {
    try {
      await api.delete('/user/delete');
      logOut();
    } catch (err) {
      console.log(err.response.data);
    }
  };

  function checkEmail() {
    if (edition.email === '') {
      setEmailMsg('Campo Obrigatório.');
      return;
    }
    if (!emailRegex.test(edition.email)) setEmailMsg('Preencher corretamente.');
  }

  function checkFirstName() {
    if (edition.firstName === '') {
      setFirstNameMsg('Campo Obrigatório.');
      return;
    }
    if (!surNameRegex.test(edition.firstName))
      setFirstNameMsg('Preencher corretamente.');
  }

  function checkLastName() {
    if (edition.lastName === '') {
      setLastNameMsg('Campo Obrigatório.');
      return;
    }
    if (!surNameRegex.test(edition.firstName))
      setLastNameMsg('Preencher corretamente.');
  }

  function checkBirthday() {
    if (edition.birthday === '') {
      setBirthdayMsg('Campo Obrigatório.');
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    checkEmail();
    checkFirstName();
    checkLastName();
    checkBirthday();
    try {
      const userEdited = await api.put('/user/edit', edition);
      localStorage.setItem('loggedInUser', JSON.stringify(userEdited));
    } catch (err) {
      console.log(err);
    }
    navigate('/');
  };

  return (
    <StyledProfileContainer>
      <h1>Minha Conta</h1>
      <form>
        <Input
          field="Email"
          text="Email"
          value={edition.email}
          span={emailMsg}
          type="text"
          handler={handleChange}
        />
        <Input
          field="FirstName"
          text="Primeiro Nome"
          value={edition.firstName}
          span={firstNameMsg}
          type="text"
          handler={handleChange}
        />
        <Input
          field="LastName"
          text="Sobrenome"
          value={edition.lastName}
          span={lastNameMsg}
          type="text"
          handler={handleChange}
        />
        <Input
          field="Birthday"
          text="Data de nascimento"
          value={edition.birthday}
          span={birthdayMsg}
          type="date"
          handler={handleChange}
        />
      </form>
      <div className="container-btn">
        <StyledBtnLogin onClick={logOut}>Sair</StyledBtnLogin>
        <StyledBtnLogin onClick={handleSubmit}>Editar</StyledBtnLogin>
        <StyledBtnLogin onClick={deleteAcc}>Deletar</StyledBtnLogin>
      </div>
    </StyledProfileContainer>
  );
}

export default Profile;
