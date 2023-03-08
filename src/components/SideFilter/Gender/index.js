import { useState, useEffect } from "react";
import { StyledSideCard } from "../../../pages/Shop/styles";

export function GenderSideFilter(props){
    const [genderPick, setGenderPick] = useState([]);
    const [genderOpen, setGenderOpen] = useState(false);
    const {shoes, setShoes, defaultShoes } = props.shoesState;

    useEffect(() => {
        if(genderPick.length === 2){
            setShoes(defaultShoes);
            return
        }

        const filtered = shoes.filter((element) => 
            element.gender === genderPick[0]);
        
        if(filtered.length === 0){
            setShoes(defaultShoes);
        } else setShoes(filtered);
    }, [genderPick]); 
 
    function handleGender(e){
        if(genderPick.includes(e.target.value)){
            const filtered = genderPick.filter((element) => element !== e.target.value);
            setGenderPick(filtered);
            return;
        };
        setGenderPick([...genderPick, e.target.value])
    }

    return (
        <StyledSideCard>
            <div className="div-h4">
            <h4>Gênero</h4> 
            <button className="btn-color-add" onClick={() => setGenderOpen(!genderOpen)}>
                {genderOpen ? <ion-icon name="remove-outline"/> : <ion-icon name="add-outline"/>}
            </button>
            </div>
            {genderOpen ? 
        <ul className="ul-tags">
            <li>
            <input type={'checkbox'} onClick={handleGender} value={'Feminino'}/>
            <label>Feminino</label>
            </li>
            <li>
            <input type={'checkbox'} onClick={handleGender} value={'Masculino'}/>
            <label>Masculino</label>
            </li>
        </ul> : 
        null}   
        </StyledSideCard>
    )
}