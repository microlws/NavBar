import React from 'react';
import NavList from 'components/NavList';
import NavButton from 'components/NavButton';
import './index.scss';


const Nav = () => (
  <div className='nav__container'>
    <div className='nav__container-title'>
      <h1 className='nav__title-text'>Box.</h1>
    </div>
    <div className='nav__container-list'>
      <NavList />
    </div>
    <div className='nav__container-button'>
      <NavButton />
    </div>
  </div>
);

export default Nav;
