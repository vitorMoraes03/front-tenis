import styled from "styled-components";

const StyledShoeSmall = styled.div`
    display: flex;
    gap: var(--space-small);
    align-items: center;
    margin-bottom: var(--space-small);
    position: relative;

    div {

    }

    .p-price {
        position: absolute;
        right: 0;
    }
`

export function ShoeCardSmall(props){
    const [element, index] = props.props;

    return (
        <StyledShoeSmall key={`${element.id}-${index}`}>
            <img src={element.src} alt={element.alt}/>
            <div>
                <p>{element.shoesName}</p>
                <p>Cores: {(element.color).join(', ')}</p>
                <p>Tamanho: {element.size}</p>
                <p>{element.gender}</p>
            </div>
            <p className="p-price">{element.price}</p>
        </StyledShoeSmall>
    )
}

