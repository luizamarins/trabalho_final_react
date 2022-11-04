import {BrowserRouter} from 'react-router-dom'
import { Router } from './routes/routes'

export function App() {
    return(
        <BrowserRouter>
            <Router />        
        </BrowserRouter>
    );
}