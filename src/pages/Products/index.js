import { useState, useEffect } from 'react';
import productService from '../../services/requests/productService';
import { Container, Logo, Link, Headers } from './styled.js'
import logo1 from '../../assets/img/logo1.jpg'
//import productService from '../../services/requests/productService.js'

export function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        productService.getProducts().then(response => {
            console.log(response);
            setProducts(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, [])

    return (

        <>

            <Headers>

                <Logo src={logo1} />

                <ul>
                    <Link to="/quem-somos">Quem somos</Link>
                    <Link to="/produtos">Produtos</Link>
                    <Link to="/carrinho">Carrinho</Link>
                    <Link to="/login">Login</Link>
                </ul>

                {/* <div class="nav">
                    <label for="toggle">☰</label>
                </div> */}

            </Headers>

            <Container>
                <h1>Produtos</h1>

                {
                    products.map(res => {
                        return (
                            <div className={"product-card"}key={res.id}>
                                <img style={{ width: 200, height: 200 }} src={res.fotoLink} />
                                <span>{res.nome}</span>
                                <span>{res.descricao}</span>
                                <span>R$ {res.valor},00</span>
                                <button onClick={{}}>COMPRAR</button>
                            </div>
                        )
                    })
                }
            </Container>
        </>
    );
}