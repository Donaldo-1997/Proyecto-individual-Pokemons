import styled from "styled-components"

export default function MessagePopUp ({ message }) {
    // console.log('MessagePopup montado');
    

    return <>
        <ContainerPopUp>
            <span>{message}</span>
        </ContainerPopUp>   
    </>
}

const ContainerPopUp = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    z-index: 2;

    font-size: 16px;
    height: 2rem;
    width: auto;
    border-radius: 50px;
    padding: 7px 15px 0;
    background-color: #18aed7;
    color: #000;
    /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
`