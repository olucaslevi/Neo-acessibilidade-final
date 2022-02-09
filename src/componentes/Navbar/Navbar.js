import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';  
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { auth } from "./../../firebase-config";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import imguser from './../../../src/componentes/Navbar/none.png';
import imgbutton from "./../Navbar/imgbutton.png";
import img1 from "./../Navbar/1.png";
import img2 from "./../Navbar/2.png";
import img3 from "./../Navbar/3.png";
import img4 from "./../Navbar/4.png";
import logotipo from "./../Navbar/logotipo2.png";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [user,setUser] = useState({});
  const [acess, setAcess] = useState(false);
  const [tamanho,setTamanho] = useState(0);
  const [contraste,setContraste] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  

  onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser);
    console.log(user);
})

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  
  const logout = async ()=>{
    await signOut(auth);
};

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () =>{
    !acess?setShow(true):setShow(false);
     
  } 
  const HandleAumentarTamanho = () => {
    setTamanho(tamanho+1);
    console.log(tamanho);
  }
  const HandleAumentarContraste = () =>{
    setContraste(!contraste);
    console.log(contraste);
  }

  return (
    <>
      <nav className='navbar-er'>
        
        <div className='navbar-container'>


        {!user?<div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>:
          <div className='menu-icon' onClick={handleClick}>
            <i className={click?'fas-time2':'fas-time3'} />
          <p>
          </p> 
        </div>
          }


          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img className='imgLogo' width={65} src={logotipo}/>
          </Link>
          

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Início
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/projetos'
                className='nav-links'
                onClick={closeMobileMenu}
              >{}
                Projetos
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contato'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Sobre nós
              </Link>
            </li>
            

              {user?<li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={logout}
              >
                Sair
              </Link>
            </li>:<li><Link
                to='/Login'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Acessar
              </Link></li>

              }
          </ul>

          {
          user?<>
          <div onClick={handleClick}>{user.photoURL?
            <img  width="60" className='fotinha'  src={user.photoURL}/> 
            : 
            <img className='fotinha' width="60"  src={imguser}/>
            }</div></>
          :
          button && <Button buttonStyle='btn--outline'>ACESSAR</Button>
          }
        </div>  
      </nav>
    </>
  );
}

export default Navbar;