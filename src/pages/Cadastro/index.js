// import React, { useState, useEffect } from 'react';
// import { Container, Logo, Link, Category, Headers } from './styled.js';
// import logo1 from '../../assets/img/logo1.jpg';
// import { ButtonCategory } from '../../components/ButtonCategory/index.js';
// import productService from '../../services/requests/productService.js'
// import { useNavigate } from 'react-router-dom';

// export function Cadastro() {

//    const navigate = useNavigate();
//    const [product, postProducts] = useState([]);

//    function handleRegisterProducts() {

//       productService.postProducts(product).then(res => {
//          console.log(res);
//       }).catch(error => {
//          console.log(error);
//       })
//    }
// }

//  // function handleGoProducts() {
//     //     navigate(`/produto`, {state: {
//     //     }})
//     // }