import React from "react";
import "./index.css";
const Contato = () => {
    return (<>

        <div className="titulo-sobre"><h1>SOBRE NÓS</h1></div>

        <div className="sobrenos-section">
            <div className="sobrenos-xx">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="sobrenos-xx">
                <form>
                    <input name="name" type="text" class="feedback-input" placeholder="Nome" />
                    <input name="email" type="text" class="feedback-input" placeholder="E-mail" />
                    <textarea name="text" class="feedback-input" placeholder="Comentar"></textarea>
                    <input type="enviar" value="ENVIAR" />
                </form>
            </div>
        </div>




    </>

    );
}

export default Contato;