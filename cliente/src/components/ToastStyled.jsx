import { ToastContainer } from "react-toastify";
import styled from "styled-components";

export default function ToastStyled() {
    return <CustomToastContainer />
}

const CustomToastContainer = styled(ToastContainer)`
    // https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity
    &&&.Toastify__toast-container {
    }
    .Toastify__toast {
        border-radius: 50px;
        height: 35px;
        min-height: auto;
        max-height: min-content;
        padding: 0;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        text-align: center;
    }
    .Toastify__toast-body {
    }
    .Toastify__progress-bar {
    }
`