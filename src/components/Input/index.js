import { InputWrapper } from "../../global"

export function Input(props){
    const field = props.field;
    const name = field.charAt(0).toLowerCase() + field.slice(1);

    return (
        <InputWrapper>
            <label htmlFor={`input${field}`}>
                {props.text}
                <small>Obrigatório</small>
            </label>
            <input
            id={`input${field}`}
            type={props.type}
            name={name}
            onChange={props.handler}
            value={props.value}
            />
            <span>{props.span}</span>
        </InputWrapper>
    )
}