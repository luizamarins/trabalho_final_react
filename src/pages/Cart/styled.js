import styled from 'styled-components'
import { Link as BaseLink } from 'react-router-dom'

/*Header*/
export const Headers = styled.div`

    position: fixed;
    background-color: #FFFD59;
    display: flex;
    justify-content: space-between;
    
    ul {
        margin: none;
        text-align: center;
        font-family: Oswald;
        font-size: 1.6rem;
        display: inline-block;
    }
`;

export const Logo = styled.img`

    object-fit: scale-down;
    width: 40%;
    height: 40%;
    float: left;
    margin-left: 20px;
    margin-top: 10px;
    padding: 10px;
    @media(min-width: 1000px) {
        width: 20%;
        height: 20%;
    }
`;

export const Link = styled(BaseLink)`

    text-decoration: none;
    &:hover {color: gray};
    display: inline-flex;
    padding: 0.5em 1.5em;
    margin-top: 14px;
    color: darkorchid;
`;

export const Container = styled.div`

padding: 100px;

h1 {
    margin-bottom: 50px;
    margin-top: 50px;
    color: #323242;
}
`;

export const CarrinhoContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;

`
export const ConfirmarPedido = styled.button`
    margin: 1rem;
    padding: 2rem;
    background-color: var(--primary-color);
    border: none;
    border-radius: 10px;
    font-size: 1.5rem;
`

export const Descricao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  text-align: center;
  font-size: 1.7rem;
  color: #ffffff;
`;