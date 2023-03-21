/* eslint-disable no-unused-vars */
import { PopUpContainer, OverlayPopUp, StyledBtnPopUp } from "./styles";

function PopUp({ children }){
  return (
    <>
    <OverlayPopUp/>
        <PopUpContainer>
            <p>{children}</p>
            <StyledBtnPopUp>Teste</StyledBtnPopUp>
        </PopUpContainer>
    </>
  )
};

export default PopUp;
