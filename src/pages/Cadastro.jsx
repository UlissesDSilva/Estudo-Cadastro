import './css/Formulario.css'
import React from 'react'

export default props =>{

    return(
        <div className="Cadastro">
            <form action="">
                <fieldset>
                    <legend>Cadastro do Produto</legend>
                    <label htmlFor="produtoNome">Produto: </label>
                    <input type="text" id="produtoNome"  placeholder="Nome do Produto"/>
                    <label htmlFor="produtoPreco">Preço: </label>
                    <input type="number" id="produtoPreco" placeholder="R$"/><br/><br/>
                    <label htmlFor="produtoQTD">Quantidade: </label>
                    <input type="number" id="produtoQTD"/>
                    <label htmlFor="produtoValidade">Fabricação: </label>
                    <input type="date" min="2021-01-10"/><br/>
                    <p>Categoria do Produto</p>
                    <input type="checkbox" id="infor" value="infor" checked/>
                    <label htmlFor="infor">Informática</label>
                    <input type="checkbox" id="mobile" value="mobile"/>
                    <label htmlFor="mobile">Celular</label>
                    <input type="checkbox" id="escritorio" value="escritorio"/>
                    <label htmlFor="escritorio">Escritório</label>
                    <input type="checkbox" id="acessorio" value="acessorio"/>
                    <label htmlFor="acessorio">Acessorio</label>
                    <br/><br/>
                    <input className="Button" type="submit" value='Cadastrar'/>
                </fieldset>
            </form>
            <form action="">
                <fieldset>
                    <legend>Cadastro do Fornecedor</legend>
                    <label htmlFor="fornecedor">Fornecedor: </label>
                    <input type="text" id="fornecedor"  placeholder="Fornecedor"/><br/><br/>
                    <label htmlFor="telefone">Telefone: </label>
                    <input type="tel" id="telefone" pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}" 
                           placeholder="Ex: 85-99999-9999"/><br/><br/>
                    <label htmlFor="email">E-mail: </label>
                    <input type="email" id="email"/>
                    <br/><br/>
                    <input className="Button" type="submit" value='Cadastrar'/>
                </fieldset>
            </form>
        </div>
    )
}