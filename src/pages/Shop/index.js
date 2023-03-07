import { StyledBtnShop, StyledShopContainer, StyledDivShop, StyledGridShop, ShoeCard } from "./styles";
import { api } from "../../api/api";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

export function Shop(){
    const {order, setOrder} = useContext(CartContext);
    const [shoes, setShoes] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    async function getAllShoes(){
        try {
            const allShoes = await api.get("/shoes");
            setShoes(allShoes.data);
        } catch (err){
            console.log(err);
        }
    }
 
    useEffect(() => {
        getAllShoes();
    }, []);

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

    function handleSelectChange(e){
        setSelectedOption(e.target.value);
    }
    
    return (
        <StyledShopContainer>
            <h1>Shop</h1>
            <StyledDivShop>
                <StyledBtnShop>Teste</StyledBtnShop>
                <StyledBtnShop onClick={() => console.log(shoes, order)}>Show state</StyledBtnShop>
                <select>
                    <option>
                        Teste 1
                    </option>
                    <option>
                        Teste 2
                    </option>
                    <option>
                        Teste 3
                    </option>
                </select>
            </StyledDivShop>
                <StyledGridShop>
                    {shoes.map(element => {
                        const objectKeys = Object.keys(element.sizeAndStock)

                        return (
                        <ShoeCard key={element._id}>
                            <img alt={element.alt}
                            src={element.src}
                            />
                            <div className="shoe-card-infos">
                                <div className="shoe-card-text">
                                    <h4>{element.shoesName}</h4>
                                    <p>{element.price}</p>
                                    <p>{element.color}</p>
                                    <p>{element.gender}</p>
                                <select onChange={handleSelectChange}>
                                    <option>No</option>
                                    {objectKeys.map(key => {
                                        return <option value={key} key={key}>
                                                    {key}
                                               </option>
                                    })}
                                </select>
                                </div>
                                <StyledBtnShop onClick={() => addShoes(element)}>Comprar</StyledBtnShop>
                            </div>
                         </ShoeCard>
                        )
                    })}
                </StyledGridShop>
        </StyledShopContainer>
    )
}
