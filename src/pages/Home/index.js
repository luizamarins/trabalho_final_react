import React, { useState, useEffect } from 'react'
import { Container, Logo, MainMenu, Link, Category, Headers } from './styled.js'
//import { useNavigate } from 'react-router-dom'
import logo1 from '../../assets/img/logo1.jpg'
import { ButtonCategory } from '../../components/ButtonCategory/index.js';
//import productService from '../../services/requests/productService.js'

export function Home() {

    // entender isso aqui:
    
    // const navigate = useNavigate();

    // function handleGoProducts() {
    //     navigate(`/produto`, {state: {
    //     }})
    // }
    
    return (

        <>

            <Headers>

                <Logo src={logo1} />

                <ul>
                    <Link to="/login">Login</Link>
                    <Link to="/quem-somos">Quem somos</Link>
                    <Link to="/produtos">Produtos</Link>
                    <Link to="/clientes">Clientes</Link>
                    <Link to="/carrinho">Carrinho</Link>
                </ul>

                {/* <div class="nav">
                    <label for="toggle">☰</label>
                </div> */}

            </Headers>

            <Container>

                <Category>
                    <ButtonCategory>FILOSOFIA</ButtonCategory>
                    <ButtonCategory>HISTÓRIA</ButtonCategory>
                    <ButtonCategory>LITERATURA</ButtonCategory>
                    <ButtonCategory>GEOGRAFIA</ButtonCategory>
                </Category>

            </Container>

        </>

        /*

        <div style={{display: 'flex', flexDirection: 'column'}}>
            <button style={{width: 100, height: 100, marginTop: 10}} onClick={handleGoProducts}>Produtos</button>
        </div>
        
        */
    );
}