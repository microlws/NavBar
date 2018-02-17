import React from 'react';
import './index.scss';
import NavListItems from 'components/NavListItems';

const Nav = () => (
  <div className='Nav'>
    <div className='Nav__title'>
      <h1 className='Nav__title-text'>Box.</h1>
    </div>
    <div className='Nav__list'>
      <NavListItems />
    </div>
    <div className='Nav__button'></div>
  </div>
    
);

export default Nav;