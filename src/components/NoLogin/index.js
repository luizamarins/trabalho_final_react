import React from "react";
import { BoxBadStyle } from "./style";

function NoLogin(props) {
  return (
    <>
      <div className="mensagemErro">
        <h1>O que você está fazendo aqui?</h1>
        <p>Faça login para adicionar itens ao carrinho</p>
      </div>
    </>
  );
}

export default NoLogin;
