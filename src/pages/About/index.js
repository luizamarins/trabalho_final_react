import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo, Headers, Content } from './styled.js'
import logo1 from '../../assets/img/logo1.jpg'
import Footer from '../../components/Footer/index.js';

export function About() {

    const [selected, setSelected] = useState("Sobre")
    function selectedContent() {
        switch (selected) {
            case "Sobre":
                return(
                    <h1>Uma livraria online que leva o conhecimento até a palma de suas mãos!</h1>
                );
            case "Missão":
                return(
                    <h1>Promover o conhecimento para todos de maneira dinâmica e eficiente.</h1>
                );
            case "Contato":
                return (
                    <>
                    <h2>(24) 9855-5786</h2> 
                    <h2>biblion@gmail.com</h2>
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
        <Link to="/quem-somos">Quem somos</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/carrinho">Carrinho</Link>
        <Link to="/login">Login</Link>
        <Link to="/cadastro">Cadastro</Link>
    </ul>
  
  </Headers>
  
        <Container>
                       
            {/* <h3>Quem somos</h3>
            
            <Content>
                <header>
                    
                    <span onClick={() => setSelected("Sobre")}>Sobre Nós</span>
                    <span onClick={() => setSelected("Missão")}>Missão</span>
                    <span onClick={() => setSelected("Contato")}>Contato</span>
                </header>

                {selectedContent()}
                
            </Content> */}

           {/* <img src={require("../../assets/img/logo-livros.gif")} alt="foto-livros"/> */}
        
        </Container>

        <Footer/>

        </>

    )
}