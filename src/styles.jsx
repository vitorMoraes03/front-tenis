import styled from 'styled-components';

export const AppContainer = styled.div`
  padding-top: 8rem;
  background-color: var(--main-color);

  @media (max-width: 800px) {
    max-width: 100vw;
  }
`;

export const StyledPromo = styled.div`
  text-align: center;
  border-top: 1px solid rgba(255, 243, 232, 0.3);

  p {
    padding: 1.2rem;
  }
`;
