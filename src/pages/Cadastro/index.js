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
      <Container>
         <ProductForm props={postProducts} />
      </Container>
   )
}