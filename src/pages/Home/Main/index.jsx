import styled from 'styled-components';
import imgHome from '../../../images/woman-3.2-shoes-waves.png';
import imgSideSecond from '../../../images/teste-1.png';
import imgSideThird from '../../../images/DenizD_wearing_neon_jordan_shoes.png';

const StyledMain = styled.div`
  display: grid;
  grid-template-areas:
    'featured featured second'
    'featured featured third';
  grid-template-columns: 1fr 1fr 1fr;
  height: 100vh;

  h1 {
    font-size: 4rem;
  }
`;

const StyledFeatured = styled.section`
  grid-area: featured;
  background-image: url(${imgHome});
  background-size: cover;
  position: relative;

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    gap: var(--space-small);
    text-align: center;
  }
`;

const StyledSide = styled.section`
  background-size: cover;
  position: relative;

  div {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }

  p {
    margin-top: var(--space-small);
  }
`;

const StyledSecondSide = styled(StyledSide)`
  background-image: url(${imgSideSecond});
`;

const StyledThirdSide = styled(StyledSide)`
  background-image: url(${imgSideThird});
`;

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
