import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px; 
        background-color: #19140f;
        color: ${(props) => props.theme.primaryTextColor};
        -webkit-tap-highlight-color: transparent;
    }
    #root{
        margin:0 auto;
    }
    a {
        text-decoration: none;
        outline: none;
        color: ${(props) => props.theme.primary};
    }
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px
    }
    
    ::-webkit-scrollbar-track {
        border-radius: 5px;
        background: #eaeaea
    }
    
    ::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background: #bbbbbb
    }
    
    ::-webkit-scrollbar-thumb:window-inactive {
        background: #bbbbbb
    }
    
    .invalidInput {
        border: 1px solid red !important;
    }
    
    .validInput {
        border: 1px solid #cecece !important;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
    }

    .capital {
        text-transform: capitalize;
    }
 `;
