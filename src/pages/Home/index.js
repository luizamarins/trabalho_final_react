import React, { useState, useEffect } from 'react'
import { Container, Title } from './styled.js'
import { Link, useNavigate } from 'react-router-dom'

export function Home() {

    /*
    const navigate = useNavigate();

    function handleGoProducts() {
        navigate("/products")
    }
    */
    return(
        <Container>
            <Title>Home</Title>
            <Link to="/login">Login</Link>
            <Link to="/about">Sobre Nós</Link>
            <Link to="/products">Produtos</Link>
            <Link to="/clients">Clientes</Link>
            <Link to="/cart">Carrinho</Link>
        </Container>

        /*

        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1>Home</h1>
            <Link to="/clients" state={{userName}}>Clientes</Link>

            <button style={{width: 100, height: 100, marginTop: 10}} onClick={handleGoProducts}>Produtos</button>
        </div>
        
        */
    );
}