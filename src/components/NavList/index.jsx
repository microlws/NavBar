import React from 'react';
import './index.scss';


const NavList = () => (
  <ul className='nav__list'>
    <li className='nav__list-items'>
      <a className='nav__list-links' href='www.badgers.com'>Product</a>
    </li>
    <li className='nav__list-items'>
      <a className='nav__list-links' href='www.badgers.com'>Showcase</a>
    </li>
    <li className='nav__list-items'>
      <a className='nav__list-links' href='www.badgers.com'>Pricing</a>
    </li>
    <li className='nav__list-items'>
      <a className='nav__list-links' href='www.badgers.com'>Blog</a>
    </li>
    <li className='nav__list-items'>
      <a className='nav__list-links' href='www.badgers.com'>Support</a>
    </li>
  </ul>
);

export default NavList;
