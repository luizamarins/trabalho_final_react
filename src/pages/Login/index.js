import { Container } from "./styled";

export function Login() {
    return(
        <Container>
            <h1>Login</h1>
            <input placeholder='e-mail' />
            <input placeholder='senha' />
            <button>entrar</button>
        </Container>
    );
}