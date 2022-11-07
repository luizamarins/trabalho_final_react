import styled from 'styled-components'
import { Link as BaseLink } from 'react-router-dom'


export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Title = styled.h1`
    color: darkorchid !important;
`;

export const Logo = styled.img`
    width: 70%;
    object-fit: scale-down;
    height: 220px;

`
export const MainMenu = styled.div`
    margin-top: 35px;
    display: flex;
    justify-content: space-around;
    width: 80%;
`
export const Link = styled(BaseLink)`
    text-decoration: none;
    &:hover {color: gray};
`
export const Category = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 50px;

`