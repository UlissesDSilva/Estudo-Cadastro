import './css/Formulario.css'
import React from 'react'

export default props =>{

    return(
        <form action="">
            <fieldset>
                <legend>Atualizar Produto</legend>
                <label htmlFor="pesquisar">Produto: </label>
                <input id="pesquisar" type="search" placeholder="Pesquisar por nome..."/>
                <p>ou</p>                
                <label htmlFor="selecionar">Selecione Categoria: </label>
                <select name="categoria">
                    <option value="infor">Informática</option>
                    <option value="mobile">Celular</option>
                    <option value="escritorio">Escritório</option>
                    <option value="acessorio">Acessório</option>
                </select>
                <br/><br/>
                <hr/>
                <p>Alterar Produto</p>
                <label htmlFor="produtoNome">Produto: </label>
                <input type="text" id="produtoNome"  placeholder="Xiamoi Redmi"/>
                <label htmlFor="produtoPreco">Preço: </label>
                <input type="number" id="produtoPreco" placeholder="R$ 850,00"/><br/><br/>
                <label htmlFor="produtoQTD">Quantidade: </label>
                <input type="number" id="produtoQTD"/>
                <br/><br/>
                <input className="Button" type="submit" value='Atualizar'/>
            </fieldset>
        </form>
    )
}