import { Container, Logo, Link, Headers } from './styled.js';
import logo1 from '../../assets/img/logo1.jpg';
import productService from '../../services/requests/productService.js'
import { ProductForm } from '../../components/ProductForm/index.js';
import Footer from '../../components/Footer/index.js';


export function Cadastro() {

   function postProducts(product) {

      productService.postProducts(product).then(res => {
         console.log(res);
      })
         .catch(error => {
            console.log(error)
         })
   }

   return (

      <>
         <Headers>
            <Logo src={logo1} />

            <ul>
               <Link to="/home">Home</Link>
               <Link to="/quem-somos">Quem somos</Link>
               <Link to="/produtos">Produtos</Link>
               <Link to="/carrinho">Carrinho</Link>
               <Link to="/login">Login</Link>
               <Link to="/cadastro">Cadastro</Link>
            </ul>

         </Headers>

         <Container>
            <h1>Cadastro</h1>

            <ProductForm props={postProducts} />
         </Container>

         <Footer />

      </>
   )
}