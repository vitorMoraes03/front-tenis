import styled from 'styled-components';
import { StyledLoginContainer } from '../Login/LoginContainer';
import { StyledBtn } from '../../global';

export const StyledShopContainer = styled(StyledLoginContainer)`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

export const StyledShopMain = styled.div``;

export const StyledShopSide = styled.div`
  padding-right: var(--space-medium);
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
  .div-h4 {
    display: flex;
    justify-content: space-between;
  }
  .ul-tags {
    margin-top: 1rem;
  }
  .ul-tags > li {
    display: flex;
    gap: 0.5rem;
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
  padding-top: var(--space-big);
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
