import React from 'react';
import Logo from 'components/Logo/Logo';
import sprite from 'assets/sprite.svg';
import css from './Footer.module.css';
import { handleScroll } from 'helpers/hendleScroll';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <Logo />

        <div className={css.social}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={css.link}
            aria-label="go to facebook"
          >
            <svg width="24" height="24" className={css.icon}>
              <use href={`${sprite}#icon-facebook`} width="24" height="24" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={css.link}
            aria-label="go to instagram"
          >
            <svg width="24" height="24" className={css.icon}>
              <use href={`${sprite}#icon-instagram`} />
            </svg>
          </a>
        </div>
        <button
          type="button"
          onClick={() => handleScroll('main')}
          className={css.btn}
          aria-label="go to main section"
        >
          <svg className={css.iconArrow} width="16" height="16">
            <use href={`${sprite}#icon-arrow-up`} />
          </svg>
        </button>
      </div>
      <div className={css.wrapper}>
        <a
          href="https://www.google.com/maps/d/u/0/viewer?mid=10uSM3H-mIU3GznYo2szRIEphczw&hl=en_US&ll=49.83104779596067%2C24.03532398042603&z=17"
          target="_blank"
          rel="noopener noreferrer"
          className={css.link}
        >
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </a>
        <a href="mailto:office@ecosolution.com" className={css.link}>
          office@ecosolution.com
        </a>

        <p className={css.link}>
          ecosolution &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
