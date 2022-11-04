import { useState } from 'react';
import { Container, Content } from './styled.js'

export function About() {

    const [selected, setSelected] = useState("Sobre")
    function selectedContent() {
        switch (selected) {
            case "Sobre":
                return(
                    <h1>Somos uma livraria online!</h1>
                );
            case "Missão":
                return(
                    <h1>Disseminar a leitura!</h1>
                );
            case "Contato":
                return(
                    <h1>telefone e email</h1>
                );
            default:
                break;
        }

    }

    return (
        <Container>
            <h2>A Livraria</h2>
            <img src={"https://www.dlojavirtual.com/wp-content/uploads/2015/09/loja-virtual-de-livros.jpg"} alt="foto-livros"/>

            <Content>
                <header>
                    <span onClick={() => setSelected("Sobre")}>Sobre Nós</span>
                    <span onClick={() => setSelected("Missão")}>Missão</span>
                    <span onClick={() => setSelected("Contato")}>Contato</span>
                </header>

                {selectedContent()}
                
            </Content>
        </Container>
    )
}