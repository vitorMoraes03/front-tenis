import { StyledCheckOutBackground, StyledBtnsCheckout, StyledCheckOutContainer, StyledBtnSmall } from "./styles";
import { useContext } from "react";
import { StyledBtnLogin } from "../Login/styles";
import { CartContext } from "../../contexts/cartContext";
import { api } from "../../api/api";
import { ShoeCardSmall } from "../../components/ShoeCardSmall";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function CheckOut(){
    const { order, setOrder } = useContext(CartContext);
    const navigate = useNavigate();

    function priceTotal(){
        let res = 0;
        order.map(element => {
            return res += element.price
        });
        return res;
    }

    useEffect(() => {
        if(order.length === 0){
            navigate("/shop");
            alert("Nada no carrinho") //double render, ver como vai ficar com o modal
        };
    }, [order]);

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

            await api.post("/order/create", finalOrder);
            setOrder([]);
            navigate('/');
        } catch (err){
            console.log(err);
            alert('erro na compra');
        }
    }

    return (
        <StyledCheckOutBackground>
            <StyledCheckOutContainer>
                <div className="checkout-title">
                    <h2>Resumo da Compra:</h2>
                    <StyledBtnSmall>Continuar Compra</StyledBtnSmall>
                </div>
                <div className="checkout-main">
                    <h3>{order.length}{order.length > 1 ? ' Itens' : ' Item'}</h3>
                    <div className="checkout-cards">
                        {order.map(element => {
                            const index = order.indexOf(element);
                            return (
                                <ShoeCardSmall key={index} props={[element, index, order, setOrder]}/>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <div>
                        <p className="total-price">Preço total</p>
                        <p>R${priceTotal()}</p>
                    </div>
                    <div className="delivery-tax">
                        <p>Frete</p>
                        <p>Grátis</p>
                    </div>
                </div>
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