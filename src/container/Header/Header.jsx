import React from 'react';
import images from '../../constants/images';
import './Header.css'

import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour"/>
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{margin:"1rem 0 2rem 0",fontSize:"14px"}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
      <button className='custom__button' type='button'>Explore menu</button>
    </div>
    <div className='app__wrapper_img'>
        <img className='home__img' src={images.welcome} alt="" />
    </div>
  </div>
);

export default Header;
