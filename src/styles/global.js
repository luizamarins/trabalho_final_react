import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    //pode colocar todo o css que por padrão a minha api já tenha

    *{
        margin: 5;
        padding: 0;
        box-sizing: border-box;
        background-color: lavender;
    }

    body {
        //background-color: red;
        color: red;

    }

    input, button {
        cursor: pointer;
        background-color: white;
    }

    :focus {
        outline: transparent;
        box-shadow: 0 0 0 2px green; //cima direita baixo esquerda
    }

    body, input, textarea, button {
        font-family: Oswald;
        font-size: 1rem; //16px
    }

   /* [disabled] {
        cursor: not-allowed;
    }*/
    // se quiser usar isso, colocar disabled dentro do botão lá no index da Home.

`;