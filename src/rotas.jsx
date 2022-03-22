import React from "react";
import {BrowserRouter, Switch, Router} from "react-dom";

import Suporte from "./faq/suporte";
import Index from "./index/index";

function Rotas(){
    <BrowserRouter>
        <Switch>
            <Router path="/" component={Index} />
            <Router path="/suporte" component={Suporte} />
        </Switch>
    </BrowserRouter>
}

export default Rotas;