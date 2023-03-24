import styled from 'styled-components';

export const StyledContainerCart = styled.div`
  background-color: var(--secondary-shade);
  position: absolute;
  width: 100%;
  height: fit-content;
  top: 100%;
  z-index: ${(props) => (props.modalCart ? 100 : -1)};
  opacity: ${(props) => (props.modalCart ? 1 : 0)};
  transition: all 0.25s ease-out;
  transform: ${(props) =>
    props.modalCart ? 'translateY(0)' : 'translateY(-100%)'};
  color: var(--main-color);

  h2 {
    font-size: var(--font-big);
    font-weight: 800;
  }

  .main-container {
    width: 30%;
    margin: 0 0 0 auto;
    padding: var(--space-small);
  }

  .container-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-small);
  }

  .container-button {
    padding-top: var(--space-small);
  }

  img {
    width: 30%;
  }

  ion-icon:hover {
    cursor: pointer;
  }

  @media (max-width: 600px) {
    .main-container {
      width: 70%;
    }
  }
`;

export const OverlayStyle = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;
