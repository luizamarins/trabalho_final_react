import React, { useState, useEffect } from 'react'
import { Container, Title, Logo, MainMenu, Link, Category } from './styled.js'
import { useNavigate } from 'react-router-dom'
import logo1 from '../../assets/img/logo1.jpg'
import { ButtonCategory } from '../../components/ButtonCategory/index.js';

export function Home() {
    
// entender isso aqui:

    // const navigate = useNavigate();

    // function handleGoProducts() {
    //     navigate(`/produto`, {state: {
    //     }})
    // }

    return(
        <Container>
          
            <Logo src={logo1} />
                        
            <MainMenu>
                <Link to="/login">Login</Link>
                <Link to="/about">Quem somos</Link>
                <Link to="/cart">Carrinho</Link>
            </MainMenu>

            <Category>
                <ButtonCategory>FILOSOFIA</ButtonCategory>
                <ButtonCategory>HISTÓRIA</ButtonCategory>
                <ButtonCategory>LITERATURA</ButtonCategory>
                <ButtonCategory>GEOGRAFIA</ButtonCategory>
            </Category>

        </Container>


        /*  <Link to="/products">Produtos</Link>
            <Link to="/clients">Clientes</Link> */
        
        /*
        <Container>
            <Link to="/products/filosofia">Filosofia</Link>
            <Link to="/products/ciencias-exatas">Ciências Exatas</Link>
            <Link to="/clients/historia">História</Link>
            <Link to="/literatura">Literatura</Link>
        </Container>
        */

        /*

        <div style={{display: 'flex', flexDirection: 'column'}}>
            <button style={{width: 100, height: 100, marginTop: 10}} onClick={handleGoProducts}>Produtos</button>
        </div>
        
        */
    );
}