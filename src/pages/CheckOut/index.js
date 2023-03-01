import { StyledCheckOutBackground, StyledBtnsCheckout, StyledCheckOutContainer, StyledCheckOutTitle, StyledBtnSmall, StyledCheckOutMain, StyledCheckOutPrice, StyledCheckOutCards } from "./styles";
import { useContext } from "react";
import { StyledBtnLogin } from "../Login/styles";
import { CartContext } from "../../contexts/cartContext";
import { api } from "../../api/api";
import { ShoeCardSmall } from "../../components/ShoeCardSmall";

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
        <StyledCheckOutBackground>
            <StyledCheckOutContainer>
                <StyledCheckOutTitle>
                <h2>Resumo da Compra:</h2>
                <StyledBtnSmall>Editar Compra</StyledBtnSmall>
                </StyledCheckOutTitle>
                <StyledCheckOutMain>
                <h3>{order.length}{order.length > 1 ? ' Itens' : ' Item'}</h3>
                <StyledCheckOutCards>
                {order.map(element => {
                    const index = order.indexOf(element);
                    return (
                        <ShoeCardSmall props={[element, index]}/>
                    )
                })}
                </StyledCheckOutCards>
                </StyledCheckOutMain>
                <StyledCheckOutPrice>
                    <div className="total-price">
                        <p>Total price</p>
                        <p>{priceTotal()}</p>
                    </div>
                    <div>
                        <p>Frete</p>
                        <p>Grátis</p>
                    </div>
                </StyledCheckOutPrice>
            </StyledCheckOutContainer>  
            <StyledBtnsCheckout>
                <StyledBtnLogin onClick={checkOutCart}>
                    Comprar
                </StyledBtnLogin>
                <StyledBtnLogin onClick={() => console.log(order)}>
                    Show Cart Context
                </StyledBtnLogin>
                <StyledBtnLogin onClick={priceTotal}>
                    Total Price
                </StyledBtnLogin>
            </StyledBtnsCheckout>
        </StyledCheckOutBackground>
    )
}