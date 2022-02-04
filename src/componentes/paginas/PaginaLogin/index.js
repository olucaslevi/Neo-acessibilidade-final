import React, { useState } from 'react';
import './index.css';
import {Container,Stack} from 'react-bootstrap';
import { auth } from "./../../../firebase-config";
import 'bootstrap';
import {createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
} from 'firebase/auth'; //importando dependencias de autenticacao do Google Firebase.
//Importando a variavel que lida com o auth criada no firebase-config
import imguser from './../../Navbar/none.png';
import googleImg from './../PaginaLogin/gImg.png';

const GoogleProvider = new GoogleAuthProvider();

function Login(){
    //construtores
    const [registerEmail,setRegisterEmail] = useState("");
    const [registerPassword,setRegisterPassword] = useState("");
    const [rememberme,setRememberme] = useState(true);
    const [loginEmail,setLoginEmail] = useState("");
    const [loginPassword,setLoginPassword] = useState("");

    const [user,setUser] = useState({});

    onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
    })
    

    //funcoes principais
    
    const register = async ()=>{
        try{ //Tentar criar a conta
            //Cria o "user" e envia para o firebase o valor dessa constante.
        const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword);
            ///console.log(user);
            ///
            ///console.log(auth.currentUser.email);
            ///console.log(auth.currentUser.photoURL);
            ///console.log(auth.currentUser.displayName);
            //console.log(auth.currentUser.emailVerified);
        } //lidando com erros 
        catch (error){
            console.log(error.message);
        }
    };
    const login = async ()=>{
        try{ //Tentar criar a conta
            //Cria o "user" e envia para o firebase o valor dessa constante.
        const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword);
            ///console.log(user);
            ///console.log(auth.currentUser.email);
        } //lidando com erros 
        catch (error){
            console.log(error.message);
        }
    };
    const logout = async ()=>{
        await signOut(auth);
    };

    const toggleCheckBox = () =>{
        setRememberme(rememberme?!rememberme:rememberme);
        console.log(rememberme);
    }
    
    return(
    <><div className="pagdescription">
            <h0>LOGIN</h0>
        </div>
        <div className="box">



                {user?
                    <div id="painel_user">{user.emailVerified ? <img className='fotinha' src={user.photoURL} /> : <img className='fotinha' height={100} src={imguser}></img>}<br />
                    <p>Nome: {user?.displayName}
                        {' (Novo Usuário) '}<br/>
                        E-mail: {user?.email}<br />
                        Data de criação: {user.metadata?.creationTime}</p><br />
                    <button type="button" class="btn btn-secondary">Mudar senha</button><br />
                    <button type="button" onClick={logout} class="btn btn-danger">Sair</button><br/></div>
                    :
                    <><p>{}</p><div id="login" class="form-group" classname="Área de E-mail."><h0>Faça Login:</h0><br />
                        <label for="inputEmailLogin" classname="Campo de E-mail.">Endereço de E-mail</label>
                        <input onChange={(event) => {
                            //Usa o react useState p/ guardar modificações no target desse input.
                            //Email do Login.
                            setLoginEmail(event.target.value);
                        } } type="email" class="form-control" id="inputEmailRegistro" aria-describedby="emailHelp" placeholder="Seu E-mail" />
                    </div><div class="form-group" classname="Área de senha">
                            <label for="senha1" classname="Primeiro Campo de Senha.">Senha:</label>
                            <input onChange={(event) => {
                                //Usa o react useState p/ guardar modificações no target desse input.
                                //Senha do Login.
                                setLoginPassword(event.target.value);
                            } } type="password" class="form-control" id="senha1" placeholder="Sua senha" />
                            
                            <label class="form-check-label" for="exampleCheck1">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" value={true}  onChange={toggleCheckBox}/>
                               {} Lembrar senha ?</label><br/>
                            <button type="submit" onClick={login} class="btn btn-primary">Entrar</button>
                            <p>Ainda não possui conta?<button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Cadastre-se
                            </button></p><br />
                            <div cursor='pointer' className="div-button" onClick={() => { signInWithRedirect(auth, GoogleProvider); } }><img class='imgany' height={50} src={googleImg} />{}  Entrar com Google</div><br />
                           

                        </div></>
                    
                    }
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <div class="form-group" classname="Área de E-mail."><h0>Registre-se:</h0><br />
                    <label for="inputEmailRegistro" classname="Campo de E-mail.">Endereço de E-mail</label>
                    <input onChange={(event) => {
                        //Usa o react useState p/ guardar modificações no target desse input.
                        //Email do Login.
                        setRegisterEmail(event.target.value);
                    } } type="email" class="form-control" id="inputEmailRegistro" aria-describedby="emailHelp" placeholder="Seu E-mail" />
                </div>
                <div class="form-group" classname="Área de senha">
                    <label for="senha1" classname="Primeiro Campo de Senha.">Senha:</label>
                    <input onChange={(event) => {
                        //Usa o react useState p/ guardar modificações no target desse input.
                        //Senha do Login.
                        setRegisterPassword(event.target.value);
                    } } type="password" class="form-control" id="senha1" placeholder="Sua senha" />
                </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" onClick={register} data-bs-dismiss="modal" class="btn btn-primary">Criar Conta</button>
                        </div>
                        </div>
                    </div>
                    </div>
            </div></>

    );
    
};

export default Login;