import React from 'react';
import sprite from 'assets/sprite.svg';
import css from './BurgerMenu.module.css';
import { navBarTitle } from 'constants/Navbar';
import SocialIcons from 'components/SocialIcons/SocialIcons';
import { handleScroll } from 'helpers/hendleScroll';

const BurgerMenu = ({ closeBurgerMenu }) => {
  return (
    <div className={css.burgerConteiner}>
      <div>
        <button className={css.btn} type="button" onClick={closeBurgerMenu} aria-label="close burger menu">
          <svg className={css.iconClose} width="20" height="20">
            <use href={`${sprite}#icon-close`} />
          </svg>
          <span className={css.btnText}>close</span>
        </button>
        <nav className={css.nav}>
          <ul className={css.list}>
            {navBarTitle.map(({ title, id }) => (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => handleScroll(id)}
                  className={css.link}
                >
                  <span className={css.linkText}>{title}</span>
                  <svg className={css.iconArrow} width="20" height="20">
                    <use href={`${sprite}#icon-arrow-right-up`} />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <SocialIcons />
    </div>
  );
};

export default BurgerMenu;
