import './css/Formulario.css'
import React from  'react'

export default props => {
    // Coloquei dois exemplos de deixar o campo apenas como leitura
    // 1º usando o readOnly; 2º passando um 'value' para o input
    return(
        <div>
            <form action="">
                <fieldset>
                    <legend>Produtos Cadastrados</legend>
                    <label htmlFor="produto">Produto: </label>
                    <input id="produto" type="text" placeholder="Notebook Ascer" className='Preco' readOnly/>
                    <label htmlFor="produtoPreco">Preço: </label>
                    <input id="produtoPreco" type="number" value="3899.00"/><br/><br/>
                    <label htmlFor="categoria">Categoria: </label>
                    <input id="categoria" type="text" value="Informática"/>
                </fieldset>
            </form>
        </div>
    )
}