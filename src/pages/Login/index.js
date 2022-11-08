import { Container } from "./styled";
import { useContext, useState } from "react";
import AuthContext from "../../context/authentication";
import Footer from "../../components/Footer";

export function Login() {
    const { signIn } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSignIn() {
        signIn(email, password)
    }

    console.log({ user: email, password });
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

        <Container style={{
            display: "flex",
            height: '98vh',
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <h1>Login</h1>
            <input style={{ marginTop: 10, padding: 5 }}
                placeholder='e-mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input style={{ marginTop: 10, padding: 5 }}
                placeholder='senha'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                onClick={handleSignIn}
                style={{ marginTop: 10, padding: 5, cursor: 'pointer' }}>entrar</button>
        </Container>

        <Footer/>

        </>
    );
}