import React from "react";
import { api } from "../../Services/api";
import {
  ButtonDiv,
  Descricao,
  Imagem,
  ItemContainer,
  DeletarButao,
} from "./style";
import { useNavigate } from "react-router-dom";

export const CartItem = ({ produto, itemPedido }) => {
  let navigate = useNavigate();

  function deletarItemPedido() {
    api.delete(`itemPedido?idItemPedido=${itemPedido[0].idItemPedido}`);
    alert("Produto deletado do pedido");
    window.location.reload(false);
  }

  if (produto === null) {
    return null;
  }

  return (
    <ItemContainer>
      <Imagem src={`${produto.nomeImagemProduto}`} />
      <Descricao>
        <strong>Nome do produto:</strong> {produto.nomeProduto} <br />
        <strong>Preço por Unidade:</strong> R$ {produto.valorUnitario},00 <br />
        <strong>Quantidade:</strong> {itemPedido[0].quantidadeItemPedido}
        <ButtonDiv>
          <DeletarButao onClick={deletarItemPedido}>Deletar Item</DeletarButao>
        </ButtonDiv>
      </Descricao>
    </ItemContainer>
  );
};
