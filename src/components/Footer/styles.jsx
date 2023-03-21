/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  color: var(--main-white);
  font-size: var(--font-medium);
  z-index: 100;
  position: relative;

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

export const StyledFooterMain = styled.div`
  display: flex;
  padding: var(--space-medium) var(--space-big);
  justify-content: space-between;
  align-items: center;
`;

export const StyledFooterCta = styled.div`
  h3 {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: var(--space-small);
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    padding: 1rem;
    color: rgba(25, 14, 2, 0.7);
    background-color: var(--main-white);
  }

  ion-icon {
    font-size: var(--icons-size);
  }
`;

export const StyledFooterUls = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-small);

  li {
    font-size: var(--font-big);
    display: inline;
    padding: var(--space-small);
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

export const StyledFooterBottom = styled.div`
  display: flex;
  border-top: 1px solid rgba(255, 243, 232, 0.3);
  padding: var(--space-small) var(--space-medium);
  justify-content: space-between;
  align-items: center;

  p {
    font-size: var(--font-text);
    opacity: 0.7;
  }

  img {
    height: var(--icons-size);
  }
`;
