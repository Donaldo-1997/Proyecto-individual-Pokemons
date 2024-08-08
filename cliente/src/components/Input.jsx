import styled from "styled-components";

export default function Input() {
    const { 
        id, 
        name, 
        handleChange,
        value,
        validation
    } = props
    return (
        <>
            <Input 
                id={id} 
                name={name}  
                type="text" 
                placeholder=" " 
                onChange={handleChange} 
                onBlur={() => validation(state)}
                value={value}
            />
            {errors.image && <ErrorMessage>{errors.image}</ErrorMessage>}
            <Label htmlFor={id}>Url image</Label>
        </>
    )
}

const Input = styled.input`
    background-color: ${props => props.theme.colors.light};
	border: 0;
    border-bottom: 2px solid #000;
	box-sizing: border-box;
	color: #000;
	font-size: 18px;
	height: 6vh;
	outline: 0;
	padding: 4px 5px 0;
	width: 100%;

    &:focus~.cut,
    &:not(:placeholder-shown)~.cut {
        transform: translateY(8px);
    }
`

const Label = styled.label`
    color: #000;
	left: 5px;
	line-height: 14px;
	pointer-events: none;
	position: absolute;
	transform-origin: 0 50%;
	transition: transform 200ms, color 200ms;
	top: 2vh;

    input:focus~&,
    input:not(:placeholder-shown)~& {
        transform: translateY(-5.2vh) translateX(-10px) scale(0.75);
    }
    input:not(:placeholder-shown)~& {
	    color: #000;
    }
    input:focus~& {
        color: #000;
        padding: 5px;
        border-radius: 20px;
    }
`

const ErrorMessage = styled.span`
    position: relative;
	font-weight: bold;
	color: #fff;
	background-color: ${props => props.theme.colors.dark};
	padding: 3px 5px;
	border-radius: 5px;
	font-style: italic;
	font-size: 10px;
	z-index: 1;
`