import {Route, Routes} from 'react-router-dom'
import { Home } from '../pages/Home'
import { Clients } from '../pages/Clients'
import { Products } from '../pages/Products'
import {Categorias} from '../pages/Categorias'
import { PageNotFound } from '../pages/PageNotFound'
import { About } from '../pages/About'
//import { Login } from '../pages/Login'
import { Cart } from '../pages/Cart'
//import { useContext } from 'react'
//import AuthContext from '../context/authentication'

export function Router() {
    // const {isAuthenticated} = useContext(AuthContext)

    // if (!isAuthenticated) {
    //     return (
    //         <Routes>
    //             <Route path="/" element={<Login/>}/>
    //         </Routes>
    //     )
    // }

    return(
        <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/quem-somos' element={<About/>}/>
            
            <Route path='/clientes' element={<Clients/>}>
                <Route path=':id' element={<Clients/>}/>
            </Route>
            
            <Route path='/categorias' element={<Categorias/>}>
                <Route path=':id' element={<Categorias/>}/>
            </Route>

            <Route path='/produtos' element={<Products/>}>
                <Route path=':id' element={<Products/>}/>
            </Route>
            
            <Route path='/carrinho' element={<Cart/>}/>
            <Route path='*' element={<PageNotFound/>}/>

        </Routes>
    )
}