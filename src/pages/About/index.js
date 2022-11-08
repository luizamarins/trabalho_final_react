import { useState } from 'react';
import { Container, Content } from './styled.js'

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
                    <h1>(24) 9855-5786</h1> 
                    <h1>biblion@gmail.com</h1>
                    </>
                );
            
            default:
                break;
        }

    }

    return (
        <Container>
                       
            <h2>A BiblioOn</h2>
            
            <Content>
                <header>
                    
                    <span onClick={() => setSelected("Sobre")}>Sobre Nós</span>
                    <span onClick={() => setSelected("Missão")}>Missão</span>
                    <span onClick={() => setSelected("Contato")}>Contato</span>
                </header>

                {selectedContent()}
                
            </Content>

           <img src={require("../../assets/img/logo-livros.gif")} alt="foto-livros"/>
        
        </Container>
    )
}