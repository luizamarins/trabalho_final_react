import { useState } from 'react';
import { Container, Logo, Link, Headers, Content } from './styled.js'
import logo1 from '../../assets/img/logo1.jpg'
import Footer from '../../components/Footer/index.js';

export function About() {

    const [selected, setSelected] = useState("Sobre")

    function selectedContent() {
        switch (selected) {
            case "Sobre":
                return (
                    <h1>Somos uma livraria online que leva o conhecimento até a palma de suas mãos!</h1>
                );
            case "Missão":
                return (
                    <h1>Promover o conhecimento para todos de maneira dinâmica e eficiente :)</h1>
                );
            case "Contato":
                return (
                    <>
                        <h1>(24) 2242-1234</h1>
                        <h1>biblion@gmail.com</h1>
                    </>
                );

            default:
                break;
        }
    }

    return (

        <>
            <Headers>

                <Logo src={logo1} />

                <ul>
                    <Link to="/home">Home</Link>
                    <Link to="/quem-somos">Quem somos</Link>
                    <Link to="/produtos">Produtos</Link>
                    <Link to="/carrinho">Carrinho</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/cadastro">Cadastro</Link>
                </ul>

            </Headers>

            <Container>

                <h1>Quem somos</h1>

                <Content>
                    <header>
                        <span onClick={() => setSelected("Sobre")}>A BiblioOn</span>
                        <span onClick={() => setSelected("Missão")}>Missão</span>
                        <span onClick={() => setSelected("Contato")}>Contato</span>
                    </header>

                    {selectedContent()}

                </Content>

                <img src={require("../../assets/img/logo-livros.gif")} alt="foto-livros" />

            </Container>

            <Footer />

        </>

    )
}