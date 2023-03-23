import styled from 'styled-components';
import { StyledFlex } from '../../../global';

export const StyledLoginContainer = styled.div`
  padding: var(--space-medium) 8rem;
  background-color: var(--main-white);
  color: var(--main-color);
  font-size: var(--font-medium);

  a {
    color: var(--main-color);
  }

  h1 {
    text-align: center;
    font-size: 6rem;
    font-weight: 800;
    padding: var(--space-medium);
  }
`;

export const StyledSmallContainer = styled(StyledFlex)`
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
