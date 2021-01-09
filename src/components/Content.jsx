import './Content.css'
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Cadastro from '../pages/Cadastro'
import Leitura from '../pages/Leitura'
import Atualizacao from '../pages/Atualizacao'
import Exclusao from '../pages/Exclusao'

export default props =>{

    return(
        <div className="Content">
            <Switch>
                <Route exact path="/">
                    <Cadastro/>
                </Route>
                <Route path="/leitura">
                    <Leitura/>
                </Route>
                <Route path="/atualizacao">
                    <Atualizacao/>
                </Route>
                <Route path="/exclusao">
                    <Exclusao/>
                </Route>
            </Switch>
        </div>
    )
}