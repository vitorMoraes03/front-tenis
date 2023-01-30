import styled from "styled-components";
import imgTest from "../../images/rdy-1.png"

const StyledNavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    gap: var(--space-small);
    padding: 0 6rem;
    width: 100%;
    position: fixed;
    z-index: 100;
    top: 0;
    background-color: var(--main-color);

    img {
        width: 8rem;
    }
`

const StyledFlex = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`

export function NavBar(){
    return (
        <StyledNavBar>
            <StyledFlex>
                <img src={imgTest} alt='random test img'></img>
                <a>Tênis</a>
                <a>A marca</a>
            </StyledFlex>
            <StyledFlex>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="cart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </StyledFlex>
        </StyledNavBar>
    )
}