import styled from "styled-components";
import bigImg from "../../images/bigimg-shop-sale.png";

const StyedBigImage = styled.div`
    background-image: url(${bigImg});
    height: 45rem;
    background-size: cover;
    background-position: center;
`

export function BigImage(){
    return (
        <StyedBigImage/>
    )
}