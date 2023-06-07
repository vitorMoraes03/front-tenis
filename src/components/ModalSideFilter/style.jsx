import styled from 'styled-components';
import { OverlayStyle } from '../Cart/styles';

export const ModalSideContainer = styled.div`
  position: fixed;
  width: 100%;
  background-color: var(--secondary-shade);
  padding: var(--space-medium);
  right: ${(props) => (props.filterModal ? '0' : '-50rem')};
  top: 3rem;
  z-index: 1000;
  border-radius: 2px;
  transition: all 0.25s ease-out;
  max-height: 90vh;
  overflow-y: auto;

  ion-icon {
    font-size: 2.2rem;
  }

  .container-icon {
    position: absolute;
    right: 0;
    top: 0;
    padding: 4px;
  }

  .container-icon > ion-icon {
    font-size: 2.8rem;
    cursor: pointer;
  }
`;

export const OverlaySideFilter = styled(OverlayStyle)`
  z-index: 100;
`;
