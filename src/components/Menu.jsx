import './Menu.css'

import React from 'react'
import { Link } from 'react-router-dom'

export default props =>{

    return(
        <div className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Cadastrar</Link>
                    </li>
                    <li>
                        <Link to='/leitura'>Leitura</Link>
                    </li>
                    <li>
                        <Link to='/atualizacao'>Atualizar</Link>
                    </li>
                    <li>
                        <Link to='/exclusao'>Exclusão</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}