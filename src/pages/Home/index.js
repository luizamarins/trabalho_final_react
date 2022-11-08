import React, { useState, useEffect } from 'react'
import { Container, Logo, Link, Category, Headers } from './styled.js'
import logo1 from '../../assets/img/logo1.jpg'
import { ButtonCategory } from '../../components/ButtonCategory/index.js';
//import productService from '../../services/requests/productService.js'

export function Home() {

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