import styled from 'styled-components';
import { OverlayStyle } from '../Cart/styles';
import { StyledBtnLogin } from '../../../pages/Login/LoginForm/styles';
// eslint-disable-next-line import/prefer-default-export

export const PopUpContainer = styled.div`
  background-color: var(--main-white);
  position: fixed;
  width: 32rem;
  height: 20rem;
  z-index: 100;
  box-shadow: 1px 1px 20px 1px;
  color: var(--main-color);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const OverlayPopUp = styled(OverlayStyle)`
  z-index: auto;
`;

export const StyledBtnPopUp = styled(StyledBtnLogin)``;
