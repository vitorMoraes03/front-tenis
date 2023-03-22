import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/api';
import { AuthContext } from '../../contexts/authContext';
import { CartContext } from '../../contexts/cartContext';
import { StyledBtnLogin } from '../Login/LoginForm/styles';
import { Input } from '../../components/Input';
import { StyledProfileContainer } from './style';
import { allRegex } from '../../global';

function Profile({ setPromoText }) {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
  const { user } = loggedInUser;
  const { setOrder } = useContext(CartContext);
  const navigate = useNavigate();
  const [edition, setEdition] = useState({
    email: user.email,
    firstName: user.firstName,
    birthday: user.birthday?.slice(0, 10),
  });
  const [emailMsg, setEmailMsg] = useState('');
  const [firstNameMsg, setFirstNameMsg] = useState('');
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
      setPromoText('Usuário deletado.');
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

  function checkBirthday() {
    if (edition.birthday === '') {
      setBirthdayMsg('Campo Obrigatório.');
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    checkEmail();
    checkFirstName();
    checkBirthday();
    try {
      const userEdited = await api.put('/user/edit', edition);
      const objEdited = {
        user: userEdited.data,
        token: loggedInUser.token,
      };
      localStorage.setItem('loggedInUser', JSON.stringify(objEdited));
      setLoggedInUser(objEdited);
    } catch (err) {
      console.log(err);
    }
    setPromoText('Usuário editado.');
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
          small="Obrigatório"
        />
        <Input
          field="FirstName"
          text="Primeiro Nome"
          value={edition.firstName}
          span={firstNameMsg}
          type="text"
          handler={handleChange}
          small="Obrigatório"
        />
        <Input
          field="Birthday"
          text="Data de nascimento"
          value={edition.birthday}
          span={birthdayMsg}
          type="date"
          handler={handleChange}
          small="Opcional"
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
