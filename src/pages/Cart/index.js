//import React, { useState, useEffect } from 'react';
import { Logo, Link, Headers, Container } from "./styled.js";
//import {api} from '../../services/api'
// import {EmptyCart} from '../../components/EmptyCart';
// import {NoLogin} from '../../components/NoLogin';
// import { CartItem } from '../../components/CartItem';
import logo1 from "../../assets/img/logo1.jpg";
import Footer from "../../components/Footer/index.js";

export const Cart = () => {
  //     const [pedidos, setPedidos] = useState([]);
  //     const [itemPedido, setItemPedido] = useState([]);
  //     const [produtos, setProdutos] = useState([]);
  //     const [display, setDisplay] = useState(null);
  //     const [descricao, setDescricao] = useState(null);

  //     async function getDados() {
  //         if (localStorage.getItem("idCliente") === null) {
  //             setDisplay(
  //                 <NoLogin />
  //             );
  //         } else {
  //             const responsePedidos = await api.get(
  //                 `pedido/cliente/${localStorage.getItem("idCliente")}`
  //             );
  //             await setPedidos(responsePedidos.data[responsePedidos.data.length - 1]);
  //             if (
  //                 responsePedidos.data.length === 0 ||
  //                 responsePedidos.data[responsePedidos.data.length - 1].status === true
  //             ) {
  //                 setDisplay(<EmptyCart />);
  //             } else {
  //                 const responseItemPedido = await api.get(
  //                     `itemPedido/pedido/${responsePedidos.data[responsePedidos.data.length - 1].idPedido
  //                     }`
  //                 );
  //                 await setItemPedido(responseItemPedido.data);
  //                 if (responseItemPedido.data.length === 0) {
  //                     setDisplay(<EmptyCart />);
  //                 } else {
  //                     let newProduto = [];
  //                     await Promise.all(
  //                         responseItemPedido.data.map(async (item) => {
  //                             const itemResponse = await api.get(`produto/${item.idProduto}`);
  //                             newProduto.push(itemResponse.data);
  //                         })
  //                     );
  //                     await setProdutos(newProduto);
  //                 }
  //             }
  //         }
  //     }

  //     useEffect(() => {
  //         getDados();
  //     }, []);

  //     useEffect(() => {
  //         if (produtos.length !== 0 && pedidos != null && itemPedido.length !== 0) {
  //             handleDisplay();
  //         }
  //     }, [produtos]);

  //     function handleDisplay() {
  //         setDisplay(
  //             produtos.map((res, index) => {
  //                 const itemPedidoFiltrado = itemPedido.filter(
  //                     (response) => response.idProduto === res.idProduto
  //                 );
  //                 return (
  //                     <CartItem
  //                         produto={res}
  //                         itemPedido={itemPedidoFiltrado}
  //                         key={index}
  //                     />
  //                 );
  //             })
  //         );

  //         setDescricao(
  //             <Container>
  //                 <strong>Valor bruto do pedido:</strong> R${" "}
  //                 {pedidos.valorTotalPedidoBruto},00 <br />
  //                 <strong>Valor líquido do pedido:</strong> R${" "}
  //                 {pedidos.valorTotalPedidoLiquido},00 <br />
  //                 <strong>Valor de desconto do pedido:</strong>R${" "}
  //                 {pedidos.valorTotalDescontoPedido},00 <br />
  //                 <button onClick={finalizar}>finalizar pedido</button>
  //             </Container>
  //         );
  //     }

  //     function finalizar() {
  //         api.put(
  //             `pedido/processar?idPedido=${pedidos.idPedido}`
  //         );
  //         alert("Pedido finalizado");
  //         window.location.reload(false);
  //     }

  return (
    <>
      <Headers>
        <Logo src={logo1} />

        <ul>
          <Link to="/">Home</Link>
          <Link to="/quem-somos">Quem somos</Link>
          <Link to="/produtos">Produtos</Link>
          <Link to="/carrinho">Carrinho</Link>
          <Link to="/login">Login</Link>
          <Link to="/cadastro">Cadastro</Link>
        </ul>
      </Headers>

      <Container>
        <div>
          <h1>Carrinho</h1>
        </div>
      </Container>

      <Footer />
    </>
  );
};
