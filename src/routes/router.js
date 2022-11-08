import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Products } from '../pages/Products'
import { PageNotFound } from '../pages/PageNotFound'
import { About } from '../pages/About'
import { Cart } from '../pages/Cart'
import { Cadastro } from '../pages/Cadastro'
//import { Login } from '../pages/Login'
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

    return (
        <Routes>

            <Route path='/home' element={<Home />} />
            <Route path='/quem-somos' element={<About />} />
            <Route path='/cadastro' element={<Cadastro />} />

            <Route path='/produtos' element={<Products />}>
                <Route path=':id' element={<Products />} />
            </Route>

            <Route path='/carrinho' element={<Cart />} />
            <Route path='*' element={<PageNotFound />} />

        </Routes>
    )
}