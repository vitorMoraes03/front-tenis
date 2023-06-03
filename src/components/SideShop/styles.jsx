/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledShopSide = styled.div`
  padding-top: var(--space-medium);
  width: 22rem;
  height: fit-content;

  li {
    margin-left: 2px;
  }

  @media (max-width: 600px) {
    padding-top: 0;
    width: 100%;
  }
`;
