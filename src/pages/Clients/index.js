import {useLocation} from 'react-router-dom'

export function Clients() {
    const location = useLocation();

    return(
        <div>
            <h1>Clientes</h1>
            <h2>{location.state.userName}</h2>
        </div>
    );
}