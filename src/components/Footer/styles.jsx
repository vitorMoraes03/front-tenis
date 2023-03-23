/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  color: var(--main-white);
  font-size: var(--font-medium);
  z-index: 100;
  position: relative;
  display: flex;
  padding: var(--space-medium) var(--space-big);
  justify-content: space-between;
  align-items: center;

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

  img {
    height: var(--icons-size);
  }

  p {
    font-size: var(--font-text);
    opacity: 0.7;
  }

  @media (max-width: 600px) {
    padding: var(--space-medium);
  }
`;

export const StyledFooterMedia = styled.div`
  h3 {
    margin-bottom: var(--space-small);
    text-transform: uppercase;
    text-align: center;
  }

  ion-icon {
    cursor: pointer;
  }
`;
