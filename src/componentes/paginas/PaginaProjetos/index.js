import React from "react";
import "./../PaginaProjetos/index.css";
import { Container } from 'react-bootstrap';
import { db, dbFirestore } from './../../../firebase-config';
import { uid } from "uid";
import { set , ref , onValue, remove, update } from 'firebase/database';
import { onSnapshot, collection, orderBy, query, getDocs,where, addDoc, doc, deleteDoc,querySnapshot } from "firebase/firestore";
import { useState,useEffect } from "react";
import Axios  from "axios";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./../../../firebase-config";

//______________IMPORTANTE__________:


//.........Enquanto está editando, o Gabarito é igual ao HandleGabarito
//, quando clica em FECHAR ou ATUALIZAR o handleHagabrito ze6a


//Com o useEffect, qualquer coisa vai ser chamada quando a página renderizar novamente.

const Projetos = ()=>{
    
    const [todo,setTodo] = useState("");

    const [command, setCommand] = useState("");
    const [command1, setCommand1] = useState("");
    const [user,setUser] = useState({});
    const [details,setDetails] = useState([]);
    
    // "dados" armazena 
    const [dados,setDados] = useState([]);      

    const [isEdit,setIsEdit] = useState(false);
    const [tempUuid,setTempUuid] = useState("");

    const collectionRef = collection(dbFirestore,'Questions')
    const documentRef = doc(dbFirestore, 'Questions','ZAdMxjBw30J6KW94ejPy');

    const usarFirebase  = async () =>{
        
        const q = query(collection(dbFirestore,"Questions"));
        ///realtime collect data
        const querySnapshot= await getDocs(q);
        const data = querySnapshot.docs.map((doc)=>({
            ...doc.data(),
            id: doc.id,
        }));
        setDetails(data);
        console.log('details:', details);
    }
    
 
    

    //É chamado ao alterar o input, quando clicar em Enviar envia o todo atualizado.

    const handleTodoChange = (e) => {
        setTodo(e.target.value)
    };

    const handleCommandChange = (e) => {
        setCommand(e.target.value)
    };

    const handleCommandChange1 = (e) => {
        setCommand1(e.target.value)
    };

    const handleDelete = (id) => {
        const documentRef = doc(dbFirestore, 'Questions', id);
        deleteDoc(documentRef)
        console.log(id,' Deletado com sucesso!!')
        
    }
    ///read________________________________________________
    ///Usando snapshot() com UseEffect() p/ ler ao inves do get().
    ///Firebase / Firestore
                ///Collection Ref
    useEffect(() => {
        usarFirebase();
  
        ///Recebendo os Dados do (Firestore):
        ///query:

        getDocs(collectionRef)
        .then((snapshot)=>{
            let Questions = []
            snapshot.docs.forEach((doc)=>{
                Questions.push({...doc.data(), id: doc.id})

            })
            console.log('Questões: ',Questions);
        })
        .catch(err =>{
            console.log(err.message);
        })
            

    }, []);
    onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        
    })

    ///update
    const handleUpdate = (todo) =>{
        setIsEdit(true);
        setTempUuid(todo.uuid);
        setTodo(todo.todo);
        setCommand(todo.command);
        setCommand1(todo.command1);

    }

    ///delete
    const handleRemove = (todo) => {
        remove(ref(db, `/${todo.uuid}`));
    }
    

    //mudança de estado de qualquer input ou label
    const handleSubmitChange = () =>{
        update(ref(db, `/${tempUuid}`),{
            todo,
            uuid: tempUuid,
            command,
            command1,
        })
        setTodo("");
        setCommand("");
        setCommand1("");

    }
    const handleFechar = () => {
        setTodo("");
        setCommand("");
        setCommand1("");

        }
    
    const handleEnviar = (e) =>{
        e.preventDefault();
        addDoc(collectionRef, {
            comando: todo,
            itemA: command,
            itemB: command1,
        })
        setTodo("");
        setCommand("");
        setCommand1("");

    }

    ///Get Collection Data
    

    return(<><Container>
            <div><div className="pagdescription">
            <h0>PROJETOS</h0>
            </div>
                
                    {
                    details.map(
                        (val,id) =>{
                    return <div key={id} className="noticia">
                    <br/>
                    <h0>{val.comando}</h0><br/> <p>{val.itemA}</p><br/>
                    <img src={val.itemB}/><br/>
                    {/* Deletar a postagem */}
                    <button class="btn btn-danger" onClick={()=>{handleDelete(val.id)}}>Deletar</button></div>}
                    )
                    }
                    </div>
        {!user?
        <div>{}</div>:<div className="container-box">
        <h3>Adicionar Postagem:
        </h3><br/>
        <div className="container-box">
        <h3>Chamada:</h3>
        <div>
        <input onChange={handleTodoChange} type='text' value={todo} ></input><br/>
        <h3>Texto:</h3><br/>
        <input onChange={handleCommandChange} type='text' value={command} ></input><br/>
        <h3>Imagem (link):</h3><br/>
        <input onChange={handleCommandChange1} type='text' value={command1} ></input><br/>
        <br/>
        <div> 
            <button class="btn btn-dark" onClick={handleEnviar}>Enviar</button>
        </div>
        </div>
        </div>
        </div>}
        </Container>
        </>
    );
}

export default Projetos;