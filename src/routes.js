import React from "react";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
//Route renderiza o componente UI.
//Routes é o antigo 'switch'
import Contato from "./componentes/paginas/SobreNos";
import Home from './componentes/paginas/Main';
import Login from './componentes/paginas/PaginaLogin';
import Projetos from './componentes/paginas/PaginaProjetos';
import Navbar from './componentes/Navbar/Navbar';

function Rotear(){
    return(
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="basename={process.env.PUBLIC_URL}/" element={<Home/>}/>
                <Route exact path="basename={process.env.PUBLIC_URL}/contato" element={<Contato/>}/>
                <Route exact path="basename={process.env.PUBLIC_URL}/Login" element={<Login/>}/>
                <Route exact path="basename={process.env.PUBLIC_URL}/projetos" element={<Projetos/>}/>
            </Routes>
        </Router>
    );
};

export default Rotear;