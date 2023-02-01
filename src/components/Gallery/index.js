import styled from "styled-components";
import img5 from "../../images/rdy-5.png";
import img6 from "../../images/rdy-6.png";
import img7 from "../../images/rdy-7.png";

const StyledGallery = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--space-big);
    height: 45rem;

    img {
        width: 30rem;
    }
`

export function Gallery(){
    return (
        <StyledGallery>
           <img src={img7} alt={''}/>
           <img src={img5} alt={''}/>
           <img src={img6} alt={''}/>
        </StyledGallery>
    )
}