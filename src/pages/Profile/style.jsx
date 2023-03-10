import styled from 'styled-components';
import { StyledSignUpContainer } from '../SignUp/styles';

// eslint-disable-next-line import/prefer-default-export
export const StyledProfileContainer = styled(StyledSignUpContainer)`
  .container-btn {
    display: flex;
    gap: var(--space-small);
    justify-content: center;
    margin-top: var(--space-medium);
  }
`;
