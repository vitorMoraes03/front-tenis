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
        <div className="main-title">
          <div className="text-wrapper">
            <h1>Comece seu ano com leveza</h1>
            <p>Espumas de última tecnologia</p>
          </div>
        </div>
      </StyledFeatured>
      <StyledSecondSide>
        <div>
          <h2>Lançamento Nike Rexus</h2>
          <p>Compre agora</p>
        </div>
      </StyledSecondSide>
      <StyledThirdSide>
        <div>
          <h2>Bem vindo ao futuro</h2>
          <p>Os últimos lançamentos do mercado</p>
        </div>
      </StyledThirdSide>
    </StyledMain>
  );
}

export default Main;
