import styled from 'styled-components';

export const StyledSingleItem = styled.section`
  position: relative;
  height: 100%;
`;

export const StyledImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  div {
    position: relative;
    height: 20%;
    width: 100%;
  }

  h3 {
    text-align: center;
    transition: all 0.15s ease;
    font-family: 'Ruthie', cursive;
    text-transform: none;
    font-size: 4.2rem;
    font-weight: 500;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: ${(props) => (props.hover ? 0.5 : 1)};
    z-index: ${(props) => (props.hover ? -1 : 50)};
  }

  img {
    width: 22rem;
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
