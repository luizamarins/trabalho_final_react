import {Route, Routes} from 'react-router-dom'
import { Home } from '../pages/Home'
import { Clients } from '../pages/Clients'
import { Products } from '../pages/Products'
import { PageNotFound } from '../pages/PageNotFound'
import { About } from '../pages/About'
import { Login } from '../pages/Login'
import { Cart } from '../pages/Cart'

export function Router() {
    return(
        <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/clients' element={<Clients/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<PageNotFound/>}/>

        </Routes>
    )
}