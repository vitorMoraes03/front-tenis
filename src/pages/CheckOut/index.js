import { StyledCheckOutContainer } from "./styles";
import { StyledBtnLogin } from "../Login/styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import { api } from "../../api/api";

export function CheckOut(){
    const { order, setOrder } = useContext(CartContext);

    function priceTotal(){
        let res = 0;
        order.map(element => {
            return res += element.price
        });
        return res;
    }

    async function checkOutCart(){
        try {
            const shoes = order.map(element => {
                return {
                    id: element.id,
                    size: element.size
                }
            })

            const finalOrder = {
                priceTotal: priceTotal(),
                shoes: shoes
            }

            console.log(finalOrder);
            await api.post("/order/create", finalOrder);

        } catch (err){
            console.log(err);
        }
    }

    return (
        <StyledCheckOutContainer>
            <StyledBtnLogin onClick={checkOutCart}>
                Comprar
            </StyledBtnLogin>
            <StyledBtnLogin onClick={() => console.log(order)}>
                Show Cart Context
            </StyledBtnLogin>
            <StyledBtnLogin onClick={priceTotal}>
                Total Price
            </StyledBtnLogin>
        </StyledCheckOutContainer>
    )
}