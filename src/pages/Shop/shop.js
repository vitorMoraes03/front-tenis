import { StyledBtnShop, StyledShopContainer, StyledDivShop, StyledGridShop } from "./styles";
import { api } from "../../api/api";
import { useState, useEffect } from "react";

export function Shop(){

    async function getAllShoes(){
        try {
            const allShoes = await api.get("/shoes");
            setShoes(allShoes.data);
        } catch (err){
            console.log(err);
        }
    }
 
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        getAllShoes();
    }, []);
    
    return (
        <StyledShopContainer>
            <h1>Shop</h1>
            <StyledDivShop>
                <StyledBtnShop>Teste</StyledBtnShop>
                <StyledBtnShop onClick={() => console.log(shoes)}>Show state</StyledBtnShop>
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
                        <div>
                            <img alt={element.alt}
                            src={element.src}
                            />
                            <h4>{element.shoesName}</h4>
                            <p>{element.price}</p>
                            <select>
                                {objectKeys.map(key => {
                                    return <option>
                                            {key}
                                           </option>
                                })}
                            </select>
                            <StyledBtnShop>Comprar</StyledBtnShop>
                         </div>
                        )
                    })}
                </StyledGridShop>
        </StyledShopContainer>
    )
}
