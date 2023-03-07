import { useState } from "react";
import { StyledShoeCard, StyledDivColors, StyledTagColor } from "./styles";
import { StyledBtnShop } from "../../pages/Shop/styles";

export function ShoeCard(props){
    const element = props.element;
    const { order, setOrder } = props.orderState;
    const objectKeys = Object.keys(element.sizeAndStock)
    const [selectedOption, setSelectedOption] = useState(objectKeys[0]);

    function handleSelectChange(e){
        setSelectedOption(e.target.value);
    }

    function addShoes(element){
        setOrder([...order, 
            {shoesName: element.shoesName,
             id: element._id,
             size: selectedOption,
             gender: element.gender,
             price: element.price,
             color: element.color,
             src: element.src,
             alt: element.alt
            }])
    }

    return (
        <StyledShoeCard key={element._id}>
            <img alt={element.alt}
            src={element.src}
            />
            <div className="shoe-card-infos">
                <div className="shoe-card-text">
                    <h4>{element.shoesName}</h4>
                    <p>{element.price}</p>
                    <StyledDivColors>
                        {element.color.map(element => {
                            return (
                                <StyledTagColor backgroundColor={element}>
                                    
                                </StyledTagColor>
                            )
                        })}
                    </StyledDivColors>
                    <p>{element.gender}</p>
                    <p>{element.category}</p>
                <select onChange={handleSelectChange} value={selectedOption}>
                {
                    objectKeys.map(key => {
                        return <option value={key} key={key}>
                                    {key}
                               </option>
                    })
                }
                </select>
                </div>
                <StyledBtnShop onClick={() => addShoes(element)}>Comprar</StyledBtnShop>
            </div>
        </StyledShoeCard>
    )
}