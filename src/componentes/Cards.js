import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Aqui baixo segue o nome dos projetos</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/imagens/IMAGEM_PROJETO_01.PNG'
              text='Lorem, ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              label='Descrever o tema aqui'
              path='/projetos'
            />
            <CardItem
              src='/imagens/IMAGEM_PROJETO_02.PNG'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              label='Descrever o tema aqui'
              path='/projetos'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/imagens/IMAGEM_PROJETO_03.PNG'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              label='Descrever o tema aqui'
              path='/projetos'
            />
            <CardItem
              src='/imagens/IMAGEM_PROJETO_01.PNG'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              label='Descrever o tema aqui'
              path='/projetos'
            />
            <CardItem
              src='/imagens/IMAGEM_PROJETO_01.PNG'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              label='Descrever o tema aqui'
              path='/projetos'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;