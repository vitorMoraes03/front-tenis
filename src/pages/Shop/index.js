import { StyledShopContainer, StyledDivShop, StyledGridShop, StyledBtnShop } from "./styles";
import { api } from "../../api/api";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import { ShoeCard } from "../../components/ShoeCard";

export function Shop(){
    const {order, setOrder} = useContext(CartContext);
    const [shoes, setShoes] = useState([]);

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
                        return (
                            <ShoeCard element={element} orderState={{order, setOrder}}/>
                        )
                    })}
                </StyledGridShop>
        </StyledShopContainer>
    )
}
