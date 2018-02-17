import React from 'react';
import NavTitle from 'components/NavTitle';
import NavList from 'components/NavList';
import NavButton from 'components/NavButton';
import './index.scss';


const Nav = () => (
  <div className='nav__container'>
    <div className='nav__container-title'>
      <NavTitle />
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
