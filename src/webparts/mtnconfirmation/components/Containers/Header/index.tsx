import * as React from 'react';
import styles from './header.module.scss'

const Header = ({ title }) => {
    return <div className={styles.mtn__header}>
        <div className={styles.mtn__header__logo}>
           <div className={styles.imageContainer}><img src={require('../../assets/logo.png')} alt="logo" /></div> 
        </div>

        <div className={styles.mtn__header__text}><h1>{title}</h1></div>
    </div>;
};

export default Header;
