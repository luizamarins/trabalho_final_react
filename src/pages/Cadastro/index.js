import React, { useState, useEffect } from 'react';
import { Container, Logo, Link, Category, Headers } from './styled.js';
import logo1 from '../../assets/img/logo1.jpg';
import { ButtonCategory } from '../../components/ButtonCategory/index.js';
import productService from '../../services/requests/productService.js'
import { ProductForm } from '../../components/ProductForm/index.js';


export function Cadastro() {

   function postProducts(product) {

      productService.postProducts(product).then(res => {
            console.log(res);
         })
         .catch(error => {
            console.log(error)
         })
   }

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
         <ProductForm props={postProducts} />
      </Container>

      </>
   )
}