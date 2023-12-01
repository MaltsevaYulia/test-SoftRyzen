import React from 'react';
import Logo from 'components/Logo/Logo';
import { useMediaQuery } from '@react-hook/media-query';
import sprite from 'assets/sprite.svg';
import css from './Header.module.css';
import { useState } from 'react';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';


const Header = () => {
  const [isChangeColor, setIsChangeColor] = useState(false);
  const isBigScreen = useMediaQuery('(min-width: 768px)');
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const openBurgerMenu = () => {
      console.log("🚀 ~ openBurgerMenu ~ ")
    setIsBurgerOpen(true);
  };


  const closeBurgerMenu = () => {
    console.log('🚀 ~ closeBurgerMenu ~ ');
    setIsBurgerOpen(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setIsChangeColor(true);
    } else {
      setIsChangeColor(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <header
      className={isChangeColor ? `${css.header} ${css.active}` : css.header}
    >
      <Logo />
      <div className={css.container}>
        <button type="button" className={css.btn} onClick={openBurgerMenu}>
          <svg className={css.iconMenu} width="16" height="16">
            <use href={`${sprite}#icon-menu`} />
          </svg>
        </button>

        {isBigScreen && (
          <a href="#contactUs" className={css.link}>
            <span className={css.linkText}>Get in touch</span>
            <span className={css.round}></span>
          </a>
        )}
      </div>
      {isBurgerOpen && <BurgerMenu closeBurgerMenu={closeBurgerMenu} />}
      {/* <div id="burger">
        <BurgerMenu
          pageWrapId={'page-wrap'}
          outerContainerId={'burger'}
          right
        />

        <div id="page-wrap">
          <h1>Click to show menu</h1>
        </div>
      </div> */}
    </header>
  );
};

export default Header;