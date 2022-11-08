import { useState } from "react"
import { Container } from "../../components/ProductForm/styled"

export function ProductForm({props}) {

    const [product, setProduct] = useState({
        nome: "",
        descricao: "",
        qtdEstoque: "",
        valor: "",
        idCategoria: "",
        nomeCategoria: "",
        idFuncionario: "",
        nomeFuncionario: "",
        dataFabricacao: "2019-10-01T03:00:00Z",
        fotoLink: ""
    })

    function handleSubmit(event) {
        event.preventDefault()
        props(product)
    }

    return (
        <Container>
            <form>
                <h2>Cadastro</h2>
                <div className="cadastro">
                    <div className="user-box">
                        <input placeholder="nome" type="text" required onChange={event => setProduct({ ...product, nome: event.target.value })}></input>
                        <input placeholder="descrição" type="text" required onChange={event => setProduct({ ...product, descricao: event.target.value })}></input>
                        <input placeholder="quantidade em estoque" type="text" required onChange={event => setProduct({ ...product, qtdEstoque: event.target.value })}></input>
                        <input placeholder="valor" type="text" required onChange={event => setProduct({ ...product, valor: event.target.value })}></input>
                        <input placeholder="id categoria" type="text" required onChange={event => setProduct({ ...product, idCategoria: event.target.value })}></input>
                        <input placeholder="nome da categoria" type="text" required onChange={event => setProduct({ ...product, nomeCategoria: event.target.value })}></input>
                        <input placeholder="id do funcionário" type="text" required onChange={event => setProduct({ ...product, idFuncionario: event.target.value })}></input>
                        <input placeholder="nome do funcionário" type="text" required onChange={event => setProduct({ ...product, nomeFuncionario: event.target.value })}></input>
                        <input placeholder="data de fabricação" type="text" required onChange={event => setProduct({ ...product, dataFabricacao: event.target.value })}></input>
                        <input placeholder="link da foto" type="text" required onChange={event => setProduct({ ...product, fotoLink: event.target.value })}></input>
                    </div>
                </div>

                <div className="botao-form">
                    <button id="submit" onClick={handleSubmit}>
                        CADASTRAR
                    </button>
                    <button id="reset" type="reset">
                        LIMPAR
                    </button>
                </div>
            </form>
        </Container>
    )
}