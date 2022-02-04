import React from "react";
import "./index.css";
const Contato = ()=>{
    return(<>
        <div className="pagdescription" >
        <h0>SOBRE NÓS</h0>
        </div>
        <div className="sobrenos">
            <img/>Equipe Neo
            [Membros da Equipe],<br/>
            [Descrição]<br/>
            [Entre em contato através nosso e-mail: a@example.org]
            <form>
                <label type='email'>Seu E-mail:</label><br/>
                <input type='text'></input><br/>
                <label>Sua Mensagem:</label><br/>
                <input type='text'></input><br/>
                <button class="btn btn-light" >Enviar</button>
            </form>
        </div></>
    );
}

export default Contato;