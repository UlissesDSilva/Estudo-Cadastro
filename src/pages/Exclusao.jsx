import './css/Formulario.css'
import React from 'react'

export default props =>{

    return(
        <div>
            <form action="">
                <fieldset>
                    <legend>Excluir Produto</legend>
                    <label htmlFor="codigo">Código do produto</label>
                    <input type="text" id="codigo" placeholder="Ex: A100"/>
                    <hr/><br/>
                    <label htmlFor="produtoNome">Produto: </label>
                    <input type="text" id="produtoNome" value="Teclado Mecânico Oex"/><br/><br/>
                    <label htmlFor="fornecedor">Fornecedor: </label>
                    <input type="text" id="fornecedor" value="OEXBrasil"/><br/><br/>
                    <input type="submit" value="Excluir" className="Button"/>
                </fieldset>
            </form>
        </div>
    )
}