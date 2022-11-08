import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: darkorchid;
    }

    body {
        background-color: #FFFD59;
    }

    input, button {
        cursor: pointer;
        background-color: white;
    }

    :focus {
        outline: transparent;
    }

    body, input, textarea, button {
        font-family: Oswald;
        font-size: 3rem;
    }
`;