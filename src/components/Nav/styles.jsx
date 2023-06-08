import styled from 'styled-components';
import { StyledFlex } from '../../global';

export const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  background-color: var(--main-color);

  ion-icon {
    font-size: var(--icons-size);
  }

  ion-icon:hover,
  ion-icon:active,
  a:hover,
  a:active {
    color: var(--main-shade);
  }

  a {
    text-decoration: none;
    color: var(--main-white);
  }

  .language-btn {
    appearance: none;
    border: none;
    background-color: transparent;
    color: var(--main-white);
    font-size: var(--font-big);
    font-weight: 600;
    cursor: pointer;
    width: 3.2rem;
  }

  .language-btn:hover,
  .language-btn:active {
    color: var(--main-shade);
  }
`;

export const StyledLinks = styled(StyledFlex)`
  padding-left: var(--space-medium);

  a {
    display: flex;
    align-items: center;
  }

  div:hover {
    cursor: pointer;
  }

  h1 {
    font-size: var(--font-logo);
    margin-bottom: -2px;
    text-transform: none;
  }

  img {
    height: var(--icons-size);
  }

  a {
    font-size: var(--font-medium);
    text-transform: uppercase;
  }
`;

export const StyledContainerUser = styled(StyledFlex)`
  padding-right: var(--space-medium);
  text-align: center;
  position: relative;

  @media (max-width: 600px) {
    .div-hello {
      display: flex;
      flex-direction: column;
      position: absolute;
      left: -75%;
    }
  }
`;

export const StyledCart = styled.div`
  position: relative;
  cursor: pointer;

  p {
    position: absolute;
    right: -6px;
    bottom: -6px;
  }
`;
