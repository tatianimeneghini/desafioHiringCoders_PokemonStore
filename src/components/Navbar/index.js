import React, { useState } from 'react';
import './style.css';
import logo from '../../images/logo2.gif'
import { MdAccountBox, MdSearch } from 'react-icons/md';

export default function NavBar({ onSearchClick }) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
  <div className='Navbar'>

    <a href='https://pokeapi.co/' target='_blank' rel='noopener noreferrer'>
      <img className='logo' src={logo} alt='Pokémon' />
    </a>
    <div className='searchBar'>

      <input placeholder='pesquisar'
        type='text'
        onChange={e => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter')
            return onSearchClick(searchTerm);
        }} />

      <MdSearch className='searchIcon'
        color='#6495ed'
        size={20}
        onClick={() => { return onSearchClick(searchTerm) }} />

    </div>

    <a href='https://github.com/tatianimeneghini/desafioHiringCoders_PokemonStore.git' target='_blank' rel='noopener noreferrer'>
      <MdAccountBox 
        className='profileIcon'
        color='#6495ed'
        size={50} 
      />
    </a>

  </div>
  );
}