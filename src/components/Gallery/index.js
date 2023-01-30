import styled from "styled-components";
import img1 from "../../images/rdy-1.png";
import img2 from "../../images/rdy-2.png";
import img3 from "../../images/rdy-3.png";
import img4 from "../../images/rdy-4.png";
import img5 from "../../images/rdy-5.png";
import img6 from "../../images/rdy-6.png";
import img7 from "../../images/rdy-7.png";

const StyledGallery = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12rem;
    height: 45rem;
`

const StyledGalleryParts = styled.div`
    

    img {
        width: 30rem;
    }

`

function GalleryParts(props){
    return (
        <StyledGalleryParts>
            <img src={props.src} alt={props.alt}></img>
        </StyledGalleryParts>
    )
}

export function Gallery(){
    return (
        <StyledGallery>
           <GalleryParts src={img7} alt={''}/>
           <GalleryParts src={img5} alt={''}/>
           <GalleryParts src={img6} alt={''}/>
        </StyledGallery>
    )
}