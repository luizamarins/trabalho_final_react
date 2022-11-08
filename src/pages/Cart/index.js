import React, { useState, useEffect } from 'react'
import { Logo, Link, Headers, Container } from './styled.js'
//import { useNavigate } from 'react-router-dom'
import logo1 from '../../assets/img/logo1.jpg'
import Footer from '../../components/Footer/index.js';
//import productService from '../../services/requests/productService.js'

export function Cart() {
    return (

        <>
            <Headers>
                
                <Logo src={logo1} />

                <ul>
                    <Link to="/quem-somos">Quem somos</Link>
                    <Link to="/produtos">Produtos</Link>
                    <Link to="/carrinho">Carrinho</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/cadastro">Cadastro</Link>
                </ul>

            </Headers>

            <Container>
                <div>
                    <h1>Carrinho</h1>
                </div>
            </Container>

            <Footer />

        </>
    );
}