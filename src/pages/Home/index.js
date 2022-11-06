import React, { useState, useEffect } from 'react'
import { Container, Title } from './styled.js'
import { Link, useNavigate } from 'react-router-dom'
import productService from '../../services/requests/productService.js';

export function Home() {
    
// entender isso aqui:

    // const navigate = useNavigate();

    // function handleGoProducts() {
    //     navigate(`/produto`, {state: {
    //     }})
    // }

    return(
        <Container style={{display: 'flex', flexDirection: 'column'}}>
            <Title>Home</Title>
            
            <Link to="/quem-somos">Sobre Nós</Link>
            <Link to="/produtos">Produtos</Link>
            <Link to="/categorias">Categorias</Link>
            <Link to="/clientes">Clientes</Link>
            <Link to="/carrinho">Carrinho</Link>
        </Container>

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