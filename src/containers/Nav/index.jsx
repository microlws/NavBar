import React from 'react';
import NavList from 'components/NavList';
import './index.scss';


const Nav = () => (
  <div className='nav__container'>
    <div className='nav__title-container'>
      <h1 className='nav__title-text'>Box.</h1>
    </div>
    <div className='nav__list-container'>
      <NavList />
    </div>
    <div className='nav__button-container' />
  </div>
);

export default Nav;
