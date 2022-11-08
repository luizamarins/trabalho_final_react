import React from "react";
import { BoxBadStyle } from "./style";

function EmptyCart(props) {
  return (
    <>
      <BoxBadStyle>
        <div className="mensagemErro">
          <h1>Não consigo ver os seus itens...</h1>
          <p>Volte na loja e adicione itens ao seu carrinho</p>
        </div>
      </BoxBadStyle>
    </>
  );
}

export default EmptyCart;
