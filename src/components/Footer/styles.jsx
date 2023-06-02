/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  color: var(--main-white);
  font-size: var(--font-medium);
  // z-index: 100;
  position: relative;
  display: flex;
  padding: 5rem var(--space-big) var(--space-small) var(--space-big);
  justify-content: space-between;
  align-items: center;

  ion-icon:hover,
  ion-icon:active,
  a:hover,
  a:active {
    color: var(--main-shade);
  }

  ion-icon {
    font-size: 3.2rem;
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
    justify-content: center;
  }
`;

export const StyledFooterMedia = styled.div`
  display: flex;
  gap: var(--space-small);
  align-items: center;

  h3 {
    margin-bottom: var(--space-small);
    text-transform: uppercase;
    height: 100%;
    transform: translateY(25%);
  }

  ion-icon {
    cursor: pointer;
  }
`;
