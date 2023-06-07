import styled from 'styled-components';
import { StyledLoginContainer } from '../Login/LoginContainer/styles';
import { StyledBtn, StyledFlex } from '../../global';

export const StyledShopContainer = styled(StyledLoginContainer)`
  display: grid;
  grid-template-columns: 1fr 4fr;
  position: relative;

  @media (max-width: 600px) {
    display: inline-block;
    padding: var(--space-medium);
  }
`;

export const StyledShopMain = styled.div`
  padding-left: var(--space-medium);

  .filter-mobile {
    text-align: center;
    padding: var(--space-small);
  }

  @media (max-width: 600px) {
    padding-left: 0;
  }
`;

export const StyledShopSide = styled.div`
  padding-top: var(--space-medium);

  li {
    margin-left: 2px;
  }
`;

export const StyledSideCard = styled.div`
  background-color: var(--secondary-shade);
  padding: var(--space-small);
  margin-top: var(--space-small);

  ion-icon {
    color: var(--main-color);
    font-size: var(--font-text);
    cursor: pointer;
    --ionicon-stroke-width: 4.2rem;
  }

  button {
    border: none;
    background: none;
    display: inline-block;
  }

  h4 {
    font-size: var(--font-big);
  }

  .div-h4 {
    display: flex;
    justify-content: space-between;
  }

  .ul-tags {
    margin-top: 1rem;
  }

  label {
    display: flex;
    gap: 2px;
  }

  .tags-price,
  .tags-colors {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    background-color: var(--main-white);

    li {
      padding: 2px;
    }

    .tags-price,
    .tags-colors {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export const StyledDivShop = styled.div`
  display: flex;
  gap: var(--space-small);
  justify-content: center;

  input {
    border: none;
    outline: none;
    background-color: var(--main-white);
    padding: 0.5rem;
    color: rgba(25, 14, 2, 0.7);
    height: 100%;
  }

  .div-search-filter {
    border-bottom: 1px solid var(--main-color);
    display: flex;
    align-items: center;
  }
`;

export const StyledGridShop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--space-medium);
  padding-top: 7rem;
  justify-items: center;

  .loading-container {
    grid-column: span 3;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding-top: 5.2rem;
  }
`;

export const StyledBtnShop = styled(StyledBtn)`
  color: var(--main-white);
  &::before {
    background-color: var(--main-shade);
  }
  &::after {
    background-color: #2e1a04;
  }
`;

export const StyledBtnsContainer = styled(StyledFlex)`
  justify-content: center;
`;
