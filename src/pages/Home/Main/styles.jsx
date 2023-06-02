import styled from 'styled-components';
import imgHome from '../../../images/woman-3.2-shoes-waves.png';


export const StyledMain = styled.div`
  display: grid;
  grid-template-areas:
    'featured featured second'
    'featured featured third';
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 100vh;

  h1 {
    font-size: 4rem;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  h2 {
    font-size: var(--font-medium);
  }

  @media (max-width: 600px) {
    grid-template-areas:
      'featured'
      'second'
      'third';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;

    h1 {
      font-size: 2.2rem;
    }
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
    padding: var(--space-medium) var(--space-small);
    text-align: center;
  }

  @media (max-width: 600px) {
    .text-wrapper {
      width: 40%;
    }
  }
`;

export const StyledSide = styled.section`
  background-size: cover;
  background-position: center center;
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
  height: 100%;
  background-image: ${(props) => `url(${props.imgName})`};
`;

