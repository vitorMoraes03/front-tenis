import {
  StyledMain,
  StyledFeatured,
  StyledSecondSide,
  StyledThirdSide,
} from './styles';

function Main() {
  return (
    <StyledMain>
      <StyledFeatured>
        <div>
          <h1>Comece seu ano com leveza.</h1>
          <p>Edição limitada.</p>
        </div>
      </StyledFeatured>
      <StyledSecondSide>
        <div>
          <h2>Lançamento Converse 2023</h2>
          <p>Compre agora</p>
        </div>
      </StyledSecondSide>
      <StyledThirdSide>
        <div>
          <h2>Bem vindo ao futuro</h2>
          <p>Compre linha Modern</p>
        </div>
      </StyledThirdSide>
    </StyledMain>
  );
}

export default Main;
