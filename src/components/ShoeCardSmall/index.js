import styled from "styled-components";
import { StyledDivColors, StyledTagColor } from "../ShoeCard/styles.js"

const StyledShoeSmall = styled.div`
    display: flex;
    gap: var(--space-small);
    align-items: center;
    margin-bottom: var(--space-small);
    position: relative;

    .price-div {
        position: absolute;
        right: 0;
    }

    ion-icon {
        color: var(--main-color);
        font-size: var(--font-text);
        cursor: pointer;
    }

    .btn-trash {
        border: none;
        background: none;
        position: absolute;
        padding: 1rem;
        right: 0;
        bottom: 0;
    }
`

export function ShoeCardSmall(props){
    const [element, index, order, setOrder] = props.props;

    function deleteItem(){
        const updatedOrder = order.filter((_, i) => i !== index)
        setOrder(updatedOrder);
    }

    return (
        <StyledShoeSmall>
            <img src={element.src} alt={element.alt}/>
            <div>
                <p>{element.shoesName}</p>
                <StyledDivColors>
                {element.color.map(element => {
                            return (
                                <StyledTagColor backgroundColor={element}/>
                            )
                        })}
                </StyledDivColors>
                <p>Tamanho: {element.size}</p>
                <p>{element.gender}</p>
            </div>
            <div className="price-div">
                <p>R${element.price}</p>
                
            </div>
            <button className="btn-trash" onClick={deleteItem}><ion-icon name="trash"></ion-icon></button>
        </StyledShoeSmall>
    )
}

