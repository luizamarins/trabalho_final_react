//import {useLocation} from 'react-router-dom'
import { useState, useEffect } from 'react';
import productService from '../../services/requests/productService';
import { Container } from '../Home/styled';

export function Products() {
    //const location = useLocation();
    
    const [product, setProducts] = useState([]);
    
        useEffect(() => {
            productService.getProducts().then(response => {
                console.log(response);
                setProducts(response.data);
            }).catch(error => {
                console.log(error);
            })
        }, [])

    // function handleRegisterProducts(){
        
    //     productService.postProducts(product).then(res => {
    //         console.log(res);
    //     }).catch(error => {
    //         console.log(error);
    //     })
    // }

    return(
        <Container>
            <h1>Produtos</h1>

            {
                product.map(res => {
                    return(
                        <>
                        <img style={{width:150, height:150}} src={res.fotoLink}/>
                        <span>{res.nome}</span>
                        <span>{res.descricao}</span>
                        <span>{res.valor}</span>
                        </>
                    )
                })
            }
        </Container>
    );
}