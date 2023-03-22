import styled from 'styled-components';

import imgHome from '../../../images/woman-3.2-shoes-waves.png';
import imgSideSecond from '../../../images/teste-1.png';
import imgSideThird from '../../../images/DenizD_wearing_neon_jordan_shoes.png';

export const StyledMain = styled.div`
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

export const StyledFeatured = styled.section`
  grid-area: featured;
  background-image: url(${imgHome});
  background-size: cover;
  position: relative;

  .main-title {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .text-wrapper {
    display: flex;
    width: 45%;
    flex-direction: column;
    gap: var(--space-small);
    padding: var(--space-medium);
    text-align: center;
  }
`;

export const StyledSide = styled.section`
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

export const StyledSecondSide = styled(StyledSide)`
  background-image: url(${imgSideSecond});
`;

export const StyledThirdSide = styled(StyledSide)`
  background-image: url(${imgSideThird});
`;
