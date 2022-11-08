import styled from 'styled-components'
import { Link as BaseLink } from 'react-router-dom'

export const Container = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;

`;

export const MainMenu = styled.div`

    margin-right: 50px;
    margin-left: 50px;
    display: flex;
    justify-content: space-around;
    width: 70%;
    height: 100%;
    float: right;

`;

>>>>>>> main
export const Headers = styled.div`

    position: fixed;
    background-color: #FFFD59;
    display: flex;
    justify-content: space-between;

    div {
        float: right;
        padding: 10px;
        margin-right: 20px;
    }

    ul {
        margin: none;
        text-align: center;
        margin: none;
        font-family: Oswald;
        font-size: 2rem;
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

/*Meio*/
export const Container = styled.div`
    
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 50px;
    padding: 100px;
`;

export const Category = styled.div`

    display: inline-flex;
    gap: 20px;
    margin-top: 100px;
    align-items: center;
    flex-direction: column;
`;

/*Footer*/