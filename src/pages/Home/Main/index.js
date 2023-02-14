import styled from "styled-components";
import imgHome from "../../../images/woman-3.2-shoes-waves.png";
import imgSideSecond from "../../../images/allstar-jeans-men.png"
import imgSideThird from "../../../images/allstar-orange.png"

const StyledWrapper = styled.div`
    h1 {
        font-size: 4rem;
    }
`

const StyledMain = styled.div`
    display: grid;
    grid-template-areas: 
        "featured featured second"
        "featured featured third";
    grid-template-columns: 1fr 1fr 1fr;
    height: 100vh;
`

const StyledPromo = styled.div`
    text-align: center;
    border-top: 1px solid rgba(255,243,232, 0.3);
    
    p {
        padding: var(--space-small);
    }
`

const StyledFeatured = styled.section`
    grid-area: featured;
    background-image: url(${imgHome});
    background-size: cover;
    position: relative;

    div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        gap: var(--space-small);
        text-align: center;
    }
`

const StyledSide = styled.section`
    grid-area: ${props => props.section === "second" ? "second" : "third"};
    background-image: 
    url(${props => props.section === "second" ? imgSideSecond : imgSideThird });
    background-size: cover;
    position: relative;

    div {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
    }

    p {
        margin-top: var(--space-small);
    }
`

function SideSection(props){
    return (
        <StyledSide section={props.section}>
            <div>
            <h2>{props.h2}</h2>
            <p>{props.p}</p>
            </div>
        </StyledSide>
    )
}

export function Main(){
    return (
        <StyledWrapper>
        <StyledPromo>
            <p>Entrega grátis a partir de 150 reais</p>
        </StyledPromo>
        <StyledMain>
        <StyledFeatured>
            <div>
                <h1>Comece seu ano com leveza.</h1>
                <p>Edição limitada.</p>
            </div>
        </StyledFeatured> 
        <SideSection 
        section={"second"} 
        h2={"Lançamento Converse 2023"} 
        p={"Compre agora"}
        />
        <SideSection 
        section={"third"} 
        h2={"Bem vindo ao futuro"} 
        p={"Compre linha Modern"}
        />
        </StyledMain>
        </StyledWrapper>
    )
}