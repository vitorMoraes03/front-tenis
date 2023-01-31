import styled from "styled-components";

const StyledFooter = styled.footer`
    width: 100%;
`

const StyledFooterMain = styled.div`
    width: 100%;
    display: flex;
    padding: 7rem;
    justify-content: space-between;
`

const StyledFooterCta = styled.div`
    

    h3 {
        text-transform: uppercase;
        margin-bottom: 1rem;
    }

    div {
        display: flex;
    }

    button {

    }

    ion-icon {
        
    }
`

const StyledFooterUls = styled.div`

`

const StyledFooterList = styled.ul`

`

const StyledFooterMedia = styled.div`
    

    h3 {
        margin-bottom: 1rem;
    }

    div {
        display: flex;
        gap: 1rem;
        justify-content: center;
    }

    ion-icon {
        
    }



`

const StyledFooterBottom = styled.div`

`

export function Footer(){
    return (
        <StyledFooter>
            <StyledFooterMain>
                <StyledFooterCta>
                    <h3>Receba novidades</h3>
                    <div>
                    <button>Registre seu email</button>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                    </div>
                </StyledFooterCta>
                <StyledFooterUls>
                    <StyledFooterList>
                        <li>Garantia</li>
                        <li>Contato</li>
                        <li>FAQ</li>
                        <li>Sobre</li>
                        <li>Licença</li>
                    </StyledFooterList>
                </StyledFooterUls>
                <StyledFooterMedia>
                    <h3>Siga nas redes sociais</h3>
                    <div>
                        <ion-icon name="logo-instagram"></ion-icon>
                        <ion-icon name="logo-linkedin"></ion-icon>
                        <ion-icon name="logo-github"></ion-icon>
                    </div>
                </StyledFooterMedia>
            </StyledFooterMain>

            <StyledFooterBottom>
                <div>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div>
                    <p></p>
                </div>
                <div>
                    <img></img>
                </div>
            </StyledFooterBottom>
        </StyledFooter>
       
    )
}