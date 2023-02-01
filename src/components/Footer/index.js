import styled from "styled-components";
import { Link } from "react-router-dom";
import logosImg from "../../images/logos-credit-card.png"

const StyledFooter = styled.footer`
    color: var(--main-white);
    font-size: var(--font-medium);
`

const StyledFooterMain = styled.div`
    display: flex;
    padding: 7rem 14rem;
    justify-content: space-between;
    align-items: center;
`

const StyledFooterCta = styled.div`
    h3 {
        text-transform: uppercase;
        text-align: center;
        margin-bottom: var(--space-small);
    }

    div {
        display: flex;
        align-items: center;
        position: relative;
        justify-content: center;
    }

    input {
        padding: 1rem;
        color: rgba(25,14,2,0.7);
        background-color: var(--main-white);
    }

    ion-icon {
        font-size: var(--icons-size);
        position: absolute;
        right: -3rem;
    }
`

const StyledFooterUls = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-small);

    li {
        font-size: var(--font-big);
        display: inline;
        padding: var(--space-small);
    }
`

const StyledFooterMedia = styled.div`
    h3 {
        margin-bottom: var(--space-small);
        text-transform: uppercase;
        text-align: center;
    }

    div {
        display: flex;
        gap: var(--space-small);
        justify-content: center;
    }

    ion-icon {
        font-size: var(--icons-size);
    }
`

const StyledFooterBottom = styled.div`
    display: flex;
    border-top: 1px solid rgba(255,243,232, 0.3);
    padding: var(--space-small) var(--space-medium);
    justify-content: space-between;
    align-items: center;

    p {
        font-size: var(--font-text);
        opacity: 0.7;
    }

    img {
        height: var(--icons-size);
    }
`

export function Footer(){
    return (
        <StyledFooter>
            <StyledFooterMain>
                <StyledFooterCta>
                    <h3>Receba novidades</h3>
                    <div>
                    <input placeholder="Registre seu Email"></input>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                    </div>
                </StyledFooterCta>
                <StyledFooterUls>
                        <div>
                        <Link to={""}><li>Garantia</li></Link>
                        <Link to={""}><li>Contato</li></Link>
                        <Link to={""}><li>FAQ</li></Link>
                        </div>
                        <div>
                        <Link to={""}><li>Sobre</li></Link>
                        <Link to={""}><li>Licença</li></Link>
                        </div>
                </StyledFooterUls>
                <StyledFooterMedia>
                    <h3>Siga-nos</h3>
                    <div>
                        <ion-icon name="logo-instagram"></ion-icon>
                        <ion-icon name="logo-linkedin"></ion-icon>
                        <ion-icon name="logo-github"></ion-icon>
                    </div>
                </StyledFooterMedia>
            </StyledFooterMain>

            <StyledFooterBottom>
                    <p>© 2023 Made Shoes Copyright</p>
                    <img src={logosImg} alt={"Logos credit card"}/>
            </StyledFooterBottom>
        </StyledFooter>
       
    )
}