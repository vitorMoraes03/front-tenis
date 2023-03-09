import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledFlex } from '../../global';

export const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 var(--space-medium);
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
`;

export const StyledLinks = styled(StyledFlex)`
  div {
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

export const StyledCart = styled(Link)`
  position: relative;

  p {
    position: absolute;
    right: -5px;
    bottom: -3px;
  }
`;
