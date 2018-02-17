import React from 'react';
import NavList from 'components/NavList';
import './index.scss';


const Nav = () => (
  <div className='Nav__container'>
    <div className='Nav__title'>
      <h1 className='Nav__title-text'>Box.</h1>
    </div>
    <div className='Nav__list'>
      <NavList />
    </div>
    <div className='Nav__button'></div>
  </div>
    
);

export default Nav;
