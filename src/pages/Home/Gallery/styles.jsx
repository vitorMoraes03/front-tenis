import styled from 'styled-components';

export const StyledGallery = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-big);
  height: 45rem;
  margin: var(--space-small) auto;
`;

export const StyledImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: 100%;

  div {
    position: relative;
    height: 20%;
  }

  h3 {
    transition: all 0.15s ease;
    font-family: 'Ruthie', cursive;
    text-transform: none;
    font-size: 5.2rem;
    font-weight: 500;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: ${(props) => (props.hover ? 0.5 : 1)};
    z-index: ${(props) => (props.hover ? -1 : 50)};
  }

  img {
    width: 30rem;
  }

  button {
    transition: all 0.15s ease;
    width: 40%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    opacity: ${(props) => (props.hover ? 1 : 0)};
    z-index: ${(props) => (props.hover ? 100 : -1)};
  }
`;
